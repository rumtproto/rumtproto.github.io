---
title: "updateDeleteGroupCallMessages"
original: "https://core.telegram.org/constructor/updateDeleteGroupCallMessages"
section: ref
description: "Indicates that messages were deleted from the in-call message overlay » of a video chat/livestream or live story, including in RTMP mode."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"updateDeleteGroupCallMessages","url":"/constructor/updateDeleteGroupCallMessages/"}]
layout: layout.njk
---

# updateDeleteGroupCallMessages

Indicates that messages were deleted from the [in-call message overlay »](/api/group-calls/#in-call-messages) of a video chat/livestream or live story, including in RTMP mode.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/updateDeleteGroupCallMessages/" class="current_page_link">updateDeleteGroupCallMessages</a>#3e85e92c call:<a href="/type/InputGroupCall/">InputGroupCall</a> messages:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/int/">int</a>&gt; = <a href="/type/Update/">Update</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>call</strong></td><td style="text-align: center;"><a href="/type/InputGroupCall/">InputGroupCall</a></td><td>Video chat/livestream or live story from which the messages were deleted</td></tr><tr><td><strong>messages</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/int/">int</a>&gt;</td><td>IDs of the deleted in-call messages</td></tr></tbody></table>

### Type

[Update](/type/Update/)

### Related pages

#### [Group calls](/api/group-calls/)

How to start, join and manage group calls and video chats.
