---
title: "messageEntityMention"
original: "https://core.telegram.org/constructor/messageEntityMention"
section: ref
description: "Message entity mentioning a user by @username; messageEntityMentionName can also be used to mention users by their ID."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"messageEntityMention","url":"/constructor/messageEntityMention/"}]
layout: layout.njk
---

# messageEntityMention

Message entity [mentioning](/api/mentions/) a user by `@username`; [messageEntityMentionName](/constructor/messageEntityMentionName/) can also be used to mention users by their ID.

#### [End-to-end schema](/schema/end-to-end/)

```
===45===
messageEntityMention#fa04579d offset:int length:int = MessageEntity;
```

#### API schema

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messageEntityMention/" class="current_page_link">messageEntityMention</a>#fa04579d offset:<a href="/type/int/">int</a> length:<a href="/type/int/">int</a> = <a href="/type/MessageEntity/">MessageEntity</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>offset</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Offset of message entity within message (in <a href="/api/entities/#entity-length">UTF-16 code units</a>)</td></tr><tr><td><strong>length</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Length of message entity within message (in <a href="/api/entities/#entity-length">UTF-16 code units</a>)</td></tr></tbody></table>

### Type

[MessageEntity](/type/MessageEntity/)

### Related pages

#### [Styled text with message entities](/api/entities/)

How to create styled text with message entities

#### [Mentions and replies](/api/mentions/)

Telegram allows mentioning other users in case of urgent duckling matters, and quickly navigating to those mentions in order to read them as swiftly as possible.

#### [messageEntityMentionName](/constructor/messageEntityMentionName/)

Message entity representing a [user mention](/api/mentions/): for _creating_ a mention use [inputMessageEntityMentionName](/constructor/inputMessageEntityMentionName/).
