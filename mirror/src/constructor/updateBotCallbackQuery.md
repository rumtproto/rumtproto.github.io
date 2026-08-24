---
title: "updateBotCallbackQuery"
original: "https://core.telegram.org/constructor/updateBotCallbackQuery"
section: ref
description: "A callback button was pressed, and the button data was sent to the bot that created the button"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"updateBotCallbackQuery","url":"/constructor/updateBotCallbackQuery/"}]
layout: layout.njk
---

# updateBotCallbackQuery

A callback button was pressed, and the button data was sent to the bot that created the button

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/updateBotCallbackQuery/" class="current_page_link">updateBotCallbackQuery</a>#b9cfc48d flags:<a href="/type/%23/">#</a> query_id:<a href="/type/long/">long</a> user_id:<a href="/type/long/">long</a> peer:<a href="/type/Peer/">Peer</a> msg_id:<a href="/type/int/">int</a> chat_instance:<a href="/type/long/">long</a> data:flags.0?<a href="/type/bytes/">bytes</a> game_short_name:flags.1?<a href="/type/string/">string</a> = <a href="/type/Update/">Update</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>query_id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Query ID</td></tr><tr><td><strong>user_id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>ID of the user that pressed the button</td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/Peer/">Peer</a></td><td>Chat where the inline keyboard was sent</td></tr><tr><td><strong>msg_id</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Message ID</td></tr><tr><td><strong>chat_instance</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Global identifier, uniquely corresponding to the chat to which the message with the callback button was sent. Useful for high scores in games.</td></tr><tr><td><strong>data</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/bytes/">bytes</a></td><td>Callback data</td></tr><tr><td><strong>game_short_name</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/type/string/">string</a></td><td>Short name of a Game to be returned, serves as the unique identifier for the game</td></tr></tbody></table>

### Type

[Update](/type/Update/)
