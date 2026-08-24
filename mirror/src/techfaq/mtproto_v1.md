---
title: "FAQ for the Technically Inclined (MTProto v.1.0)"
original: "https://core.telegram.org/techfaq/mtproto_v1"
section: faq
description: "The principal differences from version 1.0 (described here and here for reference) are as follows:"
crumbs: []
layout: layout.njk
---

# FAQ for the Technically Inclined (MTProto v.1.0)

> This FAQ covers questions about the previous version of [MTProto](http://core.telegram.org/mtproto) (v.1.0) that is now deprecated.  
> For questions about encryption used in up-to-date Telegram clients, kindly refer to [this document](http://core.telegram.org/techfaq).

-   [What's new in MTProto 2.0?](#q-how-is-mtproto-2-0-different-from-version-1-0)
-   [Why did you use SHA-1?](#q-why-did-you-use-sha-1-sha-1-is-broken)
-   [What about IND-CCA?](#what-about-ind-cca)
-   [Hash collisions for Diffie-Hellman keys](#hash-collisions-for-diffie-hellman-keys)

* * *

#### Q: How is MTProto 2.0 different from version 1.0?

The principal differences from version 1.0 ([described here](/mtproto/description_v1/) and [here](/api/end-to-end_v1/) for reference) are as follows:

-   SHA-256 is used instead of SHA-1;
-   Padding bytes are involved in the computation of **msg\_key**;
-   **msg\_key** depends not only on the message to be encrypted, but on a portion of **auth\_key** as well;
-   12..1024 padding bytes are used instead of 0..15 padding bytes in v.1.0.

#### Q: Why did you use SHA-1? SHA-1 is broken!

> The [current version of MTProto](/techfaq/#q-how-does-server-client-encryption-work-in-mtproto) uses SHA-256 in all the critical locations. MTProto 1.0 used to rely on SHA-1.

Even though it is possible for a well-funded attacker to find collisions in SHA-1, crafting a collision alone did not break the MTProto encryption scheme due to the way SHA-1 was used in the protocol. We did not use SHA-1 in any areas where collisions are important, such as digital signatures or file identification.

We used SHA as a component in the KDF and for a security check after transmission. Even if an attacker could create messages with a _chosen_ SHA-1 (a far greater achievement than merely finding a collision), it would not give them any advantage. This is because we used the SHA-1 of the _plaintext_ [\*](#note-on-plaintext), while MTProto passed the _ciphertext_ encrypted with a key unknown to the attacker. In order to threaten this setup, one would need not a collision in SHA-1(ciphertext), but a collision in **SHA-1(AES\_Decrypt(key\_unknown\_to\_attacker, ciphertext))**.

###### Note on 'plaintext':

It is important that the _plaintext_ always contains message length, server salt, session\_id and [other data](/techfaq/#note-1) not known to the attacker. It is crucial that AES decryption keys depend both on msg\_key, and on auth\_key, known only to the parties involved in the exchange.

#### What about IND-CCA?

> The [current version of MTProto](/techfaq/#q-how-does-server-client-encryption-work-in-mtproto) satisfies the criteria for IND-CCA. MTProto 1.0 used to deviate from this property without any effect on message security.

Properties like IND-CCA are convenient for theoretical definitions and scientific inquiry, but they are not directly related to the actual security of communication. There are cases when IND-CCA compliance can be critical, but in the case of MTProto (1.0) the deviation from this property was a minor issue and did not affect message security. Namely, under certain circumstances a ciphertext could be modified so that it would have been accepted and decrypted to the same plaintext as the original unmodified ciphertext. It was impossible for the attacker to tamper with or decipher the plaintext.

The gist, for non-technical readers, is this: Under certain circumstances somebody could take an encrypted message after it was sent (without knowing what was inside), change some symbols in the ciphertext (without being able to alter the actual message inside), and pass it on to you. After decryption, you would receive the same message that was sent and only you and the sender would know what was in it.

To put this case into familiar terms:

> A postal worker could write 'Haha' (using invisible ink!) on the outside of a sealed package that he delivers to you. It didn't stop the package from being delivered, it doesn't allow them to change the contents of the package, and it doesn't allow them to see what was inside.

#### Hash collisions for Diffie-Hellman Keys

Earlier versions of Telegram used a 128-bit fingerprint to create the key visualization. It was theoretically possible to spoof it, provided a man-in-the-middle attacker was prepared to spend [**hundreds of billions of dollars**](https://core.telegram.org/articles/DH_Hash_Collision) to spoof **one** secret chat (even using GPUs or ASICs). It would've also taken such a secret chat an entire month to be created instead of mere seconds, which would've certainly been hard to ignore.

Currently, the fingerprint uses an additional 160 bits from the SHA-256 of the key, yielding a total of 288 fingerprint bits, which makes the already infeasible attacks completely impossible.
