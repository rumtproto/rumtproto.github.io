---
title: "messages.getMessageReadParticipants"
original: "https://core.telegram.org/method/messages.getMessageReadParticipants"
section: ref
description: "Get which users read a specific message: only available for groups and supergroups with less than chat_read_mark_size_threshold members, read receipts will be stored for…"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.getMessageReadParticipants","url":"/method/messages.getMessageReadParticipants/"}]
layout: layout.njk
---

# messages.getMessageReadParticipants

Get which users read a specific message: only available for groups and supergroups with less than [`chat_read_mark_size_threshold` members](/api/config/#chat-read-mark-size-threshold), read receipts will be stored for [`chat_read_mark_expire_period` seconds after the message was sent](/api/config/#chat-read-mark-expire-period), see [client configuration for more info »](/api/config/#client-configuration).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code>---functions---
<a href="/method/messages.getMessageReadParticipants/" class="current_page_link">messages.getMessageReadParticipants</a>#31c1c44f peer:<a href="/type/InputPeer/">InputPeer</a> msg_id:<a href="/type/int/">int</a> = <a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/ReadParticipantDate/">ReadParticipantDate</a>&gt;;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer/">InputPeer</a></td><td>Dialog</td></tr><tr><td><strong>msg_id</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Message ID</td></tr></tbody></table>

### Result

[Vector](/type/Vector%20t/)&lt;[ReadParticipantDate](/type/ReadParticipantDate/)\>

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>CHAT_TOO_BIG</td><td>This method is not available for groups with more than <code>chat_read_mark_size_threshold</code> members, <a href="/api/config/#client-configuration">see client configuration&nbsp;»</a>.</td></tr><tr><td>400</td><td>MSG_ID_INVALID</td><td>Invalid message ID provided.</td></tr><tr><td>400</td><td>MSG_TOO_OLD</td><td><a href="/api/config/#chat-read-mark-expire-period"><code>chat_read_mark_expire_period</code> seconds</a> have passed since the message was sent, read receipts were deleted.</td></tr><tr><td>400</td><td>PEER_ID_INVALID</td><td>The provided peer id is invalid.</td></tr></tbody></table>

### Related pages

#### [Client configuration](/api/config/)

The MTProto API has multiple configuration parameters that can be fetched with the appropriate methods.
