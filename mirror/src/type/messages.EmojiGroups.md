---
title: "messages.EmojiGroups"
original: "https://core.telegram.org/type/messages.EmojiGroups"
section: ref
description: "Represents a list of emoji categories."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"messages.EmojiGroups","url":"/type/messages.EmojiGroups/"}]
layout: layout.njk
---

# messages.EmojiGroups

Represents a list of [emoji categories](/api/emoji-categories/).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messages.emojiGroupsNotModified/">messages.emojiGroupsNotModified</a>#6fb4ad87 = <a href="/type/messages.EmojiGroups/" class="current_page_link">messages.EmojiGroups</a>;
<a href="/constructor/messages.emojiGroups/">messages.emojiGroups</a>#881fb94b hash:<a href="/type/int/">int</a> groups:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/EmojiGroup/">EmojiGroup</a>&gt; = <a href="/type/messages.EmojiGroups/" class="current_page_link">messages.EmojiGroups</a>;

---functions---

<a href="/method/messages.getEmojiGroups/">messages.getEmojiGroups</a>#7488ce5b hash:<a href="/type/int/">int</a> = <a href="/type/messages.EmojiGroups/" class="current_page_link">messages.EmojiGroups</a>;
<a href="/method/messages.getEmojiStatusGroups/">messages.getEmojiStatusGroups</a>#2ecd56cd hash:<a href="/type/int/">int</a> = <a href="/type/messages.EmojiGroups/" class="current_page_link">messages.EmojiGroups</a>;
<a href="/method/messages.getEmojiProfilePhotoGroups/">messages.getEmojiProfilePhotoGroups</a>#21a548f3 hash:<a href="/type/int/">int</a> = <a href="/type/messages.EmojiGroups/" class="current_page_link">messages.EmojiGroups</a>;
<a href="/method/messages.getEmojiStickerGroups/">messages.getEmojiStickerGroups</a>#1dd840f5 hash:<a href="/type/int/">int</a> = <a href="/type/messages.EmojiGroups/" class="current_page_link">messages.EmojiGroups</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/messages.emojiGroupsNotModified/">messages.emojiGroupsNotModified</a></td><td>The list of <a href="/api/emoji-categories/">emoji categories</a> hasn't changed.</td></tr><tr><td><a href="/constructor/messages.emojiGroups/">messages.emojiGroups</a></td><td>Represents a list of <a href="/api/emoji-categories/">emoji categories</a>.</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/messages.getEmojiGroups/">messages.getEmojiGroups</a></td><td>Represents a list of <a href="/api/emoji-categories/">emoji categories</a>.</td></tr><tr><td><a href="/method/messages.getEmojiStatusGroups/">messages.getEmojiStatusGroups</a></td><td>Represents a list of <a href="/api/emoji-categories/">emoji categories</a>, to be used when selecting custom emojis to set as <a href="/api/">custom emoji status</a>.</td></tr><tr><td><a href="/method/messages.getEmojiProfilePhotoGroups/">messages.getEmojiProfilePhotoGroups</a></td><td>Represents a list of <a href="/api/emoji-categories/">emoji categories</a>, to be used when selecting custom emojis to set as <a href="/api/files/#sticker-profile-pictures">profile picture</a>.</td></tr><tr><td><a href="/method/messages.getEmojiStickerGroups/">messages.getEmojiStickerGroups</a></td><td>Represents a list of <a href="/api/emoji-categories/">emoji categories</a>, to be used when choosing a sticker.</td></tr></tbody></table>

### Related pages

#### [Emoji categories](/api/emoji-categories/)

Sticker, custom emoji and GIF selection UIs should offer a list of categories to quickly filter results by a (list of) emojis, or by some other criteria.
