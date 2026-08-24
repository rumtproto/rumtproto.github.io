---
title: "emojiStatus"
original: "https://core.telegram.org/constructor/emojiStatus"
section: ref
description: "Telegram allows including animated and static custom emojis inside of messages."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"emojiStatus","url":"/constructor/emojiStatus/"}]
layout: layout.njk
---

# emojiStatus

An [emoji status](/api/emoji-status/)

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/emojiStatus/" class="current_page_link">emojiStatus</a>#e7ff068a flags:<a href="/type/%23/">#</a> document_id:<a href="/type/long/">long</a> until:flags.0?<a href="/type/int/">int</a> = <a href="/type/EmojiStatus/">EmojiStatus</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>document_id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td><a href="/api/custom-emoji/">Custom emoji document ID</a></td></tr><tr><td><strong>until</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/int/">int</a></td><td>If set, the emoji status will be active until the specified unixtime.</td></tr></tbody></table>

### Type

[EmojiStatus](/type/EmojiStatus/)

### Related pages

#### [Custom emojis](/api/custom-emoji/)

Telegram allows including animated and static custom emojis inside of messages.

#### [Emoji status](/api/emoji-status/)

Telegram allows users to set an emoticon or a custom emoji as status, to show next to their name in chats and profiles.
