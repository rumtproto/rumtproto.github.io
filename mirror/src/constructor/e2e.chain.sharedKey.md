---
title: "e2e.chain.sharedKey"
original: "https://core.telegram.org/constructor/e2e.chain.sharedKey"
section: ref
description: "Encrypted shared group key material for an E2E conference call."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"e2e.chain.sharedKey","url":"/constructor/e2e.chain.sharedKey/"}]
layout: layout.njk
---

# e2e.chain.sharedKey

Encrypted [shared group key material](/api/end-to-end/group-calls/#shared-key-encryption) for an E2E conference call.

```
e2e.chain.sharedKey#8a847e7f ek:int256 encrypted_shared_key:string dest_user_id:Vector<long> dest_header:Vector<bytes> = e2e.chain.SharedKey;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>ek</strong></td><td style="text-align: center;"><a href="/type/int256/">int256</a></td><td>Ephemeral public key used to derive per-participant secrets for decrypting the shared key.</td></tr><tr><td><strong>encrypted_shared_key</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Encrypted raw group shared key.</td></tr><tr><td><strong>dest_user_id</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/long/">long</a>&gt;</td><td>Exactly one unique user ID for each participant in the current group state, in any order</td></tr><tr><td><strong>dest_header</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/bytes/">bytes</a>&gt;</td><td>Encrypted per-participant headers containing the one-time secret needed to decrypt <code>encrypted_shared_key</code>; each entry corresponds to a user ID located under the same key in <code>dest_user_id</code>.</td></tr></tbody></table>

### Type

[e2e.chain.SharedKey](/type/e2e.chain.SharedKey/)

### Related pages

#### [E2E Group Calls](/api/end-to-end/group-calls/)

End-to-end encryption used for Telegram group voice and video calls, using a blockchain for state management.
