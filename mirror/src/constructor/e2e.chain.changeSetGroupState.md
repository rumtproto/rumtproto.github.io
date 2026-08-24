---
title: "e2e.chain.changeSetGroupState"
original: "https://core.telegram.org/constructor/e2e.chain.changeSetGroupState"
section: ref
description: "Updates the E2E conference call participant list and permissions, clearing the current shared key state."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"e2e.chain.changeSetGroupState","url":"/constructor/e2e.chain.changeSetGroupState/"}]
layout: layout.njk
---

# e2e.chain.changeSetGroupState

Updates the [E2E conference call participant list and permissions](/api/end-to-end/group-calls/#change-types-for-group-calls), clearing the current shared key state.

```
e2e.chain.changeSetGroupState#2cf17146 group_state:e2e.chain.GroupState = e2e.chain.Change;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>group_state</strong></td><td style="text-align: center;"><a href="/type/e2e.chain.GroupState/">e2e.chain.GroupState</a></td><td>New group state containing the participant list and permission bits.</td></tr></tbody></table>

### Type

[e2e.chain.Change](/type/e2e.chain.Change/)

### Related pages

#### [E2E Group Calls](/api/end-to-end/group-calls/)

End-to-end encryption used for Telegram group voice and video calls, using a blockchain for state management.
