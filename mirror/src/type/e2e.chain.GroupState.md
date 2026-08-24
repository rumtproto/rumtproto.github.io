---
title: "E2e.chain.GroupState"
original: "https://core.telegram.org/type/e2e.chain.GroupState"
section: ref
description: "The participant list and external permission mask for an E2E conference call blockchain state."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"E2e.chain.GroupState","url":"/type/e2e.chain.GroupState/"}]
layout: layout.njk
---

# E2e.chain.GroupState

The participant list and external permission mask for an [E2E conference call blockchain state](/api/end-to-end/group-calls/#blockchain-state-management).

```
e2e.chain.groupState#1ddc7584 participants:Vector<e2e.chain.GroupParticipant> external_permissions:int = e2e.chain.GroupState;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/e2e.chain.groupState/">e2e.chain.groupState</a></td><td>The participant list and external permission mask for an <a href="/api/end-to-end/group-calls/#participants-and-permissions">E2E conference call blockchain state »</a>.</td></tr></tbody></table>

### Related pages

#### [E2E Group Calls](/api/end-to-end/group-calls/)

End-to-end encryption used for Telegram group voice and video calls, using a blockchain for state management.
