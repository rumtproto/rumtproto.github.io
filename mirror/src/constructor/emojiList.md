---
title: "emojiList"
original: "https://core.telegram.org/constructor/emojiList"
section: ref
description: "Represents a list of custom emojis."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"emojiList","url":"/constructor/emojiList/"}]
layout: layout.njk
---

# emojiList

Represents a list of [custom emojis](/api/custom-emoji/).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/emojiList/" class="current_page_link">emojiList</a>#7a1e11d1 hash:<a href="/type/long/">long</a> document_id:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/long/">long</a>&gt; = <a href="/type/EmojiList/">EmojiList</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>hash</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td><a href="/api/offsets/#hash-generation">Hash used for caching, for more info click here</a></td></tr><tr><td><strong>document_id</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/long/">long</a>&gt;</td><td>Custom emoji IDs</td></tr></tbody></table>

### Type

[EmojiList](/type/EmojiList/)

### Related pages

#### [Pagination in the API](/api/offsets/)

How to fetch results from large lists of objects.

#### [Custom emojis](/api/custom-emoji/)

Telegram allows including animated and static custom emojis inside of messages.
