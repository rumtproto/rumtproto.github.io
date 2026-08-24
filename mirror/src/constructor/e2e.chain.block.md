---
title: "e2e.chain.block"
original: "https://core.telegram.org/constructor/e2e.chain.block"
section: ref
description: "A block in the main E2E conference call blockchain, containing state changes for the call and the resulting state proof."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"e2e.chain.block","url":"/constructor/e2e.chain.block/"}]
layout: layout.njk
---

# e2e.chain.block

A block in the [main E2E conference call blockchain](/api/end-to-end/group-calls/#block-structure), containing state changes for the call and the resulting state proof.

When submitting blocks to the server, use the canonical constructor ID shown in the schema; blocks returned by the server use the incremented constructor ID described in the [subchain documentation](/api/end-to-end/group-calls/#subchains).

```
e2e.chain.block#639a3db6 signature:int512 flags:# prev_block_hash:int256 changes:Vector<e2e.chain.Change> height:int state_proof:e2e.chain.StateProof signature_public_key:flags.0?int256 = e2e.chain.Block;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>signature</strong></td><td style="text-align: center;"><a href="/type/int512/">int512</a></td><td>Signature of the TL-serialized block with the <code>signature</code> field zeroed out.</td></tr><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>prev_block_hash</strong></td><td style="text-align: center;"><a href="/type/int256/">int256</a></td><td>SHA256 hash of the previous accepted main-chain block.</td></tr><tr><td><strong>changes</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/e2e.chain.Change/">e2e.chain.Change</a>&gt;</td><td>State changes applied by this block; a valid block must contain at least a group-state change or key-value change.</td></tr><tr><td><strong>height</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Sequential block number; it must be exactly one more than the locally accepted height.</td></tr><tr><td><strong>state_proof</strong></td><td style="text-align: center;"><a href="/type/e2e.chain.StateProof/">e2e.chain.StateProof</a></td><td>Resulting blockchain state after all changes in this block are applied.</td></tr><tr><td><strong>signature_public_key</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/int256/">int256</a></td><td>Public key of the participant that created and signed the block; may be omitted when it matches the first participant's key, except at height <code>0</code>.</td></tr></tbody></table>

### Type

[e2e.chain.Block](/type/e2e.chain.Block/)

### Related pages

#### [E2E Group Calls](/api/end-to-end/group-calls/)

End-to-end encryption used for Telegram group voice and video calls, using a blockchain for state management.
