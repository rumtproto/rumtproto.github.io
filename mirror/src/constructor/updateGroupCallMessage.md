---
title: "updateGroupCallMessage"
original: "https://core.telegram.org/constructor/updateGroupCallMessage"
section: ref
description: "A new message, reaction, paid comment or donation was received through the in-call message overlay »."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"updateGroupCallMessage","url":"/constructor/updateGroupCallMessage/"}]
layout: layout.njk
---

# updateGroupCallMessage

A new message, reaction, paid comment or donation was received through the [in-call message overlay »](/api/group-calls/#in-call-messages).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/updateGroupCallMessage/" class="current_page_link">updateGroupCallMessage</a>#d8326f0d call:<a href="/type/InputGroupCall/">InputGroupCall</a> message:<a href="/type/GroupCallMessage/">GroupCallMessage</a> = <a href="/type/Update/">Update</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>call</strong></td><td style="text-align: center;"><a href="/type/InputGroupCall/">InputGroupCall</a></td><td>Group call that received the message</td></tr><tr><td><strong>message</strong></td><td style="text-align: center;"><a href="/type/GroupCallMessage/">GroupCallMessage</a></td><td>Received in-call message</td></tr></tbody></table>

### Type

[Update](/type/Update/)

### Related pages

#### [Group calls](/api/group-calls/)

How to start, join and manage group calls and video chats.
