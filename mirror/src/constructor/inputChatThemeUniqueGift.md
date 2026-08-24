---
title: "inputChatThemeUniqueGift"
original: "https://core.telegram.org/constructor/inputChatThemeUniqueGift"
section: ref
description: "Set a theme based on an owned or hosted collectible gift », returned by account.getUniqueGiftChatThemes."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"inputChatThemeUniqueGift","url":"/constructor/inputChatThemeUniqueGift/"}]
layout: layout.njk
---

# inputChatThemeUniqueGift

Set a theme based on an owned or [hosted collectible gift »](/api/gifts/#hosted-collectible-gifts), returned by [account.getUniqueGiftChatThemes](/method/account.getUniqueGiftChatThemes/).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/inputChatThemeUniqueGift/" class="current_page_link">inputChatThemeUniqueGift</a>#87e5dfe4 slug:<a href="/type/string/">string</a> = <a href="/type/InputChatTheme/">InputChatTheme</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>slug</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>The slug from <a href="/constructor/starGiftUnique/">starGiftUnique</a>.<code>slug</code>.</td></tr></tbody></table>

### Type

[InputChatTheme](/type/InputChatTheme/)

### Related pages

#### [starGiftUnique](/constructor/starGiftUnique/)

Represents a [collectible star gift, see here »](/api/gifts/#collectible-gifts) for more info.

The sticker that represents the gift is contained in a [starGiftAttributeModel](/constructor/starGiftAttributeModel/) object in `attributes`.

#### [Telegram Gifts](/api/gifts/)

Users can send Gifts to their friends. The recipients of gifts can display them on their profile pages or turn them into Telegram Stars ». Telegram Stars can be used for many things, including supporting creators and buying services in mini apps.

#### [account.getUniqueGiftChatThemes](/method/account.getUniqueGiftChatThemes/)

Obtain all [chat themes »](/api/themes/#chat-themes) associated to owned or [hosted collectible gifts »](/api/gifts/#hosted-collectible-gifts).
