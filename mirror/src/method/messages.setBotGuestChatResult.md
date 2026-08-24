---
title: "messages.setBotGuestChatResult"
original: "https://core.telegram.org/method/messages.setBotGuestChatResult"
section: ref
description: "Bots may use this method to answer a guest mode » query received via an updateBotGuestChatQuery update, providing the message to post into the chat as a guest, see here » for more…"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.setBotGuestChatResult","url":"/method/messages.setBotGuestChatResult/"}]
layout: layout.njk
---

# messages.setBotGuestChatResult

Bots may use this method to answer a [guest mode »](/api/bots/guest-mode/) query received via an [updateBotGuestChatQuery](/constructor/updateBotGuestChatQuery/) update, providing the message to post into the chat as a guest, see [here »](/api/bots/guest-mode/#handling-guest-queries-bot-side) for more info.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code>Method schema is available as of layer 225. <a href="https://core.telegram.org/method/messages.setBotGuestChatResult?layer=225">Switch »</a></code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>query_id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Query identifier from the <a href="/constructor/updateBotGuestChatQuery/">updateBotGuestChatQuery</a>.<code>query_id</code> field</td></tr><tr><td><strong>result</strong></td><td style="text-align: center;"><a href="/type/InputBotInlineResult/">InputBotInlineResult</a></td><td>The result to send as the answer to the query</td></tr></tbody></table>

### Result

[InputBotInlineMessageID](/type/InputBotInlineMessageID/)

### Only bots can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>403</td><td>USER_BOT_INVALID</td><td>User accounts must provide the <code>bot</code> method parameter when calling this method. If there is no such method parameter, this method can only be invoked by bot accounts.</td></tr><tr><td>400</td><td>USER_BOT_REQUIRED</td><td>This method can only be called by a bot.</td></tr></tbody></table>

### Related pages

#### [updateBotGuestChatQuery](/constructor/updateBotGuestChatQuery/)

Sent to [guest bots »](/api/bots/guest-mode/) when a user invokes the bot as a guest in a chat. The bot should reply by invoking [messages.setBotGuestChatResult](/method/messages.setBotGuestChatResult/), see [here »](/api/bots/guest-mode/#handling-guest-queries-bot-side) for more info.

#### [Guest mode for bots](/api/bots/guest-mode/)

Guest bots can be queried by username from **any** non-secret private chat, group and supergroup (except for groups/supergroups with [content protection »](/api/content-protection/#for-groups-and-channels) enabled), posting their results directly into the chat, even if they're not a member.
