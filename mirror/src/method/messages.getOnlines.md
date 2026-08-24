---
title: "messages.getOnlines"
original: "https://core.telegram.org/method/messages.getOnlines"
section: ref
description: "Get count of online users in a chat"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.getOnlines","url":"/method/messages.getOnlines/"}]
layout: layout.njk
---

# messages.getOnlines

Get count of online users in a chat

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/chatOnlines/">chatOnlines</a>#f041e250 onlines:<a href="/type/int/">int</a> = <a href="/type/ChatOnlines/">ChatOnlines</a>;
---functions---
<a href="/method/messages.getOnlines/" class="current_page_link">messages.getOnlines</a>#6e2be050 peer:<a href="/type/InputPeer/">InputPeer</a> = <a href="/type/ChatOnlines/">ChatOnlines</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer/">InputPeer</a></td><td>The chat</td></tr></tbody></table>

### Result

[ChatOnlines](/type/ChatOnlines/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>CHANNEL_PRIVATE</td><td>You haven't joined this channel/supergroup.</td></tr><tr><td>400</td><td>CHAT_ID_INVALID</td><td>The provided chat id is invalid.</td></tr><tr><td>400</td><td>PEER_ID_INVALID</td><td>The provided peer id is invalid.</td></tr></tbody></table>
