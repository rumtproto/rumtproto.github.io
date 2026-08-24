---
title: "updateBotBusinessConnect"
original: "https://core.telegram.org/constructor/updateBotBusinessConnect"
section: ref
description: "Connecting or disconnecting a business bot or changing the connection settings will emit an updateBotBusinessConnect update to the bot, with the new settings and a connection_id…"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"updateBotBusinessConnect","url":"/constructor/updateBotBusinessConnect/"}]
layout: layout.njk
---

# updateBotBusinessConnect

Connecting or disconnecting a [business bot](/api/bots/connected-business-bots/) or changing the connection settings will emit an [updateBotBusinessConnect](/constructor/updateBotBusinessConnect/) update to the bot, with the new settings and a `connection_id` that will be used by the bot to handle updates from and send messages as the user.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/updateBotBusinessConnect/" class="current_page_link">updateBotBusinessConnect</a>#8ae5c97a connection:<a href="/type/BotBusinessConnection/">BotBusinessConnection</a> qts:<a href="/type/int/">int</a> = <a href="/type/Update/">Update</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>connection</strong></td><td style="text-align: center;"><a href="/type/BotBusinessConnection/">BotBusinessConnection</a></td><td>Business connection settings</td></tr><tr><td><strong>qts</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>New <strong>qts</strong> value, see <a href="/api/updates/">updates »</a> for more info.</td></tr></tbody></table>

### Type

[Update](/type/Update/)

### Related pages

#### [Working with Updates](/api/updates/)

How to subscribe to updates and handle them properly.

#### [Connected business bots](/api/bots/connected-business-bots/)

Users can connect Telegram bots that will process and answer messages on their behalf. This allows them to seamlessly integrate any existing tools and workflows, or add AI assistants that manage their chats.

#### [updateBotBusinessConnect](/constructor/updateBotBusinessConnect/)

Connecting or disconnecting a [business bot](/api/bots/connected-business-bots/) or changing the connection settings will emit an [updateBotBusinessConnect](/constructor/updateBotBusinessConnect/) update to the bot, with the new settings and a `connection_id` that will be used by the bot to handle updates from and send messages as the user.
