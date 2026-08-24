---
title: "messageMediaVideoStream"
original: "https://core.telegram.org/constructor/messageMediaVideoStream"
section: ref
description: "Identifies the active group call associated with a live story »."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"messageMediaVideoStream","url":"/constructor/messageMediaVideoStream/"}]
layout: layout.njk
---

# messageMediaVideoStream

Identifies the active group call associated with a [live story »](/api/group-calls/#live-stories).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messageMediaVideoStream/" class="current_page_link">messageMediaVideoStream</a>#ca5cab89 flags:<a href="/type/%23/">#</a> rtmp_stream:flags.0?true call:<a href="/type/InputGroupCall/">InputGroupCall</a> = <a href="/type/MessageMedia/">MessageMedia</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>rtmp_stream</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>Whether the live story uses <a href="/api/group-calls/#stream-mode">RTMP livestream mode »</a></td></tr><tr><td><strong>call</strong></td><td style="text-align: center;"><a href="/type/InputGroupCall/">InputGroupCall</a></td><td>Active live story group call</td></tr></tbody></table>

### Type

[MessageMedia](/type/MessageMedia/)

### Related pages

#### [Group calls](/api/group-calls/)

How to start, join and manage group calls and video chats.
