---
title: "updateUserEmojiStatus"
original: "https://core.telegram.org/constructor/updateUserEmojiStatus"
section: ref
description: "The emoji status of a certain user has changed"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"updateUserEmojiStatus","url":"/constructor/updateUserEmojiStatus/"}]
layout: layout.njk
---

# updateUserEmojiStatus

The [emoji status](/api/emoji-status/) of a certain user has changed

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/updateUserEmojiStatus/" class="current_page_link">updateUserEmojiStatus</a>#28373599 user_id:<a href="/type/long/">long</a> emoji_status:<a href="/type/EmojiStatus/">EmojiStatus</a> = <a href="/type/Update/">Update</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>user_id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>User ID</td></tr><tr><td><strong>emoji_status</strong></td><td style="text-align: center;"><a href="/type/EmojiStatus/">EmojiStatus</a></td><td>New <a href="/api/emoji-status/">emoji status</a></td></tr></tbody></table>

### Type

[Update](/type/Update/)

### Related pages

#### [Emoji status](/api/emoji-status/)

Telegram allows users to set an emoticon or a custom emoji as status, to show next to their name in chats and profiles.
