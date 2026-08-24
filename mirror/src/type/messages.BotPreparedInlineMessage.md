---
title: "Messages.BotPreparedInlineMessage"
original: "https://core.telegram.org/type/messages.BotPreparedInlineMessage"
section: ref
description: "Represents a prepared inline message saved by a bot, to be sent to the user via a web app »"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"Messages.BotPreparedInlineMessage","url":"/type/messages.BotPreparedInlineMessage/"}]
layout: layout.njk
---

# Messages.BotPreparedInlineMessage

Represents a [prepared inline message saved by a bot, to be sent to the user via a web app »](/api/bots/inline/#2-1-using-a-prepared-inline-message)

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messages.botPreparedInlineMessage/">messages.botPreparedInlineMessage</a>#8ecf0511 id:<a href="/type/string/">string</a> expire_date:<a href="/type/int/">int</a> = <a href="/type/messages.BotPreparedInlineMessage/" class="current_page_link">messages.BotPreparedInlineMessage</a>;

---functions---

<a href="/method/messages.savePreparedInlineMessage/">messages.savePreparedInlineMessage</a>#f21f7f2f flags:<a href="/type/%23/">#</a> result:<a href="/type/InputBotInlineResult/">InputBotInlineResult</a> user_id:<a href="/type/InputUser/">InputUser</a> peer_types:flags.0?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/InlineQueryPeerType/">InlineQueryPeerType</a>&gt; = <a href="/type/messages.BotPreparedInlineMessage/" class="current_page_link">messages.BotPreparedInlineMessage</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/messages.botPreparedInlineMessage/">messages.botPreparedInlineMessage</a></td><td>Represents a <a href="/api/bots/inline/#2-1-using-a-prepared-inline-message">prepared inline message saved by a bot, to be sent to the user via a web app »</a></td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/messages.savePreparedInlineMessage/">messages.savePreparedInlineMessage</a></td><td>Save a <a href="/api/bots/inline/#2-1-using-a-prepared-inline-message">prepared inline message</a>, to be shared by the user of the mini app using a <a href="/api/web-events/#web-app-send-prepared-message">web_app_send_prepared_message event</a></td></tr></tbody></table>

### Related pages

#### [Inline queries](/api/bots/inline/)

Users can interact with your bot via inline queries, straight from the text input field in any chat.
