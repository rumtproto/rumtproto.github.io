---
title: "EmojiGroup"
original: "https://core.telegram.org/type/EmojiGroup"
section: ref
description: "Represents an emoji category."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"EmojiGroup","url":"/type/EmojiGroup/"}]
layout: layout.njk
---

# EmojiGroup

Represents an [emoji category](/api/emoji-categories/).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/emojiGroup/">emojiGroup</a>#7a9abda9 title:<a href="/type/string/">string</a> icon_emoji_id:<a href="/type/long/">long</a> emoticons:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/string/">string</a>&gt; = <a href="/type/EmojiGroup/" class="current_page_link">EmojiGroup</a>;
<a href="/constructor/emojiGroupGreeting/">emojiGroupGreeting</a>#80d26cc7 title:<a href="/type/string/">string</a> icon_emoji_id:<a href="/type/long/">long</a> emoticons:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/string/">string</a>&gt; = <a href="/type/EmojiGroup/" class="current_page_link">EmojiGroup</a>;
<a href="/constructor/emojiGroupPremium/">emojiGroupPremium</a>#93bcf34 title:<a href="/type/string/">string</a> icon_emoji_id:<a href="/type/long/">long</a> = <a href="/type/EmojiGroup/" class="current_page_link">EmojiGroup</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/emojiGroup/">emojiGroup</a></td><td>Represents an <a href="/api/emoji-categories/">emoji category</a>.</td></tr><tr><td><a href="/constructor/emojiGroupGreeting/">emojiGroupGreeting</a></td><td>Represents an <a href="/api/emoji-categories/">emoji category</a>, that should be moved to the top of the list when choosing a sticker for a <a href="/api/business/#business-introduction">business introduction</a></td></tr><tr><td><a href="/constructor/emojiGroupPremium/">emojiGroupPremium</a></td><td>An <a href="/api/emoji-categories/">emoji category</a>, used to select all <a href="/api/premium/">Premium</a>-only stickers (i.e. those with a <a href="/api/stickers/#premium-animated-sticker-effects">Premium effect »</a>)/<a href="/api/premium/">Premium</a>-only <a href="/api/custom-emoji/">custom emojis</a> (i.e. those where the <a href="/constructor/documentAttributeCustomEmoji/">documentAttributeCustomEmoji</a>.<code>free</code> flag is <strong>not</strong> set)</td></tr></tbody></table>

### Related pages

#### [Emoji categories](/api/emoji-categories/)

Sticker, custom emoji and GIF selection UIs should offer a list of categories to quickly filter results by a (list of) emojis, or by some other criteria.
