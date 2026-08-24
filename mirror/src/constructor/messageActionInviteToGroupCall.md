---
title: "messageActionInviteToGroupCall"
original: "https://core.telegram.org/constructor/messageActionInviteToGroupCall"
section: ref
description: "A set of users was invited to a video chat/livestream »."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"messageActionInviteToGroupCall","url":"/constructor/messageActionInviteToGroupCall/"}]
layout: layout.njk
---

# messageActionInviteToGroupCall

A set of users was invited to a [video chat/livestream »](/api/group-calls/#video-chats-livestreams).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messageActionInviteToGroupCall/" class="current_page_link">messageActionInviteToGroupCall</a>#502f92f7 call:<a href="/type/InputGroupCall/">InputGroupCall</a> users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/long/">long</a>&gt; = <a href="/type/MessageAction/">MessageAction</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>call</strong></td><td style="text-align: center;"><a href="/type/InputGroupCall/">InputGroupCall</a></td><td>Video chat/livestream to which the users were invited</td></tr><tr><td><strong>users</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/long/">long</a>&gt;</td><td>The invited users</td></tr></tbody></table>

### Type

[MessageAction](/type/MessageAction/)

### Related pages

#### [Group calls](/api/group-calls/)

How to start, join and manage group calls and video chats.
