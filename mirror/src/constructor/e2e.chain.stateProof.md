---
title: "e2e.chain.stateProof"
original: "https://core.telegram.org/constructor/e2e.chain.stateProof"
section: ref
description: "Proof of the E2E conference call blockchain state after a block has been applied."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"e2e.chain.stateProof","url":"/constructor/e2e.chain.stateProof/"}]
layout: layout.njk
---

# e2e.chain.stateProof

Proof of the [E2E conference call blockchain state](/api/end-to-end/group-calls/#block-application-process) after a block has been applied.

```
e2e.chain.stateProof#d6b679e6 flags:# kv_hash:int256 group_state:flags.0?e2e.chain.GroupState shared_key:flags.1?e2e.chain.SharedKey = e2e.chain.StateProof;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>kv_hash</strong></td><td style="text-align: center;"><a href="/type/int256/">int256</a></td><td>Root hash of the key-value trie after applying the block.</td></tr><tr><td><strong>group_state</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/e2e.chain.GroupState/">e2e.chain.GroupState</a></td><td>Resulting participant and permission state.<br><strong>Must</strong> be omitted if the block contains a <code>ChangeSetGroupState</code> action.<br><strong>Must</strong> be present if the block doesn't contain a <code>ChangeSetGroupState</code> action.</td></tr><tr><td><strong>shared_key</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/type/e2e.chain.SharedKey/">e2e.chain.SharedKey</a></td><td>Resulting shared key state.<br><strong>Must</strong> be omitted if the block contains a <code>ChangeSetGroupState</code> action <em>and/or</em> a <code>ChangeSetSharedKey</code> action.<br><strong>Must</strong> be present if the block doesn't contain a <code>ChangeSetGroupState</code> action <em>and/or</em> a <code>ChangeSetSharedKey</code> action.</td></tr></tbody></table>

### Type

[e2e.chain.StateProof](/type/e2e.chain.StateProof/)

### Related pages

#### [E2E Group Calls](/api/end-to-end/group-calls/)

End-to-end encryption used for Telegram group voice and video calls, using a blockchain for state management.
