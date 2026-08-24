---
title: "e2e.chain.changeSetValue"
original: "https://core.telegram.org/constructor/e2e.chain.changeSetValue"
section: ref
description: "Updates the key-value trie state for an E2E conference call blockchain."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"e2e.chain.changeSetValue","url":"/constructor/e2e.chain.changeSetValue/"}]
layout: layout.njk
---

# e2e.chain.changeSetValue

Updates the [key-value trie state for an E2E conference call blockchain](/api/end-to-end/group-calls/#change-types-for-group-calls).

```
e2e.chain.changeSetValue#7c4f9bfa key:bytes value:bytes = e2e.chain.Change;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>key</strong></td><td style="text-align: center;"><a href="/type/bytes/">bytes</a></td><td>Key-value trie key; clients that do not implement the trie must ignore its contents</td></tr><tr><td><strong>value</strong></td><td style="text-align: center;"><a href="/type/bytes/">bytes</a></td><td>Key-value trie value; clients that do not implement the trie must ignore its contents and accept the containing block's <code>state_proof.kv_hash</code></td></tr></tbody></table>

### Type

[e2e.chain.Change](/type/e2e.chain.Change/)

### Related pages

#### [E2E Group Calls](/api/end-to-end/group-calls/)

End-to-end encryption used for Telegram group voice and video calls, using a blockchain for state management.
