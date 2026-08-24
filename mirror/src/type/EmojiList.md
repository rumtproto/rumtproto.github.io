---
title: "EmojiList"
original: "https://core.telegram.org/type/EmojiList"
section: ref
description: "Represents a list of custom emojis."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"EmojiList","url":"/type/EmojiList/"}]
layout: layout.njk
---

# EmojiList

Represents a list of [custom emojis](/api/custom-emoji/).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/emojiListNotModified/">emojiListNotModified</a>#481eadfa = <a href="/type/EmojiList/" class="current_page_link">EmojiList</a>;
<a href="/constructor/emojiList/">emojiList</a>#7a1e11d1 hash:<a href="/type/long/">long</a> document_id:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/long/">long</a>&gt; = <a href="/type/EmojiList/" class="current_page_link">EmojiList</a>;

---functions---

<a href="/method/account.getDefaultProfilePhotoEmojis/">account.getDefaultProfilePhotoEmojis</a>#e2750328 hash:<a href="/type/long/">long</a> = <a href="/type/EmojiList/" class="current_page_link">EmojiList</a>;
<a href="/method/account.getDefaultGroupPhotoEmojis/">account.getDefaultGroupPhotoEmojis</a>#915860ae hash:<a href="/type/long/">long</a> = <a href="/type/EmojiList/" class="current_page_link">EmojiList</a>;
<a href="/method/account.getDefaultBackgroundEmojis/">account.getDefaultBackgroundEmojis</a>#a60ab9ce hash:<a href="/type/long/">long</a> = <a href="/type/EmojiList/" class="current_page_link">EmojiList</a>;
<a href="/method/account.getChannelRestrictedStatusEmojis/">account.getChannelRestrictedStatusEmojis</a>#35a9e0d5 hash:<a href="/type/long/">long</a> = <a href="/type/EmojiList/" class="current_page_link">EmojiList</a>;

<a href="/method/messages.searchCustomEmoji/">messages.searchCustomEmoji</a>#2c11c0d7 emoticon:<a href="/type/string/">string</a> hash:<a href="/type/long/">long</a> = <a href="/type/EmojiList/" class="current_page_link">EmojiList</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/emojiListNotModified/">emojiListNotModified</a></td><td>The list of <a href="/api/custom-emoji/">custom emojis</a> hasn't changed.</td></tr><tr><td><a href="/constructor/emojiList/">emojiList</a></td><td>Represents a list of <a href="/api/custom-emoji/">custom emojis</a>.</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/account.getDefaultProfilePhotoEmojis/">account.getDefaultProfilePhotoEmojis</a></td><td>Get a set of suggested <a href="/api/custom-emoji/">custom emoji stickers</a> that can be <a href="/api/files/#sticker-profile-pictures">used as profile picture</a></td></tr><tr><td><a href="/method/account.getDefaultGroupPhotoEmojis/">account.getDefaultGroupPhotoEmojis</a></td><td>Get a set of suggested <a href="/api/custom-emoji/">custom emoji stickers</a> that can be <a href="/api/files/#sticker-profile-pictures">used as group picture</a></td></tr><tr><td><a href="/method/account.getDefaultBackgroundEmojis/">account.getDefaultBackgroundEmojis</a></td><td>Get a set of suggested <a href="/api/custom-emoji/">custom emoji stickers</a> that can be used in an <a href="/api/colors/">accent color pattern</a>.</td></tr><tr><td><a href="/method/account.getChannelRestrictedStatusEmojis/">account.getChannelRestrictedStatusEmojis</a></td><td>Returns fetch the full list of <a href="/api/custom-emoji/">custom emoji IDs »</a> that cannot be used in <a href="/api/emoji-status/">channel emoji statuses »</a>.</td></tr><tr><td><a href="/method/messages.searchCustomEmoji/">messages.searchCustomEmoji</a></td><td>Look for <a href="/api/custom-emoji/">custom emojis</a> associated to a UTF8 emoji</td></tr></tbody></table>

### Related pages

#### [Custom emojis](/api/custom-emoji/)

Telegram allows including animated and static custom emojis inside of messages.
