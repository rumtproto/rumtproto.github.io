---
title: "messageActionGroupCallScheduled"
original: "https://core.telegram.org/constructor/messageActionGroupCallScheduled"
section: ref
description: "A video chat/livestream was scheduled."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"messageActionGroupCallScheduled","url":"/constructor/messageActionGroupCallScheduled/"}]
layout: layout.njk
---

# messageActionGroupCallScheduled

A [video chat/livestream](/api/group-calls/#video-chats-livestreams) was scheduled.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messageActionGroupCallScheduled/" class="current_page_link">messageActionGroupCallScheduled</a>#b3a07661 call:<a href="/type/InputGroupCall/">InputGroupCall</a> schedule_date:<a href="/type/int/">int</a> = <a href="/type/MessageAction/">MessageAction</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>call</strong></td><td style="text-align: center;"><a href="/type/InputGroupCall/">InputGroupCall</a></td><td>Scheduled video chat/livestream</td></tr><tr><td><strong>schedule_date</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>When is the group call scheduled to start</td></tr></tbody></table>

### Type

[MessageAction](/type/MessageAction/)

### Related pages

#### [Group calls](/api/group-calls/)

How to start, join and manage group calls and video chats.
