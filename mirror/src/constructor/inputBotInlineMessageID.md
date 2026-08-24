---
title: "inputBotInlineMessageID"
original: "https://core.telegram.org/constructor/inputBotInlineMessageID"
section: ref
description: "Represents a sent inline message from the perspective of a bot (legacy constructor)"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"inputBotInlineMessageID","url":"/constructor/inputBotInlineMessageID/"}]
layout: layout.njk
---

# inputBotInlineMessageID

Represents a sent inline message from the perspective of a bot (legacy constructor)

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/inputBotInlineMessageID/" class="current_page_link">inputBotInlineMessageID</a>#890c3d89 dc_id:<a href="/type/int/">int</a> id:<a href="/type/long/">long</a> access_hash:<a href="/type/long/">long</a> = <a href="/type/InputBotInlineMessageID/">InputBotInlineMessageID</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>dc_id</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>DC ID to use when working with this inline message</td></tr><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>ID of message, contains both the (32-bit, legacy) owner ID and the message ID, used only for Bot API backwards compatibility with 32-bit user ID.</td></tr><tr><td><strong>access_hash</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Access hash of message</td></tr></tbody></table>

### Type

[InputBotInlineMessageID](/type/InputBotInlineMessageID/)
