---
title: "account.getConnectedBots"
original: "https://core.telegram.org/method/account.getConnectedBots"
section: ref
description: "List all currently connected business bots »"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"account.getConnectedBots","url":"/method/account.getConnectedBots/"}]
layout: layout.njk
---

# account.getConnectedBots

List all currently connected [business bots »](/api/bots/connected-business-bots/)

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/account.connectedBots/">account.connectedBots</a>#17d7f87b connected_bots:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/ConnectedBot/">ConnectedBot</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/account.ConnectedBots/">account.ConnectedBots</a>;
---functions---
<a href="/method/account.getConnectedBots/" class="current_page_link">account.getConnectedBots</a>#4ea4c80f = <a href="/type/account.ConnectedBots/">account.ConnectedBots</a>;</code></pre>

### Parameters

This constructor does not require any parameters.

### Result

[account.ConnectedBots](/type/account.ConnectedBots/)

### Only users can use this method

### Related pages

#### [Connected business bots](/api/bots/connected-business-bots/)

Users can connect Telegram bots that will process and answer messages on their behalf. This allows them to seamlessly integrate any existing tools and workflows, or add AI assistants that manage their chats.
