---
title: "End-to-End Encrypted Voice and Video Calls"
original: "https://core.telegram.org/api/end-to-end/video-calls"
section: api
description: "This article describes the end-to-end encryption used for Telegram voice and video calls."
crumbs: [{"title":"API","url":"/api/"},{"title":"End-to-End Encrypted Voice and Video Calls","url":"/api/end-to-end/video-calls/"}]
layout: layout.njk
---

# End-to-End Encrypted Voice and Video Calls

This article describes the end-to-end encryption used for Telegram **voice** and **video calls**.

##### Related Articles

-   [End-to-End Encryption in Secret Chats](/api/end-to-end/)
-   [Emoji fingerprint generation »](/api/end-to-end/group-calls/#emoji-fingerprint-generation)
-   [Security Guidelines for Client Developers](/mtproto/security_guidelines/)

* * *

## Establishing Calls

Before a call is ready, some preliminary actions have to be performed. The calling party needs to contact the party to be called and check whether it is ready to accept the call. Besides that, the parties have to negotiate the protocols to be used, learn the IP addresses of each other or of the Telegram relay servers to be used (so-called _reflectors_), and generate a one-time encryption key for this voice call with the aid of _Diffie--Hellman key exchange_. All of this is accomplished in parallel with the aid of several Telegram API methods and related notifications. This document covers details related to key generation, encryption and security.

## Key Generation

The Diffie-Hellman key exchange, as well as the whole protocol used to create a new voice call, is quite similar to the one used for [Secret Chats](/api/end-to-end/#key-generation). We recommend studying the linked article before proceeding.

However, we have introduced some important changes to facilitate the [key verification process](#key-verification). Below is the entire exchange between the two communicating parties, the Caller (A) and the Callee (B), through the Telegram servers (S).

-   _A_ executes [messages.getDhConfig](/method/messages.getDhConfig/) to find out the 2048-bit Diffie-Hellman prime _p_ and generator _g_. The client is expected to check whether _p_ is a safe prime and perform all the [security checks](/api/end-to-end/#sending-a-request) necessary for secret chats.
-   _A_ chooses a random value of _a_, 1 &lt; a &lt; p-1, and computes _g\_a:=power(g,a) mod p_ (a 256-byte number) and _g\_a\_hash:=SHA256(g\_a)_ (32 bytes long).
-   _A_ invokes (sends to server _S_) [phone.requestCall](/method/phone.requestCall/), which has the field `g_a_hash:bytes`, among others. For this call, this field is to be filled with _g\_a\_hash_, **not** _g\_a_ itself.
-   The Server _S_ performs privacy checks and sends an [updatePhoneCall](/constructor/updatePhoneCall/) update with a [phoneCallRequested](/constructor/phoneCallRequested/) constructor to all of _B_'s active devices. This update, apart from the identity of _A_ and other relevant parameters, contains the _g\_a\_hash_ field, filled with the value obtained from _A_.
-   _B_ accepts the call on one of their devices, stores the received value of _g\_a\_hash_ for this instance of the voice call creation protocol, chooses a random value of _b_, 1 &lt; b &lt; p-1, computes _g\_b:=power(g,b) mod p_, performs all the required security checks, and invokes the [phone.acceptCall](/method/phone.acceptCall/) method, which has a _g\_b:bytes_ field (among others), to be filled with the value of _g\_b_ itself (not its hash).
-   The Server _S_ sends an [updatePhoneCall](/constructor/updatePhoneCall/) with the [phoneCallDiscarded](/constructor/phoneCallDiscarded/) constructor to all other devices _B_ has authorized, to prevent accepting the same call on any of the other devices. From this point on, the server _S_ works only with that of _B_'s devices which has invoked [phone.acceptCall](/method/phone.acceptCall/) first.
-   The Server _S_ sends to _A_ an [updatePhoneCall](/constructor/updatePhoneCall/) update with [phoneCallAccepted](/constructor/phoneCallAccepted/) constructor, containing the value of _g\_b_ received from _B_.
-   _A_ performs all the usual security checks on _g\_b_ and _a_, computes the Diffie--Hellman key _key:=power(g\_b,a) mod p_ and its fingerprint _key\_fingerprint:long_, equal to the lower 64 bits of _SHA1(key)_, the same as with secret chats. Then _A_ invokes the [phone.confirmCall](/method/phone.confirmCall/) method, containing `g_a:bytes` and `key_fingerprint:long`.
-   The Server _S_ sends to _B_ an [updatePhoneCall](/constructor/updatePhoneCall/) update with the [phoneCall](/constructor/phoneCall/) constructor, containing the value of _g\_a_ in _g\_a\_or\_b:bytes_ field, and _key\_fingerprint:long_
-   At this point _B_ receives the value of _g\_a_. It checks that _SHA256(g\_a)_ is indeed equal to the previously received value of _g\_a\_hash_, performs all the [usual Diffie-Hellman security checks](/mtproto/security_guidelines/), and computes the key _key:=power(g\_a,b) mod p_ and its fingerprint, equal to the lower 64 bits of _SHA1(key)_. Then it checks that this fingerprint equals the value of `key_fingerprint:long` received from the other side, as an implementation sanity check.

At this point, the Diffie--Hellman key exchange is complete, and both parties have a 256-byte shared secret key _key_ which is used to encrypt all further exchanges between _A_ and _B_.

It is of paramount importance to accept each update only once for each instance of the key generation protocol, discarding any duplicates or alternative versions of already received and processed messages (updates).

## Encryption

> This document describes encryption in **voice and video calls** as implemented in Telegram apps with versions **7.0** and above. See [this document](/api/end-to-end/voice-calls/) for details on encryption used in **voice calls** in app versions released before **August 14, 2020**.

The [Telegram Voice and Video Call Library](https://github.com/TelegramMessenger/tgcalls) uses an optimized version of [MTProto 2.0](https://core.telegram.org/) to send and receive **packets**, consisting of one or more end-to-end encrypted **messages** of various types ([_ice_](https://webrtcglossary.com/ice/) _candidates list, video formats, remote video status, audio stream data, video stream data, message ack_ or _empty_).

This document describes only the encryption process, leaving out encoding and network-dependent parts.

The library starts working with:

-   An [encryption key](#key-generation) `key` shared between the parties, as generated above.
-   Information whether the call is **outgoing** or **incoming**.
-   Two data transfer channels: **signaling**, offered by the Telegram API, and **transport** based on WebRTC.

Both data transfer channels are unreliable (messages may get lost), but **signaling** is slower and more reliable.

### Encrypting Call Data

The body of a packet (`decrypted_body`) consists of several messages and their respective `seq` numbers concatenated together.

-   decrypted\_body = message\_seq1 + message\_body1 + message\_seq2 + message\_body2

Each `decrypted_body` is unique because no two `seq` numbers of the first message can be the same. If only old messages need to be re-sent, an _empty_ message with new unique `seq` is added to the packet first.

The [encryption key](#key-generation) `key` is used to compute a 128-bit `msg_key` and then a 256-bit `aes_key` and a 128-bit `aes_iv`:

-   msg\_key\_large = SHA256 (substr(key, 88+x, 32) + decrypted\_body);
-   msg\_key = substr (msg\_key\_large, 8, 16);
-   sha256\_a = SHA256 (msg\_key + substr (key, x, 36));
-   sha256\_b = SHA256 (substr (key, 40+x, 36) + msg\_key);
-   aes\_key = substr (sha256\_a, 0, 8) + substr (sha256\_b, 8, 16) + substr (sha256\_a, 24, 8);
-   aes\_iv = substr (sha256\_b, 0, 4) + substr (sha256\_a, 8, 8) + substr (sha256\_b, 24, 4);

`x` depends on whether the call is **outgoing** or **incoming** and on the connection type:

-   x = 0 for **outgoing** + **transport**
-   x = 8 for **incoming** + **transport**
-   x = 128 for **outgoing** + **signaling**
-   x = 136 for **incoming** + **signaling**

This allows apps to decide which packet types will be sent to which connections and work in these connections independently (with each having its own `seq` counter).

The resulting `aes_key` and `aes_iv` are used to encrypt `decrypted_body`:

-   encrypted\_body = AES\_CTR (decrypted\_body, aes\_key, aes\_iv)

The packet that gets sent consists of `msg_key` and `encrypted_body`:

-   packet\_bytes = msg\_key + encrypted\_body

When received, the packet gets decrypted using `key` and `msg_key`, after which `msg_key` is checked against the relevant `SHA256` substring. If the check fails, the packet **must** be discarded.

### Protecting Against Replay Attacks

Each of the peers maintains its own 32-bit monotonically increasing counter for outgoing messages, `seq`, starting with `1`. This `seq` counter is prepended to each sent message and increased by `1` for each new message. No two `seq` numbers of the first message in a packet can be the same. If only old messages need to be re-sent, an _empty_ message with a new unique `seq` is added to the packet first. When the `seq` counter reaches `2^30`, the call must be aborted. Each peer stores `seq` values of all the messages it has received (and processed) which are larger than `max_received_seq - 64`, where `max_received_seq` is the largest `seq` number received so far.

If a packet is received, the first message of which has a `seq` that is smaller or equal to `max_received_seq - 64` or its `seq` had already been received, the message is discarded. Otherwise, the `seq` values of all incoming messages are memorized and `max_received_seq` is adjusted. This guarantees that no two packets will be processed twice.

## Key Verification

To verify the key, and ensure that no MITM attack is taking place, both parties concatenate the secret key _key_ with the value _g\_a_ of the Caller (_A_) and compute `fingerprint_hash = SHA256(key || g_a)`. This 32-byte hash is converted into four emojis using the same [emoji fingerprint generation algorithm used by end-to-end encrypted group calls »](/api/end-to-end/group-calls/#emoji-fingerprint-generation). The specifics of the protocol guarantee that comparing four emoticons out of the fingerprint emoji table (which contains 333 emojis) is sufficient to prevent eavesdropping (MiTM attack on DH) with a probability of **0.9999999999**.

This is because instead of the standard Diffie-Hellman key exchange which requires only two messages between the parties:

-   A->B : (generates a and) sends g\_a := g^a
-   B->A : (generates b and true key (g\_a)^b, then) sends g\_b := g^b
-   A : computes key (g\_b)^a

we use a **three-message modification** thereof that works well when both parties are online (which also happens to be a requirement for voice calls):

-   A->B : (generates a and) sends g\_a\_hash := hash(g^a)
-   B->A : (stores g\_a\_hash, generates b and) sends g\_b := g^b
-   A->B : (computes key (g\_b)^a, then) sends g\_a := g^a
-   B : checks hash(g\_a) == g\_a\_hash, then computes key (g\_a)^b

The idea here is that _A_ commits to a specific value of _a_ (and of _g\_a_) without disclosing it to _B_. _B_ has to choose its value of _b_ and _g\_b_ without knowing the true value of _g\_a_, so that it cannot try different values of _b_ to force the final key _(g\_a)^b_ to have any specific properties (such as fixed lower 32 bits of SHA256(key)). At this point, _B_ commits to a specific value of _g\_b_ without knowing _g\_a_. Then _A_ has to send its value _g\_a_; it cannot change it even though it knows _g\_b_ now, because the other party _B_ would accept only a value of _g\_a_ that has a hash specified in the very first message of the exchange.

If some impostor is pretending to be either _A_ or _B_ and tries to perform a Man-in-the-Middle Attack on this Diffie--Hellman key exchange, the above still holds. Party _A_ will generate a shared key with _B_ -- or whoever pretends to be _B_ -- without having a second chance to change its exponent _a_ depending on the value _g\_b_ received from the other side; and the impostor will not have a chance to adapt his value of _b_ depending on _g\_a_, because it has to commit to a value of _g\_b_ before learning _g\_a_. The same is valid for the key generation between the impostor and the party _B_.

The use of hash commitment in the DH exchange constrains the attacker to only **one guess** to generate the correct visualization in their attack, which means that using just over 33 bits of entropy represented by four emoji in the visualization is enough to make a successful attack highly improbable.

> For a slightly more user-friendly explanation of the above see: [How are calls authenticated?](/techfaq/)
