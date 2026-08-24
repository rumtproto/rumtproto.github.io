---
title: "account.disablePeerConnectedBot"
original: "https://core.telegram.org/method/account.disablePeerConnectedBot"
section: ref
description: "Permanently disconnect a specific chat from all business bots » (equivalent to specifying it in recipients.exclude_users during initial configuration with…"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"account.disablePeerConnectedBot","url":"/method/account.disablePeerConnectedBot/"}]
layout: layout.njk
---

# account.disablePeerConnectedBot

Permanently disconnect a specific chat from all [business bots »](/api/bots/connected-business-bots/) (equivalent to specifying it in `recipients.exclude_users` during initial configuration with [account.updateConnectedBot »](/method/account.updateConnectedBot/)); to reconnect of a chat disconnected using this method the user must reconnect the entire bot by invoking [account.updateConnectedBot »](/method/account.updateConnectedBot/).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/boolFalse/">boolFalse</a>#bc799737 = <a href="/type/Bool/">Bool</a>;
<a href="/constructor/boolTrue/">boolTrue</a>#997275b5 = <a href="/type/Bool/">Bool</a>;
---functions---
<a href="/method/account.disablePeerConnectedBot/" class="current_page_link">account.disablePeerConnectedBot</a>#5e437ed9 peer:<a href="/type/InputPeer/">InputPeer</a> = <a href="/type/Bool/">Bool</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer/">InputPeer</a></td><td>The chat to disconnect</td></tr></tbody></table>

### Result

[Bool](/type/Bool/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>BOT_ALREADY_DISABLED</td><td>The connected business bot was already disabled for the specified peer.</td></tr><tr><td>400</td><td>BOT_NOT_CONNECTED_YET</td><td>No <a href="/api/business/#connected-bots">business bot</a> is connected to the currently logged in user.</td></tr><tr><td>400</td><td>PEER_ID_INVALID</td><td>The provided peer id is invalid.</td></tr></tbody></table>

### Related pages

#### [Connected business bots](/api/bots/connected-business-bots/)

Users can connect Telegram bots that will process and answer messages on their behalf. This allows them to seamlessly integrate any existing tools and workflows, or add AI assistants that manage their chats.

#### [account.updateConnectedBot](/method/account.updateConnectedBot/)

Connect a [business bot »](/api/bots/connected-business-bots/) to the current account, or to change the current connection settings.

#### [Telegram Business](/api/business/)

Users can turn their Telegram account into a business account, gaining access to business features such as opening hours, location, quick replies, automated messages, custom start pages, chatbot support, and more.
