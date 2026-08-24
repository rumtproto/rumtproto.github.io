---
title: "EmojiStatus"
original: "https://core.telegram.org/type/EmojiStatus"
section: ref
description: "Telegram allows users to set an emoticon or a custom emoji as status, to show next to their name in chats and profiles."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"EmojiStatus","url":"/type/EmojiStatus/"}]
layout: layout.njk
---

# EmojiStatus

[Emoji status](/api/emoji-status/)

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/emojiStatusEmpty/">emojiStatusEmpty</a>#2de11aae = <a href="/type/EmojiStatus/" class="current_page_link">EmojiStatus</a>;
<a href="/constructor/emojiStatus/">emojiStatus</a>#e7ff068a flags:<a href="/type/%23/">#</a> document_id:<a href="/type/long/">long</a> until:flags.0?<a href="/type/int/">int</a> = <a href="/type/EmojiStatus/" class="current_page_link">EmojiStatus</a>;
<a href="/constructor/emojiStatusCollectible/">emojiStatusCollectible</a>#7184603b flags:<a href="/type/%23/">#</a> collectible_id:<a href="/type/long/">long</a> document_id:<a href="/type/long/">long</a> title:<a href="/type/string/">string</a> slug:<a href="/type/string/">string</a> pattern_document_id:<a href="/type/long/">long</a> center_color:<a href="/type/int/">int</a> edge_color:<a href="/type/int/">int</a> pattern_color:<a href="/type/int/">int</a> text_color:<a href="/type/int/">int</a> until:flags.0?<a href="/type/int/">int</a> = <a href="/type/EmojiStatus/" class="current_page_link">EmojiStatus</a>;
<a href="/constructor/inputEmojiStatusCollectible/">inputEmojiStatusCollectible</a>#7141dbf flags:<a href="/type/%23/">#</a> collectible_id:<a href="/type/long/">long</a> until:flags.0?<a href="/type/int/">int</a> = <a href="/type/EmojiStatus/" class="current_page_link">EmojiStatus</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/emojiStatusEmpty/">emojiStatusEmpty</a></td><td>No emoji status is set</td></tr><tr><td><a href="/constructor/emojiStatus/">emojiStatus</a></td><td>An <a href="/api/emoji-status/">emoji status</a></td></tr><tr><td><a href="/constructor/emojiStatusCollectible/">emojiStatusCollectible</a></td><td>An owned or <a href="/api/gifts/#hosted-collectible-gifts">hosted collectible gift »</a> as emoji status.<br><br><strong>Cannot</strong> be passed to <a href="/method/account.updateEmojiStatus/">account.updateEmojiStatus</a>, must be converted to an <a href="/constructor/inputEmojiStatusCollectible/">inputEmojiStatusCollectible</a> first before passing it to that method.</td></tr><tr><td><a href="/constructor/inputEmojiStatusCollectible/">inputEmojiStatusCollectible</a></td><td>An owned or <a href="/api/gifts/#hosted-collectible-gifts">hosted collectible gift »</a> as emoji status: can only be used in <a href="/method/account.updateEmojiStatus/">account.updateEmojiStatus</a>, is never returned by the API.<br><br>Note that once set, the status will be returned to users as a <a href="/constructor/emojiStatusCollectible/">emojiStatusCollectible</a> constructor, instead (which <strong>cannot</strong> be passed to <a href="/method/account.updateEmojiStatus/">account.updateEmojiStatus</a>, and must be converted to an <a href="/constructor/inputEmojiStatusCollectible/">inputEmojiStatusCollectible</a> first).</td></tr></tbody></table>

### Related pages

#### [Emoji status](/api/emoji-status/)

Telegram allows users to set an emoticon or a custom emoji as status, to show next to their name in chats and profiles.
