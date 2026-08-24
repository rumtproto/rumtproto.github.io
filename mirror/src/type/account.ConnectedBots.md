---
title: "account.ConnectedBots"
original: "https://core.telegram.org/type/account.ConnectedBots"
section: ref
description: "Info about currently connected business bots."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"account.ConnectedBots","url":"/type/account.ConnectedBots/"}]
layout: layout.njk
---

# account.ConnectedBots

Info about currently connected [business bots](/api/bots/connected-business-bots/).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/account.connectedBots/">account.connectedBots</a>#17d7f87b connected_bots:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/ConnectedBot/">ConnectedBot</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/account.ConnectedBots/" class="current_page_link">account.ConnectedBots</a>;

---functions---

<a href="/method/account.getConnectedBots/">account.getConnectedBots</a>#4ea4c80f = <a href="/type/account.ConnectedBots/" class="current_page_link">account.ConnectedBots</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/account.connectedBots/">account.connectedBots</a></td><td>Info about currently connected <a href="/api/bots/connected-business-bots/">business bots</a>.</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/account.getConnectedBots/">account.getConnectedBots</a></td><td>List all currently connected <a href="/api/bots/connected-business-bots/">business bots »</a></td></tr></tbody></table>

### Related pages

#### [Connected business bots](/api/bots/connected-business-bots/)

Users can connect Telegram bots that will process and answer messages on their behalf. This allows them to seamlessly integrate any existing tools and workflows, or add AI assistants that manage their chats.
