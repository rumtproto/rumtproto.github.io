---
title: "messages.getCustomEmojiDocuments"
original: "https://core.telegram.org/method/messages.getCustomEmojiDocuments"
section: ref
description: "Fetch custom emoji stickers »."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.getCustomEmojiDocuments","url":"/method/messages.getCustomEmojiDocuments/"}]
layout: layout.njk
---

# messages.getCustomEmojiDocuments

Fetch [custom emoji stickers »](/api/custom-emoji/).

Returns a list of [documents](/constructor/document/) with the animated custom emoji in TGS format, and a [documentAttributeCustomEmoji](/constructor/documentAttributeCustomEmoji/) attribute with the original emoji and info about the emoji stickerset this custom emoji belongs to.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code>---functions---
<a href="/method/messages.getCustomEmojiDocuments/" class="current_page_link">messages.getCustomEmojiDocuments</a>#d9ab0f54 document_id:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/long/">long</a>&gt; = <a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Document/">Document</a>&gt;;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>document_id</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/long/">long</a>&gt;</td><td><a href="/api/custom-emoji/">Custom emoji</a> IDs from a <a href="/constructor/messageEntityCustomEmoji/">messageEntityCustomEmoji</a>.</td></tr></tbody></table>

### Result

[Vector](/type/Vector%20t/)&lt;[Document](/type/Document/)\>

### Both users and bots can use this method

### Related pages

#### [Custom emojis](/api/custom-emoji/)

Telegram allows including animated and static custom emojis inside of messages.

#### [messageEntityCustomEmoji](/constructor/messageEntityCustomEmoji/)

Represents a custom emoji.  
Note that this entity must wrap exactly one regular emoji (the one contained in [documentAttributeCustomEmoji](/constructor/documentAttributeCustomEmoji/).`alt`) in the related text, otherwise the server will ignore it.

#### [document](/constructor/document/)

Document

#### [documentAttributeCustomEmoji](/constructor/documentAttributeCustomEmoji/)

Info about a custom emoji
