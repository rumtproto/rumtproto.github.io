---
title: "account.emojiStatuses"
original: "https://core.telegram.org/constructor/account.emojiStatuses"
section: ref
description: "How to fetch results from large lists of objects."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"account.emojiStatuses","url":"/constructor/account.emojiStatuses/"}]
layout: layout.njk
---

# account.emojiStatuses

A list of [emoji statuses](/api/emoji-status/)

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/account.emojiStatuses/" class="current_page_link">account.emojiStatuses</a>#90c467d1 hash:<a href="/type/long/">long</a> statuses:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/EmojiStatus/">EmojiStatus</a>&gt; = <a href="/type/account.EmojiStatuses/">account.EmojiStatuses</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>hash</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td><a href="/api/offsets/#hash-generation">Hash used for caching, for more info click here</a></td></tr><tr><td><strong>statuses</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/EmojiStatus/">EmojiStatus</a>&gt;</td><td><a href="/api/emoji-status/">Emoji statuses</a></td></tr></tbody></table>

### Type

[account.EmojiStatuses](/type/account.EmojiStatuses/)

### Related pages

#### [Pagination in the API](/api/offsets/)

How to fetch results from large lists of objects.

#### [Emoji status](/api/emoji-status/)

Telegram allows users to set an emoticon or a custom emoji as status, to show next to their name in chats and profiles.
