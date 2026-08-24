---
title: "e2e.chain.groupState"
original: "https://core.telegram.org/constructor/e2e.chain.groupState"
section: ref
description: "The participant list and external permission mask for an E2E conference call blockchain state »."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"e2e.chain.groupState","url":"/constructor/e2e.chain.groupState/"}]
layout: layout.njk
---

# e2e.chain.groupState

The participant list and external permission mask for an [E2E conference call blockchain state »](/api/end-to-end/group-calls/#participants-and-permissions).

```
e2e.chain.groupState#1ddc7584 participants:Vector<e2e.chain.GroupParticipant> external_permissions:int = e2e.chain.GroupState;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>participants</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/e2e.chain.GroupParticipant/">e2e.chain.GroupParticipant</a>&gt;</td><td>Current call participants, identified by user ID and public key.</td></tr><tr><td><strong>external_permissions</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td><code>add_users</code>, <code>remove_users</code> and <code>set_value</code> permission bits used only when applying a group-state change signed by a user not yet present in <code>participants</code>; the mask cannot increase</td></tr></tbody></table>

### Type

[e2e.chain.GroupState](/type/e2e.chain.GroupState/)

### Related pages

#### [E2E Group Calls](/api/end-to-end/group-calls/)

End-to-end encryption used for Telegram group voice and video calls, using a blockchain for state management.
