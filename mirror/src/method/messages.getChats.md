---
title: "messages.getChats"
original: "https://core.telegram.org/method/messages.getChats"
section: ref
description: "Returns chat basic info on their IDs."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.getChats","url":"/method/messages.getChats/"}]
layout: layout.njk
---

# messages.getChats

Returns chat basic info on their IDs.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messages.chats/">messages.chats</a>#64ff9fd5 chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; = <a href="/type/messages.Chats/">messages.Chats</a>;
<a href="/constructor/messages.chatsSlice/">messages.chatsSlice</a>#9cd81144 count:<a href="/type/int/">int</a> chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; = <a href="/type/messages.Chats/">messages.Chats</a>;
---functions---
<a href="/method/messages.getChats/" class="current_page_link">messages.getChats</a>#49e9528f id:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/long/">long</a>&gt; = <a href="/type/messages.Chats/">messages.Chats</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/long/">long</a>&gt;</td><td>List of chat IDs</td></tr></tbody></table>

### Result

[messages.Chats](/type/messages.Chats/)

### Both users and bots can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>CHAT_ID_INVALID</td><td>The provided chat id is invalid.</td></tr><tr><td>400</td><td>PEER_ID_INVALID</td><td>The provided peer id is invalid.</td></tr></tbody></table>
