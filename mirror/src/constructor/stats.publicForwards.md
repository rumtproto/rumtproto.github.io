---
title: "stats.publicForwards"
original: "https://core.telegram.org/constructor/stats.publicForwards"
section: ref
description: "Contains info about the forwards of a story as a message to public chats and reposts by public channels."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"stats.publicForwards","url":"/constructor/stats.publicForwards/"}]
layout: layout.njk
---

# stats.publicForwards

Contains info about the forwards of a [story](/api/stories/) as a message to public chats and reposts by public channels.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/stats.publicForwards/" class="current_page_link">stats.publicForwards</a>#93037e20 flags:<a href="/type/%23/">#</a> count:<a href="/type/int/">int</a> forwards:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/PublicForward/">PublicForward</a>&gt; next_offset:flags.0?<a href="/type/string/">string</a> chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/stats.PublicForwards/">stats.PublicForwards</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>count</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Total number of results</td></tr><tr><td><strong>forwards</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/PublicForward/">PublicForward</a>&gt;</td><td>Info about the forwards of a story.</td></tr><tr><td><strong>next_offset</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/string/">string</a></td><td>Offset used for <a href="/api/offsets/">pagination</a>.</td></tr><tr><td><strong>chats</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt;</td><td>Mentioned chats</td></tr><tr><td><strong>users</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt;</td><td>Mentioned users</td></tr></tbody></table>

### Type

[stats.PublicForwards](/type/stats.PublicForwards/)

### Related pages

#### [Pagination in the API](/api/offsets/)

How to fetch results from large lists of objects.

#### [Telegram Stories](/api/stories/)

Telegram users and channels can easily post and view stories through the API.
