---
title: "account.getDefaultProfilePhotoEmojis"
original: "https://core.telegram.org/method/account.getDefaultProfilePhotoEmojis"
section: ref
description: "Get a set of suggested custom emoji stickers that can be used as profile picture"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"account.getDefaultProfilePhotoEmojis","url":"/method/account.getDefaultProfilePhotoEmojis/"}]
layout: layout.njk
---

# account.getDefaultProfilePhotoEmojis

Get a set of suggested [custom emoji stickers](/api/custom-emoji/) that can be [used as profile picture](/api/files/#sticker-profile-pictures)

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/emojiListNotModified/">emojiListNotModified</a>#481eadfa = <a href="/type/EmojiList/">EmojiList</a>;
<a href="/constructor/emojiList/">emojiList</a>#7a1e11d1 hash:<a href="/type/long/">long</a> document_id:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/long/">long</a>&gt; = <a href="/type/EmojiList/">EmojiList</a>;
---functions---
<a href="/method/account.getDefaultProfilePhotoEmojis/" class="current_page_link">account.getDefaultProfilePhotoEmojis</a>#e2750328 hash:<a href="/type/long/">long</a> = <a href="/type/EmojiList/">EmojiList</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>hash</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td><a href="/api/offsets/#hash-generation">Hash used for caching, for more info click here</a>.</td></tr></tbody></table>

### Result

[EmojiList](/type/EmojiList/)

### Only users can use this method

### Related pages

#### [Pagination in the API](/api/offsets/)

How to fetch results from large lists of objects.

#### [Custom emojis](/api/custom-emoji/)

Telegram allows including animated and static custom emojis inside of messages.

#### [Uploading and Downloading Files](/api/files/)

How to transfer large data batches correctly.
