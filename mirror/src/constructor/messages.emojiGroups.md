---
title: "messages.emojiGroups"
original: "https://core.telegram.org/constructor/messages.emojiGroups"
section: ref
description: "Represents a list of emoji categories."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"messages.emojiGroups","url":"/constructor/messages.emojiGroups/"}]
layout: layout.njk
---

# messages.emojiGroups

Represents a list of [emoji categories](/api/emoji-categories/).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messages.emojiGroups/" class="current_page_link">messages.emojiGroups</a>#881fb94b hash:<a href="/type/int/">int</a> groups:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/EmojiGroup/">EmojiGroup</a>&gt; = <a href="/type/messages.EmojiGroups/">messages.EmojiGroups</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>hash</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td><a href="/api/offsets/#hash-generation">Hash used for caching, for more info click here</a></td></tr><tr><td><strong>groups</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/EmojiGroup/">EmojiGroup</a>&gt;</td><td>A list of <a href="/api/emoji-categories/">emoji categories</a>.</td></tr></tbody></table>

### Type

[messages.EmojiGroups](/type/messages.EmojiGroups/)

### Related pages

#### [Pagination in the API](/api/offsets/)

How to fetch results from large lists of objects.

#### [Emoji categories](/api/emoji-categories/)

Sticker, custom emoji and GIF selection UIs should offer a list of categories to quickly filter results by a (list of) emojis, or by some other criteria.
