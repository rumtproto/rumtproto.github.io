---
title: "messageEntityCustomEmoji"
original: "https://core.telegram.org/constructor/messageEntityCustomEmoji"
section: ref
description: "Represents a custom emoji."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"messageEntityCustomEmoji","url":"/constructor/messageEntityCustomEmoji/"}]
layout: layout.njk
---

# messageEntityCustomEmoji

Represents a custom emoji.  
Note that this entity must wrap exactly one regular emoji (the one contained in [documentAttributeCustomEmoji](/constructor/documentAttributeCustomEmoji/).`alt`) in the related text, otherwise the server will ignore it.

#### [End-to-end schema](/schema/end-to-end/)

```
===144===
messageEntityCustomEmoji#c8cf05f8 offset:int length:int document_id:long = MessageEntity;
```

#### API schema

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messageEntityCustomEmoji/" class="current_page_link">messageEntityCustomEmoji</a>#c8cf05f8 offset:<a href="/type/int/">int</a> length:<a href="/type/int/">int</a> document_id:<a href="/type/long/">long</a> = <a href="/type/MessageEntity/">MessageEntity</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>offset</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Offset of message entity within message (in <a href="/api/entities/#entity-length">UTF-16 code units</a>)</td></tr><tr><td><strong>length</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Length of message entity within message (in <a href="/api/entities/#entity-length">UTF-16 code units</a>)</td></tr><tr><td><strong>document_id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Document ID of the <a href="/api/custom-emoji/">custom emoji</a>, use <a href="/method/messages.getCustomEmojiDocuments/">messages.getCustomEmojiDocuments</a> to fetch the emoji animation and the actual emoji it represents.</td></tr></tbody></table>

### Type

[MessageEntity](/type/MessageEntity/)

### Related pages

#### [Styled text with message entities](/api/entities/)

How to create styled text with message entities

#### [Custom emojis](/api/custom-emoji/)

Telegram allows including animated and static custom emojis inside of messages.

#### [messages.getCustomEmojiDocuments](/method/messages.getCustomEmojiDocuments/)

Fetch [custom emoji stickers »](/api/custom-emoji/).

Returns a list of [documents](/constructor/document/) with the animated custom emoji in TGS format, and a [documentAttributeCustomEmoji](/constructor/documentAttributeCustomEmoji/) attribute with the original emoji and info about the emoji stickerset this custom emoji belongs to.

#### [documentAttributeCustomEmoji](/constructor/documentAttributeCustomEmoji/)

Info about a custom emoji
