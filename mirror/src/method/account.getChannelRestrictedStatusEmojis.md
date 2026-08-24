---
title: "account.getChannelRestrictedStatusEmojis"
original: "https://core.telegram.org/method/account.getChannelRestrictedStatusEmojis"
section: ref
description: "Returns fetch the full list of custom emoji IDs » that cannot be used in channel emoji statuses »."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"account.getChannelRestrictedStatusEmojis","url":"/method/account.getChannelRestrictedStatusEmojis/"}]
layout: layout.njk
---

# account.getChannelRestrictedStatusEmojis

Returns fetch the full list of [custom emoji IDs »](/api/custom-emoji/) that cannot be used in [channel emoji statuses »](/api/emoji-status/).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/emojiListNotModified/">emojiListNotModified</a>#481eadfa = <a href="/type/EmojiList/">EmojiList</a>;
<a href="/constructor/emojiList/">emojiList</a>#7a1e11d1 hash:<a href="/type/long/">long</a> document_id:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/long/">long</a>&gt; = <a href="/type/EmojiList/">EmojiList</a>;
---functions---
<a href="/method/account.getChannelRestrictedStatusEmojis/" class="current_page_link">account.getChannelRestrictedStatusEmojis</a>#35a9e0d5 hash:<a href="/type/long/">long</a> = <a href="/type/EmojiList/">EmojiList</a>;</code></pre>

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

#### [Emoji status](/api/emoji-status/)

Telegram allows users to set an emoticon or a custom emoji as status, to show next to their name in chats and profiles.
