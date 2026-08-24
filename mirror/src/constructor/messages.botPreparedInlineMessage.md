---
title: "messages.botPreparedInlineMessage"
original: "https://core.telegram.org/constructor/messages.botPreparedInlineMessage"
section: ref
description: "Represents a prepared inline message saved by a bot, to be sent to the user via a web app »"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"messages.botPreparedInlineMessage","url":"/constructor/messages.botPreparedInlineMessage/"}]
layout: layout.njk
---

# messages.botPreparedInlineMessage

Represents a [prepared inline message saved by a bot, to be sent to the user via a web app »](/api/bots/inline/#2-1-using-a-prepared-inline-message)

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messages.botPreparedInlineMessage/" class="current_page_link">messages.botPreparedInlineMessage</a>#8ecf0511 id:<a href="/type/string/">string</a> expire_date:<a href="/type/int/">int</a> = <a href="/type/messages.BotPreparedInlineMessage/">messages.BotPreparedInlineMessage</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>The ID of the saved message, to be passed to the <code>id</code> field of the <a href="/api/web-events/#web-app-send-prepared-message">web_app_send_prepared_message event »</a></td></tr><tr><td><strong>expire_date</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Expiration date of the message</td></tr></tbody></table>

### Type

[messages.BotPreparedInlineMessage](/type/messages.BotPreparedInlineMessage/)

### Related pages

#### [Web events](/api/web-events/)

How telegram apps interact with webpages

#### [Inline queries](/api/bots/inline/)

Users can interact with your bot via inline queries, straight from the text input field in any chat.
