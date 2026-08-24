---
title: "emojiGroup"
original: "https://core.telegram.org/constructor/emojiGroup"
section: ref
description: "Represents an emoji category."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"emojiGroup","url":"/constructor/emojiGroup/"}]
layout: layout.njk
---

# emojiGroup

Represents an [emoji category](/api/emoji-categories/).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/emojiGroup/" class="current_page_link">emojiGroup</a>#7a9abda9 title:<a href="/type/string/">string</a> icon_emoji_id:<a href="/type/long/">long</a> emoticons:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/string/">string</a>&gt; = <a href="/type/EmojiGroup/">EmojiGroup</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>title</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Category name, i.e. "Animals", "Flags", "Faces" and so on...</td></tr><tr><td><strong>icon_emoji_id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>A single custom emoji used as preview for the category.</td></tr><tr><td><strong>emoticons</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/string/">string</a>&gt;</td><td>A list of UTF-8 emojis, matching the category.</td></tr></tbody></table>

### Type

[EmojiGroup](/type/EmojiGroup/)

### Related pages

#### [Emoji categories](/api/emoji-categories/)

Sticker, custom emoji and GIF selection UIs should offer a list of categories to quickly filter results by a (list of) emojis, or by some other criteria.
