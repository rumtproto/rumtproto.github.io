---
title: "E2e.chain.SharedKey"
original: "https://core.telegram.org/type/e2e.chain.SharedKey"
section: ref
description: "Encrypted shared group key material for an E2E conference call."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"E2e.chain.SharedKey","url":"/type/e2e.chain.SharedKey/"}]
layout: layout.njk
---

# E2e.chain.SharedKey

Encrypted [shared group key material](/api/end-to-end/group-calls/#shared-key-encryption) for an E2E conference call.

```
e2e.chain.sharedKey#8a847e7f ek:int256 encrypted_shared_key:string dest_user_id:Vector<long> dest_header:Vector<bytes> = e2e.chain.SharedKey;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/e2e.chain.sharedKey/">e2e.chain.sharedKey</a></td><td>Encrypted <a href="/api/end-to-end/group-calls/#shared-key-encryption">shared group key material</a> for an E2E conference call.</td></tr></tbody></table>

### Related pages

#### [E2E Group Calls](/api/end-to-end/group-calls/)

End-to-end encryption used for Telegram group voice and video calls, using a blockchain for state management.
