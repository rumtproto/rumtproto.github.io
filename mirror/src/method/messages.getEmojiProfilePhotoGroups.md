---
title: "messages.getEmojiProfilePhotoGroups"
original: "https://core.telegram.org/method/messages.getEmojiProfilePhotoGroups"
section: ref
description: "Represents a list of emoji categories, to be used when selecting custom emojis to set as profile picture."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.getEmojiProfilePhotoGroups","url":"/method/messages.getEmojiProfilePhotoGroups/"}]
layout: layout.njk
---

# messages.getEmojiProfilePhotoGroups

Represents a list of [emoji categories](/api/emoji-categories/), to be used when selecting custom emojis to set as [profile picture](/api/files/#sticker-profile-pictures).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messages.emojiGroupsNotModified/">messages.emojiGroupsNotModified</a>#6fb4ad87 = <a href="/type/messages.EmojiGroups/">messages.EmojiGroups</a>;
<a href="/constructor/messages.emojiGroups/">messages.emojiGroups</a>#881fb94b hash:<a href="/type/int/">int</a> groups:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/EmojiGroup/">EmojiGroup</a>&gt; = <a href="/type/messages.EmojiGroups/">messages.EmojiGroups</a>;
---functions---
<a href="/method/messages.getEmojiProfilePhotoGroups/" class="current_page_link">messages.getEmojiProfilePhotoGroups</a>#21a548f3 hash:<a href="/type/int/">int</a> = <a href="/type/messages.EmojiGroups/">messages.EmojiGroups</a>;</code></pre>

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

#### [Uploading and Downloading Files](/api/files/)

How to transfer large data batches correctly.
