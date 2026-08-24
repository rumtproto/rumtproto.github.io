---
title: "E2e.chain.GroupBroadcast"
original: "https://core.telegram.org/type/e2e.chain.GroupBroadcast"
section: ref
description: "A broadcast message used in the E2E conference call key verification protocol, implementing the commit/reveal scheme for generating verifiable call emoji."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"E2e.chain.GroupBroadcast","url":"/type/e2e.chain.GroupBroadcast/"}]
layout: layout.njk
---

# E2e.chain.GroupBroadcast

A broadcast message used in the [E2E conference call key verification protocol](/api/end-to-end/group-calls/#commit-reveal-protocol-workflow), implementing the commit/reveal scheme for generating verifiable call emoji.

```
e2e.chain.groupBroadcastNonceCommit#d1512ae7 signature:int512 user_id:int64 chain_height:int32 chain_hash:int256 nonce_hash:int256 = e2e.chain.GroupBroadcast;
e2e.chain.groupBroadcastNonceReveal#83f4f9d8 signature:int512 user_id:int64 chain_height:int32 chain_hash:int256 nonce:int256 = e2e.chain.GroupBroadcast;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/e2e.chain.groupBroadcastNonceCommit/">e2e.chain.groupBroadcastNonceCommit</a></td><td>Commit message for the <a href="/api/end-to-end/group-calls/#commit-reveal-protocol-workflow">E2E conference call emoji verification protocol</a>.<br><br>When submitting this broadcast to the server, use the canonical constructor ID shown in the schema; broadcasts returned by the server use the constructor ID described in the <a href="/api/end-to-end/group-calls/#subchains">subchain documentation</a>.</td></tr><tr><td><a href="/constructor/e2e.chain.groupBroadcastNonceReveal/">e2e.chain.groupBroadcastNonceReveal</a></td><td>Reveal message for the <a href="/api/end-to-end/group-calls/#commit-reveal-protocol-workflow">E2E conference call emoji verification protocol</a>.<br><br>When submitting this broadcast to the server, use the canonical constructor ID shown in the schema; broadcasts returned by the server use the constructor ID described in the <a href="/api/end-to-end/group-calls/#subchains">subchain documentation</a>.</td></tr></tbody></table>

### Related pages

#### [E2E Group Calls](/api/end-to-end/group-calls/)

End-to-end encryption used for Telegram group voice and video calls, using a blockchain for state management.
