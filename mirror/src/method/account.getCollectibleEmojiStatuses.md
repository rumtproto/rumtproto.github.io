---
title: "account.getCollectibleEmojiStatuses"
original: "https://core.telegram.org/method/account.getCollectibleEmojiStatuses"
section: ref
description: "Obtain a list of emoji statuses » for owned or hosted collectible gifts »."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"account.getCollectibleEmojiStatuses","url":"/method/account.getCollectibleEmojiStatuses/"}]
layout: layout.njk
---

# account.getCollectibleEmojiStatuses

Obtain a list of [emoji statuses »](/api/emoji-status/) for owned or [hosted collectible gifts »](/api/gifts/#hosted-collectible-gifts).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/account.emojiStatusesNotModified/">account.emojiStatusesNotModified</a>#d08ce645 = <a href="/type/account.EmojiStatuses/">account.EmojiStatuses</a>;
<a href="/constructor/account.emojiStatuses/">account.emojiStatuses</a>#90c467d1 hash:<a href="/type/long/">long</a> statuses:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/EmojiStatus/">EmojiStatus</a>&gt; = <a href="/type/account.EmojiStatuses/">account.EmojiStatuses</a>;
---functions---
<a href="/method/account.getCollectibleEmojiStatuses/" class="current_page_link">account.getCollectibleEmojiStatuses</a>#2e7b4543 hash:<a href="/type/long/">long</a> = <a href="/type/account.EmojiStatuses/">account.EmojiStatuses</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>hash</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td><a href="/api/offsets/">Hash for pagination</a></td></tr></tbody></table>

### Result

[account.EmojiStatuses](/type/account.EmojiStatuses/)

### Only users can use this method

### Related pages

#### [Pagination in the API](/api/offsets/)

How to fetch results from large lists of objects.

#### [Emoji status](/api/emoji-status/)

Telegram allows users to set an emoticon or a custom emoji as status, to show next to their name in chats and profiles.

#### [Telegram Gifts](/api/gifts/)

Users can send Gifts to their friends. The recipients of gifts can display them on their profile pages or turn them into Telegram Stars ». Telegram Stars can be used for many things, including supporting creators and buying services in mini apps.
