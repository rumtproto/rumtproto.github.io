---
title: "updateGroupCall"
original: "https://core.telegram.org/constructor/updateGroupCall"
section: ref
description: "Indicates that group call information changed, see applying group call updates »."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"updateGroupCall","url":"/constructor/updateGroupCall/"}]
layout: layout.njk
---

# updateGroupCall

Indicates that group call information changed, see [applying group call updates »](/api/group-calls/#applying-group-call-updates).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/updateGroupCall/" class="current_page_link">updateGroupCall</a>#9d2216e0 flags:<a href="/type/%23/">#</a> live_story:flags.2?true peer:flags.1?<a href="/type/Peer/">Peer</a> call:<a href="/type/GroupCall/">GroupCall</a> = <a href="/type/Update/">Update</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>live_story</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/constructor/true/">true</a></td><td>Whether this update belongs to a <a href="/api/group-calls/#live-stories">live story »</a></td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/type/Peer/">Peer</a></td><td>Peer associated with the group call</td></tr><tr><td><strong>call</strong></td><td style="text-align: center;"><a href="/type/GroupCall/">GroupCall</a></td><td>Info about the group call or livestream</td></tr></tbody></table>

### Type

[Update](/type/Update/)

### Related pages

#### [Group calls](/api/group-calls/)

How to start, join and manage group calls and video chats.
