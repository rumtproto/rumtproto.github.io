---
title: "account.getDefaultBackgroundEmojis"
original: "https://core.telegram.org/method/account.getDefaultBackgroundEmojis"
section: ref
description: "Get a set of suggested custom emoji stickers that can be used in an accent color pattern."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"account.getDefaultBackgroundEmojis","url":"/method/account.getDefaultBackgroundEmojis/"}]
layout: layout.njk
---

# account.getDefaultBackgroundEmojis

Get a set of suggested [custom emoji stickers](/api/custom-emoji/) that can be used in an [accent color pattern](/api/colors/).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/emojiListNotModified/">emojiListNotModified</a>#481eadfa = <a href="/type/EmojiList/">EmojiList</a>;
<a href="/constructor/emojiList/">emojiList</a>#7a1e11d1 hash:<a href="/type/long/">long</a> document_id:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/long/">long</a>&gt; = <a href="/type/EmojiList/">EmojiList</a>;
---functions---
<a href="/method/account.getDefaultBackgroundEmojis/" class="current_page_link">account.getDefaultBackgroundEmojis</a>#a60ab9ce hash:<a href="/type/long/">long</a> = <a href="/type/EmojiList/">EmojiList</a>;</code></pre>

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

#### [Accent colors](/api/colors/)

Telegram users and channels can change the accent color and background pattern of their profile page and their messages!
