---
title: "messages.searchCustomEmoji"
original: "https://core.telegram.org/method/messages.searchCustomEmoji"
section: ref
description: "Look for custom emojis associated to a UTF8 emoji"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.searchCustomEmoji","url":"/method/messages.searchCustomEmoji/"}]
layout: layout.njk
---

# messages.searchCustomEmoji

Look for [custom emojis](/api/custom-emoji/) associated to a UTF8 emoji

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/emojiListNotModified/">emojiListNotModified</a>#481eadfa = <a href="/type/EmojiList/">EmojiList</a>;
<a href="/constructor/emojiList/">emojiList</a>#7a1e11d1 hash:<a href="/type/long/">long</a> document_id:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/long/">long</a>&gt; = <a href="/type/EmojiList/">EmojiList</a>;
---functions---
<a href="/method/messages.searchCustomEmoji/" class="current_page_link">messages.searchCustomEmoji</a>#2c11c0d7 emoticon:<a href="/type/string/">string</a> hash:<a href="/type/long/">long</a> = <a href="/type/EmojiList/">EmojiList</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>emoticon</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>The emoji</td></tr><tr><td><strong>hash</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td><a href="/api/offsets/#hash-generation">Hash used for caching, for more info click here</a>.</td></tr></tbody></table>

### Result

[EmojiList](/type/EmojiList/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>EMOTICON_EMPTY</td><td>The emoji is empty.</td></tr></tbody></table>

### Related pages

#### [Pagination in the API](/api/offsets/)

How to fetch results from large lists of objects.

#### [Custom emojis](/api/custom-emoji/)

Telegram allows including animated and static custom emojis inside of messages.
