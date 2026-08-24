---
title: "messages.savePreparedInlineMessage"
original: "https://core.telegram.org/method/messages.savePreparedInlineMessage"
section: ref
description: "Save a prepared inline message, to be shared by the user of the mini app using a web\\_app\\_send\\_prepared\\_message event"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.savePreparedInlineMessage","url":"/method/messages.savePreparedInlineMessage/"}]
layout: layout.njk
---

# messages.savePreparedInlineMessage

Save a [prepared inline message](/api/bots/inline/#2-1-using-a-prepared-inline-message), to be shared by the user of the mini app using a [web\_app\_send\_prepared\_message event](/api/web-events/#web-app-send-prepared-message)

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messages.botPreparedInlineMessage/">messages.botPreparedInlineMessage</a>#8ecf0511 id:<a href="/type/string/">string</a> expire_date:<a href="/type/int/">int</a> = <a href="/type/messages.BotPreparedInlineMessage/">messages.BotPreparedInlineMessage</a>;
---functions---
<a href="/method/messages.savePreparedInlineMessage/" class="current_page_link">messages.savePreparedInlineMessage</a>#f21f7f2f flags:<a href="/type/%23/">#</a> result:<a href="/type/InputBotInlineResult/">InputBotInlineResult</a> user_id:<a href="/type/InputUser/">InputUser</a> peer_types:flags.0?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/InlineQueryPeerType/">InlineQueryPeerType</a>&gt; = <a href="/type/messages.BotPreparedInlineMessage/">messages.BotPreparedInlineMessage</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>result</strong></td><td style="text-align: center;"><a href="/type/InputBotInlineResult/">InputBotInlineResult</a></td><td>The message</td></tr><tr><td><strong>user_id</strong></td><td style="text-align: center;"><a href="/type/InputUser/">InputUser</a></td><td>The user to whom the <a href="/api/web-events/#web-app-send-prepared-message">web_app_send_prepared_message event</a> event will be sent</td></tr><tr><td><strong>peer_types</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/InlineQueryPeerType/">InlineQueryPeerType</a>&gt;</td><td>Types of chats where this message can be sent</td></tr></tbody></table>

### Result

[messages.BotPreparedInlineMessage](/type/messages.BotPreparedInlineMessage/)

### Only bots can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>RESULT_ID_INVALID</td><td>One of the specified result IDs is invalid.</td></tr><tr><td>400</td><td>SEND_MESSAGE_GAME_INVALID</td><td>An inputBotInlineMessageGame can only be contained in an inputBotInlineResultGame, not in an inputBotInlineResult/inputBotInlineResultPhoto/etc.</td></tr><tr><td>400</td><td>USER_BOT_REQUIRED</td><td>This method can only be called by a bot.</td></tr><tr><td>400</td><td>USER_ID_INVALID</td><td>The provided user ID is invalid.</td></tr></tbody></table>

### Related pages

#### [Web events](/api/web-events/)

How telegram apps interact with webpages

#### [Inline queries](/api/bots/inline/)

Users can interact with your bot via inline queries, straight from the text input field in any chat.
