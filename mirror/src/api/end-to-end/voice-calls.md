---
title: "End-to-End Encrypted Voice Calls"
original: "https://core.telegram.org/api/end-to-end/voice-calls"
section: api
description: "Before a voice call is ready, some preliminary actions have to be performed. The calling party needs to contact the party to be called and check whether it is ready to accept the…"
crumbs: [{"title":"API","url":"/api/"},{"title":"End-to-End Encrypted Voice Calls","url":"/api/end-to-end/voice-calls/"}]
layout: layout.njk
---

# End-to-End Encrypted Voice Calls

> This document describes encryption in **voice calls** as implemented in Telegram apps with versions **&lt; 7.0**. See [this document](/api/end-to-end/video-calls/) for details on encryption used in **voice and video calls** in app versions released on **August 14, 2020** and later.

##### Related articles

-   [End-to-End Encryption in Voice and Video Calls](/api/end-to-end/video-calls/)
-   [End-to-End Encryption in Secret Chats](/api/end-to-end/)
-   [Security Guidelines for Client Developers](/mtproto/security_guidelines/)

## Establishing voice calls

Before a voice call is ready, some preliminary actions have to be performed. The calling party needs to contact the party to be called and check whether it is ready to accept the call. Besides that, the parties have to negotiate the protocols to be used, learn the IP addresses of each other or of the Telegram relay servers to be used (so-called _reflectors_), and generate a one-time encryption key for this voice call with the aid of _Diffie--Hellman key exchange_. All of this is accomplished in parallel with the aid of several Telegram API methods and related notifications. This document details the generation of the encryption key. Other negotiations will be eventually documented elsewhere.

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

## Encryption of voice data

Both parties _A_ (the Caller) and _B_ (the Callee) transform the voice information into a sequence of small _chunks_ or _packets_, not more than 1 kilobyte each. This information is to be encrypted using the shared key _key_ generated during the initial exchange, and sent to the other party, either directly (P2P) or through Telegram's relay servers (so-called _reflectors_). This document describes only the encryption process for each chunk, leaving out voice encoding and the network-dependent parts.

### Encapsulation of low-level voice data

The low-level data chunk `raw_data:string`, obtained from voice encoder, is first encapsulated into one of the two constructors for the [DecryptedDataBlock](/type/DecryptedDataBlock/) type, similar to [DecryptedMessage](/type/DecryptedMessage/) used in secret chats:

```
decryptedDataBlock#dbf948c1 random_id:long random_bytes:string flags:# voice_call_id:flags.2?int128 in_seq_no:flags.4?int out_seq_no:flags.4?int recent_received_mask:flags.5?int proto:flags.3?int extra:flags.1?string raw_data:flags.0?string = DecryptedDataBlock;
simpleDataBlock#cc0d0e76 random_id:long random_bytes:string raw_data:string = DecryptedDataBlock;
```

Here `out_seq_no` is the chunk's sequence number among all sent by this party (starting from one), `in_seq_no` -- the highest known out\_seq\_no from the received packets. The parameter `recent_received_mask` is a 32-bit mask, used to track delivery of the last 32 packets sent by the other party. The bit _i_ is set if a packet with `out_seq_no` equal to `in_seq_no`\-_i_ has been received.

The higher 8 bits in `flags` are reserved for use by the lower-level protocol (the one which generates and interprets `raw_data`), and will never be used for future extensions of `decryptedDataBlock`.

The parameters `voice_call_id` and `proto` are mandatory until the other side confirms reception of at least one packet by sending a packet with a non-zero `in_seq_no`. After that, they become optional, and the `simpleDataBlock` constructor can be used if the lower level protocol wants to.

The parameter `voice_call_id` is computed from the key `key` and equals the lower 128 bits of its SHA-256.

The `random_bytes` string should contain at least 7 bytes of random data. The field `random_id` also contains 8 random bytes, which can be used as a unique packet identifier if necessary.

### MTProto encryption

Once the data is encapsulated in `DecryptedDataBlock`, it is [TL-serialized](/mtproto/TL/) and encrypted with [MTProto](/mtproto/description/#defining-aes-key-and-initialization-vector), using `key` instead of `auth_key`; the parameter _x_ is to be set to _0_ for messages from _A_ to _B_, and to _8_ for messages in the opposite direction. Encrypted data are prepended by the 128-bit `msg_key` (usual for MTProto); before that, either the 128-bit `voice_call_id` (if P2P is used) or the `peer_tag` (if reflectors are used) is prepended. The resulting data packet is sent by UDP either directly to the other party (if P2P is possible) or to the Telegram relay servers (reflectors).

## Key Verification

To verify the key, both parties concatenate the secret key _key_ with the value _g\_a_ of the Caller ( _A_ ), compute SHA256 and use it to generate a sequence of emoticons. More precisely, the SHA256 hash is split into four 64-bit integers; each of them is divided by the total number of emoticons used (currently 333), and the remainder is used to select specific emoticons. The specifics of the protocol guarantee that comparing four emoticons out of a set of 333 is sufficient to prevent eavesdropping (MiTM attack on DH) with a probability of **0.9999999999**.

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
