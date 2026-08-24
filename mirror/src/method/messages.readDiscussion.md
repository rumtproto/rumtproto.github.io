---
title: "messages.readDiscussion"
original: "https://core.telegram.org/method/messages.readDiscussion"
section: ref
description: "Telegram allows commenting on a channel post or on a generic supergroup message, thanks to message threads."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.readDiscussion","url":"/method/messages.readDiscussion/"}]
layout: layout.njk
---

# messages.readDiscussion

Mark a [thread](/api/threads/) as read

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/boolFalse/">boolFalse</a>#bc799737 = <a href="/type/Bool/">Bool</a>;
<a href="/constructor/boolTrue/">boolTrue</a>#997275b5 = <a href="/type/Bool/">Bool</a>;
---functions---
<a href="/method/messages.readDiscussion/" class="current_page_link">messages.readDiscussion</a>#f731a9f4 peer:<a href="/type/InputPeer/">InputPeer</a> msg_id:<a href="/type/int/">int</a> read_max_id:<a href="/type/int/">int</a> = <a href="/type/Bool/">Bool</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer/">InputPeer</a></td><td>Group ID</td></tr><tr><td><strong>msg_id</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>ID of message that started the thread</td></tr><tr><td><strong>read_max_id</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>ID up to which thread messages were read</td></tr></tbody></table>

### Result

[Bool](/type/Bool/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>CHAT_ID_INVALID</td><td>The provided chat id is invalid.</td></tr><tr><td>400</td><td>MSG_ID_INVALID</td><td>Invalid message ID provided.</td></tr><tr><td>400</td><td>PEER_ID_INVALID</td><td>The provided peer id is invalid.</td></tr></tbody></table>

### Related pages

#### [Message threads](/api/threads/)

Telegram allows commenting on a channel post or on a generic supergroup message, thanks to message threads.
