---
title: "channels.getLeftChannels"
original: "https://core.telegram.org/method/channels.getLeftChannels"
section: ref
description: "Get a list of channels/supergroups we left, requires a takeout session, see here » for more info."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"channels.getLeftChannels","url":"/method/channels.getLeftChannels/"}]
layout: layout.njk
---

# channels.getLeftChannels

Get a list of [channels/supergroups](/api/channel/) we left, requires a [takeout session, see here » for more info](/api/takeout/).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messages.chats/">messages.chats</a>#64ff9fd5 chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; = <a href="/type/messages.Chats/">messages.Chats</a>;
<a href="/constructor/messages.chatsSlice/">messages.chatsSlice</a>#9cd81144 count:<a href="/type/int/">int</a> chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; = <a href="/type/messages.Chats/">messages.Chats</a>;
---functions---
<a href="/method/channels.getLeftChannels/" class="current_page_link">channels.getLeftChannels</a>#8341ecc0 offset:<a href="/type/int/">int</a> = <a href="/type/messages.Chats/">messages.Chats</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>offset</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Offset for <a href="/api/offsets/">pagination</a></td></tr></tbody></table>

### Result

[messages.Chats](/type/messages.Chats/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>TAKEOUT_INVALID</td><td>The specified takeout ID is invalid.</td></tr><tr><td>403</td><td>TAKEOUT_REQUIRED</td><td>A <a href="/api/takeout/">takeout</a> session needs to be initialized first, <a href="/api/takeout/">see here » for more info</a>.</td></tr></tbody></table>

### Related pages

#### [Pagination in the API](/api/offsets/)

How to fetch results from large lists of objects.

#### [Channels, supergroups, gigagroups and basic groups](/api/channel/)

How to handle channels, supergroups, gigagroups, basic groups, and what's the difference between them.

#### [Takeout API](/api/takeout/)

Telegram's API allows users to export all of their information through the takeout API.
