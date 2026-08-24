---
title: "account.EmojiStatuses"
original: "https://core.telegram.org/type/account.EmojiStatuses"
section: ref
description: "Telegram allows users to set an emoticon or a custom emoji as status, to show next to their name in chats and profiles."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"account.EmojiStatuses","url":"/type/account.EmojiStatuses/"}]
layout: layout.njk
---

# account.EmojiStatuses

A list of [emoji statuses](/api/emoji-status/)

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/account.emojiStatusesNotModified/">account.emojiStatusesNotModified</a>#d08ce645 = <a href="/type/account.EmojiStatuses/" class="current_page_link">account.EmojiStatuses</a>;
<a href="/constructor/account.emojiStatuses/">account.emojiStatuses</a>#90c467d1 hash:<a href="/type/long/">long</a> statuses:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/EmojiStatus/">EmojiStatus</a>&gt; = <a href="/type/account.EmojiStatuses/" class="current_page_link">account.EmojiStatuses</a>;

---functions---

<a href="/method/account.getDefaultEmojiStatuses/">account.getDefaultEmojiStatuses</a>#d6753386 hash:<a href="/type/long/">long</a> = <a href="/type/account.EmojiStatuses/" class="current_page_link">account.EmojiStatuses</a>;
<a href="/method/account.getRecentEmojiStatuses/">account.getRecentEmojiStatuses</a>#f578105 hash:<a href="/type/long/">long</a> = <a href="/type/account.EmojiStatuses/" class="current_page_link">account.EmojiStatuses</a>;
<a href="/method/account.getChannelDefaultEmojiStatuses/">account.getChannelDefaultEmojiStatuses</a>#7727a7d5 hash:<a href="/type/long/">long</a> = <a href="/type/account.EmojiStatuses/" class="current_page_link">account.EmojiStatuses</a>;
<a href="/method/account.getCollectibleEmojiStatuses/">account.getCollectibleEmojiStatuses</a>#2e7b4543 hash:<a href="/type/long/">long</a> = <a href="/type/account.EmojiStatuses/" class="current_page_link">account.EmojiStatuses</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/account.emojiStatusesNotModified/">account.emojiStatusesNotModified</a></td><td>The server-side list of <a href="/api/emoji-status/">emoji statuses</a> hasn't changed</td></tr><tr><td><a href="/constructor/account.emojiStatuses/">account.emojiStatuses</a></td><td>A list of <a href="/api/emoji-status/">emoji statuses</a></td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/account.getDefaultEmojiStatuses/">account.getDefaultEmojiStatuses</a></td><td>Get a list of default suggested <a href="/api/emoji-status/">emoji statuses</a></td></tr><tr><td><a href="/method/account.getRecentEmojiStatuses/">account.getRecentEmojiStatuses</a></td><td>Get recently used <a href="/api/emoji-status/">emoji statuses</a></td></tr><tr><td><a href="/method/account.getChannelDefaultEmojiStatuses/">account.getChannelDefaultEmojiStatuses</a></td><td>Get a list of default suggested <a href="/api/emoji-status/">channel emoji statuses</a>.</td></tr><tr><td><a href="/method/account.getCollectibleEmojiStatuses/">account.getCollectibleEmojiStatuses</a></td><td>Obtain a list of <a href="/api/emoji-status/">emoji statuses »</a> for owned or <a href="/api/gifts/#hosted-collectible-gifts">hosted collectible gifts »</a>.</td></tr></tbody></table>

### Related pages

#### [Emoji status](/api/emoji-status/)

Telegram allows users to set an emoticon or a custom emoji as status, to show next to their name in chats and profiles.
