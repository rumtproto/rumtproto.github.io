---
title: "emojiGroupPremium"
original: "https://core.telegram.org/constructor/emojiGroupPremium"
section: ref
description: "An emoji category, used to select all Premium\\-only stickers (i.e. those with a Premium effect »)/Premium\\-only custom emojis (i.e. those where the…"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"emojiGroupPremium","url":"/constructor/emojiGroupPremium/"}]
layout: layout.njk
---

# emojiGroupPremium

An [emoji category](/api/emoji-categories/), used to select all [Premium](/api/premium/)\-only stickers (i.e. those with a [Premium effect »](/api/stickers/#premium-animated-sticker-effects))/[Premium](/api/premium/)\-only [custom emojis](/api/custom-emoji/) (i.e. those where the [documentAttributeCustomEmoji](/constructor/documentAttributeCustomEmoji/).`free` flag is **not** set)

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/emojiGroupPremium/" class="current_page_link">emojiGroupPremium</a>#93bcf34 title:<a href="/type/string/">string</a> icon_emoji_id:<a href="/type/long/">long</a> = <a href="/type/EmojiGroup/">EmojiGroup</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>title</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Category name, i.e. "Animals", "Flags", "Faces" and so on...</td></tr><tr><td><strong>icon_emoji_id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>A single custom emoji used as preview for the category.</td></tr></tbody></table>

### Type

[EmojiGroup](/type/EmojiGroup/)

### Related pages

#### [Emoji categories](/api/emoji-categories/)

Sticker, custom emoji and GIF selection UIs should offer a list of categories to quickly filter results by a (list of) emojis, or by some other criteria.

#### [Telegram Premium](/api/premium/)

Telegram Premium is an optional subscription service that unlocks additional exclusive client-side and API-side features, while helping support the development of the app.

#### [Stickers and masks](/api/stickers/)

Telegram clients support displaying static and animated stickers.

#### [Custom emojis](/api/custom-emoji/)

Telegram allows including animated and static custom emojis inside of messages.

#### [documentAttributeCustomEmoji](/constructor/documentAttributeCustomEmoji/)

Info about a custom emoji
