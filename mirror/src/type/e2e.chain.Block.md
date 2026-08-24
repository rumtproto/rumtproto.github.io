---
title: "E2e.chain.Block"
original: "https://core.telegram.org/type/e2e.chain.Block"
section: ref
description: "A block in the main E2E conference call blockchain, containing state changes for the call and the resulting state proof."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"E2e.chain.Block","url":"/type/e2e.chain.Block/"}]
layout: layout.njk
---

# E2e.chain.Block

A block in the [main E2E conference call blockchain](/api/end-to-end/group-calls/#block-structure), containing state changes for the call and the resulting state proof.

When submitting blocks to the server, use the canonical constructor ID shown in the schema; blocks returned by the server use the incremented constructor ID described in the [subchain documentation](/api/end-to-end/group-calls/#subchains).

```
e2e.chain.block#639a3db6 signature:int512 flags:# prev_block_hash:int256 changes:Vector<e2e.chain.Change> height:int state_proof:e2e.chain.StateProof signature_public_key:flags.0?int256 = e2e.chain.Block;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/e2e.chain.block/">e2e.chain.block</a></td><td>A block in the <a href="/api/end-to-end/group-calls/#block-structure">main E2E conference call blockchain</a>, containing state changes for the call and the resulting state proof.<br><br>When submitting blocks to the server, use the canonical constructor ID shown in the schema; blocks returned by the server use the incremented constructor ID described in the <a href="/api/end-to-end/group-calls/#subchains">subchain documentation</a>.</td></tr></tbody></table>

### Related pages

#### [E2E Group Calls](/api/end-to-end/group-calls/)

End-to-end encryption used for Telegram group voice and video calls, using a blockchain for state management.
