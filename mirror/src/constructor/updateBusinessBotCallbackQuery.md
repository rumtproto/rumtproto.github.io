---
title: "updateBusinessBotCallbackQuery"
original: "https://core.telegram.org/constructor/updateBusinessBotCallbackQuery"
section: ref
description: "A callback button sent via a business connection was pressed, and the button data was sent to the bot that created the button."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"updateBusinessBotCallbackQuery","url":"/constructor/updateBusinessBotCallbackQuery/"}]
layout: layout.njk
---

# updateBusinessBotCallbackQuery

A callback button sent via a [business connection](/api/bots/connected-business-bots/) was pressed, and the button data was sent to the bot that created the button.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/updateBusinessBotCallbackQuery/" class="current_page_link">updateBusinessBotCallbackQuery</a>#1ea2fda7 flags:<a href="/type/%23/">#</a> query_id:<a href="/type/long/">long</a> user_id:<a href="/type/long/">long</a> connection_id:<a href="/type/string/">string</a> message:<a href="/type/Message/">Message</a> reply_to_message:flags.2?<a href="/type/Message/">Message</a> chat_instance:<a href="/type/long/">long</a> data:flags.0?<a href="/type/bytes/">bytes</a> = <a href="/type/Update/">Update</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>query_id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Query ID</td></tr><tr><td><strong>user_id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>ID of the user that pressed the button</td></tr><tr><td><strong>connection_id</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td><a href="/api/bots/connected-business-bots/">Business connection ID</a></td></tr><tr><td><strong>message</strong></td><td style="text-align: center;"><a href="/type/Message/">Message</a></td><td>Message that contains the keyboard (also contains info about the chat where the message was sent).</td></tr><tr><td><strong>reply_to_message</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/type/Message/">Message</a></td><td>The message that <code>message</code> is replying to.</td></tr><tr><td><strong>chat_instance</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Global identifier, uniquely corresponding to the chat to which the message with the callback button was sent. Useful for high scores in games.</td></tr><tr><td><strong>data</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/bytes/">bytes</a></td><td>Callback data</td></tr></tbody></table>

### Type

[Update](/type/Update/)

### Related pages

#### [Connected business bots](/api/bots/connected-business-bots/)

Users can connect Telegram bots that will process and answer messages on their behalf. This allows them to seamlessly integrate any existing tools and workflows, or add AI assistants that manage their chats.
