---
title: "inputMessageEntityMentionName"
original: "https://core.telegram.org/constructor/inputMessageEntityMentionName"
section: ref
description: "Message entity that can be used to create a user user mention: received mentions use the messageEntityMentionName constructor, instead."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"inputMessageEntityMentionName","url":"/constructor/inputMessageEntityMentionName/"}]
layout: layout.njk
---

# inputMessageEntityMentionName

Message entity that can be used to create a user [user mention](/api/mentions/): received mentions use the [messageEntityMentionName](/constructor/messageEntityMentionName/) constructor, instead.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/inputMessageEntityMentionName/" class="current_page_link">inputMessageEntityMentionName</a>#208e68c9 offset:<a href="/type/int/">int</a> length:<a href="/type/int/">int</a> user_id:<a href="/type/InputUser/">InputUser</a> = <a href="/type/MessageEntity/">MessageEntity</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>offset</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Offset of message entity within message (in <a href="/api/entities/#entity-length">UTF-16 code units</a>)</td></tr><tr><td><strong>length</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Length of message entity within message (in <a href="/api/entities/#entity-length">UTF-16 code units</a>)</td></tr><tr><td><strong>user_id</strong></td><td style="text-align: center;"><a href="/type/InputUser/">InputUser</a></td><td>Identifier of the user that was mentioned</td></tr></tbody></table>

### Type

[MessageEntity](/type/MessageEntity/)

### Related pages

#### [Styled text with message entities](/api/entities/)

How to create styled text with message entities

#### [Mentions and replies](/api/mentions/)

Telegram allows mentioning other users in case of urgent duckling matters, and quickly navigating to those mentions in order to read them as swiftly as possible.

#### [messageEntityMentionName](/constructor/messageEntityMentionName/)

Message entity representing a [user mention](/api/mentions/): for _creating_ a mention use [inputMessageEntityMentionName](/constructor/inputMessageEntityMentionName/).
