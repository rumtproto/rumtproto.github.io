---
title: "messageActionGroupCall"
original: "https://core.telegram.org/constructor/messageActionGroupCall"
section: ref
description: "A video chat/livestream was started or terminated."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"messageActionGroupCall","url":"/constructor/messageActionGroupCall/"}]
layout: layout.njk
---

# messageActionGroupCall

A [video chat/livestream](/api/group-calls/#video-chats-livestreams) was started or terminated.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messageActionGroupCall/" class="current_page_link">messageActionGroupCall</a>#7a0d7f42 flags:<a href="/type/%23/">#</a> call:<a href="/type/InputGroupCall/">InputGroupCall</a> duration:flags.0?<a href="/type/int/">int</a> = <a href="/type/MessageAction/">MessageAction</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>call</strong></td><td style="text-align: center;"><a href="/type/InputGroupCall/">InputGroupCall</a></td><td>Video chat/livestream that started or ended</td></tr><tr><td><strong>duration</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/int/">int</a></td><td>Duration of the group call in seconds, for terminated calls.</td></tr></tbody></table>

### Type

[MessageAction](/type/MessageAction/)

### Related pages

#### [Group calls](/api/group-calls/)

How to start, join and manage group calls and video chats.
