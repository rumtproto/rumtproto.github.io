---
title: "InputBotInlineMessageID"
original: "https://core.telegram.org/type/InputBotInlineMessageID"
section: ref
description: "Represents a sent inline message from the perspective of a bot"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"InputBotInlineMessageID","url":"/type/InputBotInlineMessageID/"}]
layout: layout.njk
---

# InputBotInlineMessageID

Represents a sent inline message from the perspective of a bot

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/inputBotInlineMessageID/">inputBotInlineMessageID</a>#890c3d89 dc_id:<a href="/type/int/">int</a> id:<a href="/type/long/">long</a> access_hash:<a href="/type/long/">long</a> = <a href="/type/InputBotInlineMessageID/" class="current_page_link">InputBotInlineMessageID</a>;
<a href="/constructor/inputBotInlineMessageID64/">inputBotInlineMessageID64</a>#b6d915d7 dc_id:<a href="/type/int/">int</a> owner_id:<a href="/type/long/">long</a> id:<a href="/type/int/">int</a> access_hash:<a href="/type/long/">long</a> = <a href="/type/InputBotInlineMessageID/" class="current_page_link">InputBotInlineMessageID</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/inputBotInlineMessageID/">inputBotInlineMessageID</a></td><td>Represents a sent inline message from the perspective of a bot (legacy constructor)</td></tr><tr><td><a href="/constructor/inputBotInlineMessageID64/">inputBotInlineMessageID64</a></td><td>Represents a sent inline message from the perspective of a bot</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/messages.setBotGuestChatResult/">messages.setBotGuestChatResult</a></td><td>Bots may use this method to answer a <a href="/api/bots/guest-mode/">guest mode »</a> query received via an <a href="/constructor/updateBotGuestChatQuery/">updateBotGuestChatQuery</a> update, providing the message to post into the chat as a guest, see <a href="/api/bots/guest-mode/#handling-guest-queries-bot-side">here »</a> for more info.</td></tr></tbody></table>
