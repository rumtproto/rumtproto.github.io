---
title: "e2e.chain.changeSetSharedKey"
original: "https://core.telegram.org/constructor/e2e.chain.changeSetSharedKey"
section: ref
description: "Establishes a new shared encryption key for an E2E conference call, see change types for group calls »."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"e2e.chain.changeSetSharedKey","url":"/constructor/e2e.chain.changeSetSharedKey/"}]
layout: layout.njk
---

# e2e.chain.changeSetSharedKey

Establishes a new shared encryption key for an E2E conference call, see [change types for group calls »](/api/end-to-end/group-calls/#change-types-for-group-calls).

```
e2e.chain.changeSetSharedKey#987a2158 shared_key:e2e.chain.SharedKey = e2e.chain.Change;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>shared_key</strong></td><td style="text-align: center;"><a href="/type/e2e.chain.SharedKey/">e2e.chain.SharedKey</a></td><td>Encrypted shared key material for all participants in the current group state.</td></tr></tbody></table>

### Type

[e2e.chain.Change](/type/e2e.chain.Change/)

### Related pages

#### [E2E Group Calls](/api/end-to-end/group-calls/)

End-to-end encryption used for Telegram group voice and video calls, using a blockchain for state management.
