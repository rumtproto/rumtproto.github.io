---
title: "messages.getSearchCounters"
original: "https://core.telegram.org/method/messages.getSearchCounters"
section: ref
description: "Get the number of results that would be found by a messages.search call with the same parameters"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.getSearchCounters","url":"/method/messages.getSearchCounters/"}]
layout: layout.njk
---

# messages.getSearchCounters

Get the number of results that would be found by a [messages.search](/method/messages.search/) call with the same parameters

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code>---functions---
<a href="/method/messages.getSearchCounters/" class="current_page_link">messages.getSearchCounters</a>#1bbcf300 flags:<a href="/type/%23/">#</a> peer:<a href="/type/InputPeer/">InputPeer</a> saved_peer_id:flags.2?<a href="/type/InputPeer/">InputPeer</a> top_msg_id:flags.0?<a href="/type/int/">int</a> filters:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/MessagesFilter/">MessagesFilter</a>&gt; = <a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/messages.SearchCounter/">messages.SearchCounter</a>&gt;;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer/">InputPeer</a></td><td>Peer where to search</td></tr><tr><td><strong>saved_peer_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/type/InputPeer/">InputPeer</a></td><td>Search within the <a href="/api/saved-messages/">saved message dialog »</a> with this ID.</td></tr><tr><td><strong>top_msg_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/int/">int</a></td><td>If set, consider only messages within the specified <a href="/api/forum/#forum-topics">forum topic</a></td></tr><tr><td><strong>filters</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/MessagesFilter/">MessagesFilter</a>&gt;</td><td>Search filters</td></tr></tbody></table>

### Result

[Vector](/type/Vector%20t/)&lt;[messages.SearchCounter](/type/messages.SearchCounter/)\>

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>PEER_ID_INVALID</td><td>The provided peer id is invalid.</td></tr></tbody></table>

### Related pages

#### [Saved messages](/api/saved-messages/)

The Saved Messages chat allows users to bookmark messages and media: it's a personal cloud storage for any messages or media you may want to send or forward there.

#### [Forum topics](/api/forum/)

Telegram allows creating forums with multiple distinct topics.

#### [messages.search](/method/messages.search/)

Search for messages.
