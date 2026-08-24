---
title: "e2e.chain.changeNoop"
original: "https://core.telegram.org/constructor/e2e.chain.changeNoop"
section: ref
description: "A no-operation E2E conference call blockchain change, potentially used only to randomize the resulting block hash."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"e2e.chain.changeNoop","url":"/constructor/e2e.chain.changeNoop/"}]
layout: layout.njk
---

# e2e.chain.changeNoop

A no-operation [E2E conference call blockchain change](/api/end-to-end/group-calls/#change-types-for-group-calls), potentially used only to randomize the resulting block hash.

```
e2e.chain.changeNoop#deb4a41b nonce:int256 = e2e.chain.Change;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>nonce</strong></td><td style="text-align: center;"><a href="/type/int256/">int256</a></td><td>Random value included in the no-op change.</td></tr></tbody></table>

### Type

[e2e.chain.Change](/type/e2e.chain.Change/)

### Related pages

#### [E2E Group Calls](/api/end-to-end/group-calls/)

End-to-end encryption used for Telegram group voice and video calls, using a blockchain for state management.
