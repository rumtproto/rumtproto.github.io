---
title: "E2e.chain.GroupParticipant"
original: "https://core.telegram.org/type/e2e.chain.GroupParticipant"
section: ref
description: "A participant in an E2E conference call group state."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"E2e.chain.GroupParticipant","url":"/type/e2e.chain.GroupParticipant/"}]
layout: layout.njk
---

# E2e.chain.GroupParticipant

A participant in an [E2E conference call group state](/api/end-to-end/group-calls/#blockchain-state-management).

```
e2e.chain.groupParticipant#28852f20 user_id:long public_key:int256 flags:# add_users:flags.0?true remove_users:flags.1?true set_value:flags.2?true version:int = e2e.chain.GroupParticipant;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/e2e.chain.groupParticipant/">e2e.chain.groupParticipant</a></td><td>A participant and their permissions in an <a href="/api/end-to-end/group-calls/#participants-and-permissions">E2E conference call group state »</a>.</td></tr></tbody></table>

### Related pages

#### [E2E Group Calls](/api/end-to-end/group-calls/)

End-to-end encryption used for Telegram group voice and video calls, using a blockchain for state management.
