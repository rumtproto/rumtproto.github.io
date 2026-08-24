---
title: "E2e.chain.Change"
original: "https://core.telegram.org/type/e2e.chain.Change"
section: ref
description: "A change applied to the E2E conference call blockchain state, recorded in an e2e.chain.Block to modify the call's key-value store, participant list, or shared encryption key."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"E2e.chain.Change","url":"/type/e2e.chain.Change/"}]
layout: layout.njk
---

# E2e.chain.Change

A change applied to the [E2E conference call blockchain state](/api/end-to-end/group-calls/#change-types-for-group-calls), recorded in an [e2e.chain.Block](/type/e2e.chain.Block/) to modify the call's key-value store, participant list, or shared encryption key.

```
e2e.chain.changeNoop#deb4a41b nonce:int256 = e2e.chain.Change;
e2e.chain.changeSetValue#7c4f9bfa key:bytes value:bytes = e2e.chain.Change;
e2e.chain.changeSetGroupState#2cf17146 group_state:e2e.chain.GroupState = e2e.chain.Change;
e2e.chain.changeSetSharedKey#987a2158 shared_key:e2e.chain.SharedKey = e2e.chain.Change;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/e2e.chain.changeNoop/">e2e.chain.changeNoop</a></td><td>A no-operation <a href="/api/end-to-end/group-calls/#change-types-for-group-calls">E2E conference call blockchain change</a>, potentially used only to randomize the resulting block hash.</td></tr><tr><td><a href="/constructor/e2e.chain.changeSetValue/">e2e.chain.changeSetValue</a></td><td>Updates the <a href="/api/end-to-end/group-calls/#change-types-for-group-calls">key-value trie state for an E2E conference call blockchain</a>.</td></tr><tr><td><a href="/constructor/e2e.chain.changeSetGroupState/">e2e.chain.changeSetGroupState</a></td><td>Updates the <a href="/api/end-to-end/group-calls/#change-types-for-group-calls">E2E conference call participant list and permissions</a>, clearing the current shared key state.</td></tr><tr><td><a href="/constructor/e2e.chain.changeSetSharedKey/">e2e.chain.changeSetSharedKey</a></td><td>Establishes a new shared encryption key for an E2E conference call, see <a href="/api/end-to-end/group-calls/#change-types-for-group-calls">change types for group calls »</a>.</td></tr></tbody></table>

### Related pages

#### [E2E Group Calls](/api/end-to-end/group-calls/)

End-to-end encryption used for Telegram group voice and video calls, using a blockchain for state management.

#### [E2e.chain.Block](/type/e2e.chain.Block/)

A block in the [main E2E conference call blockchain](/api/end-to-end/group-calls/#block-structure), containing state changes for the call and the resulting state proof.

When submitting blocks to the server, use the canonical constructor ID shown in the schema; blocks returned by the server use the incremented constructor ID described in the [subchain documentation](/api/end-to-end/group-calls/#subchains).
