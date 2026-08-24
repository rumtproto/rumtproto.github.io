---
title: "E2e.chain.StateProof"
original: "https://core.telegram.org/type/e2e.chain.StateProof"
section: ref
description: "Proof of the E2E conference call blockchain state after a block has been applied."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"E2e.chain.StateProof","url":"/type/e2e.chain.StateProof/"}]
layout: layout.njk
---

# E2e.chain.StateProof

Proof of the [E2E conference call blockchain state](/api/end-to-end/group-calls/#block-application-process) after a block has been applied.

```
e2e.chain.stateProof#d6b679e6 flags:# kv_hash:int256 group_state:flags.0?e2e.chain.GroupState shared_key:flags.1?e2e.chain.SharedKey = e2e.chain.StateProof;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/e2e.chain.stateProof/">e2e.chain.stateProof</a></td><td>Proof of the <a href="/api/end-to-end/group-calls/#block-application-process">E2E conference call blockchain state</a> after a block has been applied.</td></tr></tbody></table>

### Related pages

#### [E2E Group Calls](/api/end-to-end/group-calls/)

End-to-end encryption used for Telegram group voice and video calls, using a blockchain for state management.
