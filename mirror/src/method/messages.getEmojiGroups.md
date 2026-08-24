---
title: "messages.getEmojiGroups"
original: "https://core.telegram.org/method/messages.getEmojiGroups"
section: ref
description: "Represents a list of emoji categories."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.getEmojiGroups","url":"/method/messages.getEmojiGroups/"}]
layout: layout.njk
---

# messages.getEmojiGroups

Represents a list of [emoji categories](/api/emoji-categories/).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messages.emojiGroupsNotModified/">messages.emojiGroupsNotModified</a>#6fb4ad87 = <a href="/type/messages.EmojiGroups/">messages.EmojiGroups</a>;
<a href="/constructor/messages.emojiGroups/">messages.emojiGroups</a>#881fb94b hash:<a href="/type/int/">int</a> groups:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/EmojiGroup/">EmojiGroup</a>&gt; = <a href="/type/messages.EmojiGroups/">messages.EmojiGroups</a>;
---functions---
<a href="/method/messages.getEmojiGroups/" class="current_page_link">messages.getEmojiGroups</a>#7488ce5b hash:<a href="/type/int/">int</a> = <a href="/type/messages.EmojiGroups/">messages.EmojiGroups</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>hash</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td><a href="/api/offsets/#hash-generation">Hash used for caching, for more info click here</a>.</td></tr></tbody></table>

### Result

[messages.EmojiGroups](/type/messages.EmojiGroups/)

### Only users can use this method

### Related pages

#### [Pagination in the API](/api/offsets/)

How to fetch results from large lists of objects.

#### [Emoji categories](/api/emoji-categories/)

Sticker, custom emoji and GIF selection UIs should offer a list of categories to quickly filter results by a (list of) emojis, or by some other criteria.
