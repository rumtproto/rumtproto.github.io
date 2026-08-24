---
title: "e2e.chain.groupBroadcastNonceReveal"
original: "https://core.telegram.org/constructor/e2e.chain.groupBroadcastNonceReveal"
section: ref
description: "Reveal message for the E2E conference call emoji verification protocol."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"e2e.chain.groupBroadcastNonceReveal","url":"/constructor/e2e.chain.groupBroadcastNonceReveal/"}]
layout: layout.njk
---

# e2e.chain.groupBroadcastNonceReveal

Reveal message for the [E2E conference call emoji verification protocol](/api/end-to-end/group-calls/#commit-reveal-protocol-workflow).

When submitting this broadcast to the server, use the canonical constructor ID shown in the schema; broadcasts returned by the server use the constructor ID described in the [subchain documentation](/api/end-to-end/group-calls/#subchains).

```
e2e.chain.groupBroadcastNonceReveal#83f4f9d8 signature:int512 user_id:int64 chain_height:int32 chain_hash:int256 nonce:int256 = e2e.chain.GroupBroadcast;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>signature</strong></td><td style="text-align: center;"><a href="/type/int512/">int512</a></td><td>Signature of the TL-serialized reveal message with the <code>signature</code> field zeroed out.</td></tr><tr><td><strong>user_id</strong></td><td style="text-align: center;"><a href="/type/int64/">int64</a></td><td>Telegram user ID of the participant sending the reveal.</td></tr><tr><td><strong>chain_height</strong></td><td style="text-align: center;"><a href="/type/int32/">int32</a></td><td>Height of the main-chain block for which verification emojis are being generated.</td></tr><tr><td><strong>chain_hash</strong></td><td style="text-align: center;"><a href="/type/int256/">int256</a></td><td>Hash of the main-chain block for which verification emojis are being generated.</td></tr><tr><td><strong>nonce</strong></td><td style="text-align: center;"><a href="/type/int256/">int256</a></td><td>Original random nonce; valid only if its SHA256 hash matches the previously committed <code>nonce_hash</code>.</td></tr></tbody></table>

### Type

[e2e.chain.GroupBroadcast](/type/e2e.chain.GroupBroadcast/)

### Related pages

#### [E2E Group Calls](/api/end-to-end/group-calls/)

End-to-end encryption used for Telegram group voice and video calls, using a blockchain for state management.
