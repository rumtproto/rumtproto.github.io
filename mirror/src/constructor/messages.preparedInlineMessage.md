---
title: "messages.preparedInlineMessage"
original: "https://core.telegram.org/constructor/messages.preparedInlineMessage"
section: ref
description: "Represents a prepared inline message received via a bot's mini app, that can be sent to some chats »"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"messages.preparedInlineMessage","url":"/constructor/messages.preparedInlineMessage/"}]
layout: layout.njk
---

# messages.preparedInlineMessage

Represents a [prepared inline message received via a bot's mini app, that can be sent to some chats »](/api/bots/inline/#2-1-using-a-prepared-inline-message)

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messages.preparedInlineMessage/" class="current_page_link">messages.preparedInlineMessage</a>#ff57708d query_id:<a href="/type/long/">long</a> result:<a href="/type/BotInlineResult/">BotInlineResult</a> peer_types:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/InlineQueryPeerType/">InlineQueryPeerType</a>&gt; cache_time:<a href="/type/int/">int</a> users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/messages.PreparedInlineMessage/">messages.PreparedInlineMessage</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>query_id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>The <code>query_id</code> to pass to <a href="/method/messages.sendInlineBotResult/">messages.sendInlineBotResult</a></td></tr><tr><td><strong>result</strong></td><td style="text-align: center;"><a href="/type/BotInlineResult/">BotInlineResult</a></td><td>The contents of the message, to be shown in a preview</td></tr><tr><td><strong>peer_types</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/InlineQueryPeerType/">InlineQueryPeerType</a>&gt;</td><td>Types of chats where this message can be sent</td></tr><tr><td><strong>cache_time</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Caching validity of the results</td></tr><tr><td><strong>users</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt;</td><td>Users mentioned in the results</td></tr></tbody></table>

### Type

[messages.PreparedInlineMessage](/type/messages.PreparedInlineMessage/)

### Related pages

#### [messages.sendInlineBotResult](/method/messages.sendInlineBotResult/)

Send a result obtained using [messages.getInlineBotResults](/method/messages.getInlineBotResults/).

#### [Inline queries](/api/bots/inline/)

Users can interact with your bot via inline queries, straight from the text input field in any chat.
