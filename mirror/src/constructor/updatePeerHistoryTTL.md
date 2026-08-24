---
title: "updatePeerHistoryTTL"
original: "https://core.telegram.org/constructor/updatePeerHistoryTTL"
section: ref
description: "The Time-To-Live for messages sent by the current user in a specific chat has changed"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"updatePeerHistoryTTL","url":"/constructor/updatePeerHistoryTTL/"}]
layout: layout.njk
---

# updatePeerHistoryTTL

The Time-To-Live for messages sent by the current user in a specific chat has changed

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/updatePeerHistoryTTL/" class="current_page_link">updatePeerHistoryTTL</a>#bb9bb9a5 flags:<a href="/type/%23/">#</a> peer:<a href="/type/Peer/">Peer</a> ttl_period:flags.0?<a href="/type/int/">int</a> = <a href="/type/Update/">Update</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/Peer/">Peer</a></td><td>The chat</td></tr><tr><td><strong>ttl_period</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/int/">int</a></td><td>The new Time-To-Live</td></tr></tbody></table>

### Type

[Update](/type/Update/)
