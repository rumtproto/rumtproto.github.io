---
title: "emojiStatusCollectible"
original: "https://core.telegram.org/constructor/emojiStatusCollectible"
section: ref
description: "An owned or hosted collectible gift » as emoji status."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"emojiStatusCollectible","url":"/constructor/emojiStatusCollectible/"}]
layout: layout.njk
---

# emojiStatusCollectible

An owned or [hosted collectible gift »](/api/gifts/#hosted-collectible-gifts) as emoji status.

**Cannot** be passed to [account.updateEmojiStatus](/method/account.updateEmojiStatus/), must be converted to an [inputEmojiStatusCollectible](/constructor/inputEmojiStatusCollectible/) first before passing it to that method.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/emojiStatusCollectible/" class="current_page_link">emojiStatusCollectible</a>#7184603b flags:<a href="/type/%23/">#</a> collectible_id:<a href="/type/long/">long</a> document_id:<a href="/type/long/">long</a> title:<a href="/type/string/">string</a> slug:<a href="/type/string/">string</a> pattern_document_id:<a href="/type/long/">long</a> center_color:<a href="/type/int/">int</a> edge_color:<a href="/type/int/">int</a> pattern_color:<a href="/type/int/">int</a> text_color:<a href="/type/int/">int</a> until:flags.0?<a href="/type/int/">int</a> = <a href="/type/EmojiStatus/">EmojiStatus</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>collectible_id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>ID of the collectible (from <a href="/constructor/starGiftUnique/">starGiftUnique</a>.<code>id</code>).</td></tr><tr><td><strong>document_id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>ID of the <a href="/api/custom-emoji/">custom emoji</a> representing the status.</td></tr><tr><td><strong>title</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Name of the collectible.</td></tr><tr><td><strong>slug</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Unique identifier of the collectible that may be used to create a <a href="/api/links/#collectible-gift-link">collectible gift link »</a> for the current collectible, or to fetch further info about the collectible using <a href="/method/payments.getUniqueStarGift/">payments.getUniqueStarGift</a>.</td></tr><tr><td><strong>pattern_document_id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>The ID of a pattern to apply on the profile's backdrop, correlated to the <a href="/constructor/starGiftAttributePattern/">starGiftAttributePattern</a> from the gift in <code>slug</code>.</td></tr><tr><td><strong>center_color</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Color of the center of the profile backdrop in RGB24 format, from the gift's <a href="/constructor/starGiftAttributeBackdrop/">starGiftAttributeBackdrop</a>.</td></tr><tr><td><strong>edge_color</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Color of the edges of the profile backdrop in RGB24 format, from the gift's <a href="/constructor/starGiftAttributeBackdrop/">starGiftAttributeBackdrop</a>.</td></tr><tr><td><strong>pattern_color</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Color of the <code>pattern_document_id</code> applied on the profile backdrop in RGB24 format, from the gift's <a href="/constructor/starGiftAttributeBackdrop/">starGiftAttributeBackdrop</a>.</td></tr><tr><td><strong>text_color</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Color of text on the profile backdrop in RGB24 format, from the gift's <a href="/constructor/starGiftAttributeBackdrop/">starGiftAttributeBackdrop</a>.</td></tr><tr><td><strong>until</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/int/">int</a></td><td>If set, the emoji status will be active until the specified unixtime.</td></tr></tbody></table>

### Type

[EmojiStatus](/type/EmojiStatus/)

### Related pages

#### [starGiftUnique](/constructor/starGiftUnique/)

Represents a [collectible star gift, see here »](/api/gifts/#collectible-gifts) for more info.

The sticker that represents the gift is contained in a [starGiftAttributeModel](/constructor/starGiftAttributeModel/) object in `attributes`.

#### [Custom emojis](/api/custom-emoji/)

Telegram allows including animated and static custom emojis inside of messages.

#### [Deep links](/api/links/)

Telegram clients must handle special tg:// and t.me deep links encountered in messages, link entities and in other apps by registering OS handlers.

#### [payments.getUniqueStarGift](/method/payments.getUniqueStarGift/)

Obtain info about a [collectible gift »](/api/gifts/#collectible-gifts) using a slug obtained from a [collectible gift link »](/api/links/#collectible-gift-link).

#### [starGiftAttributePattern](/constructor/starGiftAttributePattern/)

A [sticker](/api/stickers/) applied on the backdrop of a [collectible gift »](/api/gifts/) using a repeating pattern.

#### [starGiftAttributeBackdrop](/constructor/starGiftAttributeBackdrop/)

The backdrop of a [collectible gift »](/api/gifts/#collectible-gifts).

#### [Telegram Gifts](/api/gifts/)

Users can send Gifts to their friends. The recipients of gifts can display them on their profile pages or turn them into Telegram Stars ». Telegram Stars can be used for many things, including supporting creators and buying services in mini apps.

#### [account.updateEmojiStatus](/method/account.updateEmojiStatus/)

Set an [emoji status](/api/emoji-status/)

#### [inputEmojiStatusCollectible](/constructor/inputEmojiStatusCollectible/)

An owned or [hosted collectible gift »](/api/gifts/#hosted-collectible-gifts) as emoji status: can only be used in [account.updateEmojiStatus](/method/account.updateEmojiStatus/), is never returned by the API.

Note that once set, the status will be returned to users as a [emojiStatusCollectible](/constructor/emojiStatusCollectible/) constructor, instead (which **cannot** be passed to [account.updateEmojiStatus](/method/account.updateEmojiStatus/), and must be converted to an [inputEmojiStatusCollectible](/constructor/inputEmojiStatusCollectible/) first).
