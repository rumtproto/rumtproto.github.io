---
title: "inputEmojiStatusCollectible"
original: "https://core.telegram.org/constructor/inputEmojiStatusCollectible"
section: ref
description: "An owned or hosted collectible gift » as emoji status: can only be used in account.updateEmojiStatus, is never returned by the API."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"inputEmojiStatusCollectible","url":"/constructor/inputEmojiStatusCollectible/"}]
layout: layout.njk
---

# inputEmojiStatusCollectible

An owned or [hosted collectible gift »](/api/gifts/#hosted-collectible-gifts) as emoji status: can only be used in [account.updateEmojiStatus](/method/account.updateEmojiStatus/), is never returned by the API.

Note that once set, the status will be returned to users as a [emojiStatusCollectible](/constructor/emojiStatusCollectible/) constructor, instead (which **cannot** be passed to [account.updateEmojiStatus](/method/account.updateEmojiStatus/), and must be converted to an [inputEmojiStatusCollectible](/constructor/inputEmojiStatusCollectible/) first).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/inputEmojiStatusCollectible/" class="current_page_link">inputEmojiStatusCollectible</a>#7141dbf flags:<a href="/type/%23/">#</a> collectible_id:<a href="/type/long/">long</a> until:flags.0?<a href="/type/int/">int</a> = <a href="/type/EmojiStatus/">EmojiStatus</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>collectible_id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>ID of the collectible (from <a href="/constructor/starGiftUnique/">starGiftUnique</a>.<code>id</code>).</td></tr><tr><td><strong>until</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/int/">int</a></td><td>If set, the emoji status will be active until the specified unixtime.</td></tr></tbody></table>

### Type

[EmojiStatus](/type/EmojiStatus/)

### Related pages

#### [starGiftUnique](/constructor/starGiftUnique/)

Represents a [collectible star gift, see here »](/api/gifts/#collectible-gifts) for more info.

The sticker that represents the gift is contained in a [starGiftAttributeModel](/constructor/starGiftAttributeModel/) object in `attributes`.

#### [Telegram Gifts](/api/gifts/)

Users can send Gifts to their friends. The recipients of gifts can display them on their profile pages or turn them into Telegram Stars ». Telegram Stars can be used for many things, including supporting creators and buying services in mini apps.

#### [account.updateEmojiStatus](/method/account.updateEmojiStatus/)

Set an [emoji status](/api/emoji-status/)

#### [emojiStatusCollectible](/constructor/emojiStatusCollectible/)

An owned or [hosted collectible gift »](/api/gifts/#hosted-collectible-gifts) as emoji status.

**Cannot** be passed to [account.updateEmojiStatus](/method/account.updateEmojiStatus/), must be converted to an [inputEmojiStatusCollectible](/constructor/inputEmojiStatusCollectible/) first before passing it to that method.

#### [inputEmojiStatusCollectible](/constructor/inputEmojiStatusCollectible/)

An owned or [hosted collectible gift »](/api/gifts/#hosted-collectible-gifts) as emoji status: can only be used in [account.updateEmojiStatus](/method/account.updateEmojiStatus/), is never returned by the API.

Note that once set, the status will be returned to users as a [emojiStatusCollectible](/constructor/emojiStatusCollectible/) constructor, instead (which **cannot** be passed to [account.updateEmojiStatus](/method/account.updateEmojiStatus/), and must be converted to an [inputEmojiStatusCollectible](/constructor/inputEmojiStatusCollectible/) first).
