---
title: "bots.toggleUserEmojiStatusPermission"
original: "https://core.telegram.org/method/bots.toggleUserEmojiStatusPermission"
section: ref
description: "Allow or prevent a bot from changing our emoji status »"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"bots.toggleUserEmojiStatusPermission","url":"/method/bots.toggleUserEmojiStatusPermission/"}]
layout: layout.njk
---

# bots.toggleUserEmojiStatusPermission

Allow or prevent a bot from [changing our emoji status »](/api/emoji-status/#setting-an-emoji-status-from-a-bot)

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/boolFalse/">boolFalse</a>#bc799737 = <a href="/type/Bool/">Bool</a>;
<a href="/constructor/boolTrue/">boolTrue</a>#997275b5 = <a href="/type/Bool/">Bool</a>;
---functions---
<a href="/method/bots.toggleUserEmojiStatusPermission/" class="current_page_link">bots.toggleUserEmojiStatusPermission</a>#6de6392 bot:<a href="/type/InputUser/">InputUser</a> enabled:<a href="/type/Bool/">Bool</a> = <a href="/type/Bool/">Bool</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>bot</strong></td><td style="text-align: center;"><a href="/type/InputUser/">InputUser</a></td><td>The bot</td></tr><tr><td><strong>enabled</strong></td><td style="text-align: center;"><a href="/type/Bool/">Bool</a></td><td>Whether to allow or prevent the bot from changing our emoji status</td></tr></tbody></table>

### Result

[Bool](/type/Bool/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>BOT_INVALID</td><td>This is not a valid bot.</td></tr></tbody></table>

### Related pages

#### [Emoji status](/api/emoji-status/)

Telegram allows users to set an emoticon or a custom emoji as status, to show next to their name in chats and profiles.
