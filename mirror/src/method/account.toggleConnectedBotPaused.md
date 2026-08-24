---
title: "account.toggleConnectedBotPaused"
original: "https://core.telegram.org/method/account.toggleConnectedBotPaused"
section: ref
description: "Pause or unpause a specific chat, temporarily disconnecting it from all business bots »."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"account.toggleConnectedBotPaused","url":"/method/account.toggleConnectedBotPaused/"}]
layout: layout.njk
---

# account.toggleConnectedBotPaused

Pause or unpause a specific chat, temporarily disconnecting it from all [business bots »](/api/bots/connected-business-bots/).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/boolFalse/">boolFalse</a>#bc799737 = <a href="/type/Bool/">Bool</a>;
<a href="/constructor/boolTrue/">boolTrue</a>#997275b5 = <a href="/type/Bool/">Bool</a>;
---functions---
<a href="/method/account.toggleConnectedBotPaused/" class="current_page_link">account.toggleConnectedBotPaused</a>#646e1097 peer:<a href="/type/InputPeer/">InputPeer</a> paused:<a href="/type/Bool/">Bool</a> = <a href="/type/Bool/">Bool</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer/">InputPeer</a></td><td>The chat to pause</td></tr><tr><td><strong>paused</strong></td><td style="text-align: center;"><a href="/type/Bool/">Bool</a></td><td>Whether to pause or unpause the chat</td></tr></tbody></table>

### Result

[Bool](/type/Bool/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>PEER_ID_INVALID</td><td>The provided peer id is invalid.</td></tr></tbody></table>

### Related pages

#### [Connected business bots](/api/bots/connected-business-bots/)

Users can connect Telegram bots that will process and answer messages on their behalf. This allows them to seamlessly integrate any existing tools and workflows, or add AI assistants that manage their chats.
