---
title: "bots.updateUserEmojiStatus"
original: "https://core.telegram.org/method/bots.updateUserEmojiStatus"
section: ref
description: "Change the emoji status of a user (invoked by bots, see here » for more info on the full flow)"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"bots.updateUserEmojiStatus","url":"/method/bots.updateUserEmojiStatus/"}]
layout: layout.njk
---

# bots.updateUserEmojiStatus

Change the emoji status of a user (invoked by bots, see [here »](/api/emoji-status/#setting-an-emoji-status-from-a-bot) for more info on the full flow)

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/boolFalse/">boolFalse</a>#bc799737 = <a href="/type/Bool/">Bool</a>;
<a href="/constructor/boolTrue/">boolTrue</a>#997275b5 = <a href="/type/Bool/">Bool</a>;
---functions---
<a href="/method/bots.updateUserEmojiStatus/" class="current_page_link">bots.updateUserEmojiStatus</a>#ed9f30c5 user_id:<a href="/type/InputUser/">InputUser</a> emoji_status:<a href="/type/EmojiStatus/">EmojiStatus</a> = <a href="/type/Bool/">Bool</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>user_id</strong></td><td style="text-align: center;"><a href="/type/InputUser/">InputUser</a></td><td>The user whose emoji status should be changed</td></tr><tr><td><strong>emoji_status</strong></td><td style="text-align: center;"><a href="/type/EmojiStatus/">EmojiStatus</a></td><td>The emoji status</td></tr></tbody></table>

### Result

[Bool](/type/Bool/)

### Only bots can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>USER_BOT_REQUIRED</td><td>This method can only be called by a bot.</td></tr><tr><td>400</td><td>USER_ID_INVALID</td><td>The provided user ID is invalid.</td></tr><tr><td>403</td><td>USER_PERMISSION_DENIED</td><td>The user hasn't granted or has revoked the bot's access to change their emoji status using <a href="/method/bots.toggleUserEmojiStatusPermission/">bots.toggleUserEmojiStatusPermission</a>.</td></tr></tbody></table>

### Related pages

#### [Emoji status](/api/emoji-status/)

Telegram allows users to set an emoticon or a custom emoji as status, to show next to their name in chats and profiles.

#### [bots.toggleUserEmojiStatusPermission](/method/bots.toggleUserEmojiStatusPermission/)

Allow or prevent a bot from [changing our emoji status »](/api/emoji-status/#setting-an-emoji-status-from-a-bot)
