---
title: "account.updateEmojiStatus"
original: "https://core.telegram.org/method/account.updateEmojiStatus"
section: ref
description: "Telegram allows users to set an emoticon or a custom emoji as status, to show next to their name in chats and profiles."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"account.updateEmojiStatus","url":"/method/account.updateEmojiStatus/"}]
layout: layout.njk
---

# account.updateEmojiStatus

Set an [emoji status](/api/emoji-status/)

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/boolFalse/">boolFalse</a>#bc799737 = <a href="/type/Bool/">Bool</a>;
<a href="/constructor/boolTrue/">boolTrue</a>#997275b5 = <a href="/type/Bool/">Bool</a>;
---functions---
<a href="/method/account.updateEmojiStatus/" class="current_page_link">account.updateEmojiStatus</a>#fbd3de6b emoji_status:<a href="/type/EmojiStatus/">EmojiStatus</a> = <a href="/type/Bool/">Bool</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>emoji_status</strong></td><td style="text-align: center;"><a href="/type/EmojiStatus/">EmojiStatus</a></td><td><a href="/api/emoji-status/">Emoji status</a> to set</td></tr></tbody></table>

### Result

[Bool](/type/Bool/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>COLLECTIBLE_INVALID</td><td>The specified collectible is invalid.</td></tr><tr><td>400</td><td>DOCUMENT_INVALID</td><td>The specified document is invalid.</td></tr><tr><td>403</td><td>PREMIUM_ACCOUNT_REQUIRED</td><td>A premium account is required to execute this action.</td></tr></tbody></table>

### Related pages

#### [Emoji status](/api/emoji-status/)

Telegram allows users to set an emoticon or a custom emoji as status, to show next to their name in chats and profiles.
