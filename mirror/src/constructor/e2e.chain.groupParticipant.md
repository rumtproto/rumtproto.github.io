---
title: "e2e.chain.groupParticipant"
original: "https://core.telegram.org/constructor/e2e.chain.groupParticipant"
section: ref
description: "A participant and their permissions in an E2E conference call group state »."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"e2e.chain.groupParticipant","url":"/constructor/e2e.chain.groupParticipant/"}]
layout: layout.njk
---

# e2e.chain.groupParticipant

A participant and their permissions in an [E2E conference call group state »](/api/end-to-end/group-calls/#participants-and-permissions).

```
e2e.chain.groupParticipant#28852f20 user_id:long public_key:int256 flags:# add_users:flags.0?true remove_users:flags.1?true set_value:flags.2?true version:int = e2e.chain.GroupParticipant;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>user_id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Telegram user ID of the participant.</td></tr><tr><td><strong>public_key</strong></td><td style="text-align: center;"><a href="/type/int256/">int256</a></td><td>Public key used to verify blocks and decrypt shared key material for this participant.</td></tr><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>add_users</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>Whether this participant can add new participants.</td></tr><tr><td><strong>remove_users</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/constructor/true/">true</a></td><td>Whether this participant can remove existing participants.</td></tr><tr><td><strong>set_value</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/constructor/true/">true</a></td><td>Whether this participant can modify the key-value trie</td></tr><tr><td><strong>version</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Maximum E2E group call protocol version supported by this participant; the call uses the smallest participant version, clamped to <code>0...255</code>.</td></tr></tbody></table>

### Type

[e2e.chain.GroupParticipant](/type/e2e.chain.GroupParticipant/)

### Related pages

#### [E2E Group Calls](/api/end-to-end/group-calls/)

End-to-end encryption used for Telegram group voice and video calls, using a blockchain for state management.
