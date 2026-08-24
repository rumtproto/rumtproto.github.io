---
title: "chatThemeUniqueGift"
original: "https://core.telegram.org/constructor/chatThemeUniqueGift"
section: ref
description: "A chat theme based on a collectible gift »."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"chatThemeUniqueGift","url":"/constructor/chatThemeUniqueGift/"}]
layout: layout.njk
---

# chatThemeUniqueGift

A chat theme based on a [collectible gift »](/api/gifts/#collectible-gifts).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/chatThemeUniqueGift/" class="current_page_link">chatThemeUniqueGift</a>#3458f9c8 gift:<a href="/type/StarGift/">StarGift</a> theme_settings:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/ThemeSettings/">ThemeSettings</a>&gt; = <a href="/type/ChatTheme/">ChatTheme</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>gift</strong></td><td style="text-align: center;"><a href="/type/StarGift/">StarGift</a></td><td>The owned or <a href="/api/gifts/#hosted-collectible-gifts">hosted collectible gift »</a> on which this theme is based, as a <a href="/constructor/starGiftUnique/">starGiftUnique</a> constructor.</td></tr><tr><td><strong>theme_settings</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/ThemeSettings/">ThemeSettings</a>&gt;</td><td>Theme settings.</td></tr></tbody></table>

### Type

[ChatTheme](/type/ChatTheme/)

### Related pages

#### [Telegram Gifts](/api/gifts/)

Users can send Gifts to their friends. The recipients of gifts can display them on their profile pages or turn them into Telegram Stars ». Telegram Stars can be used for many things, including supporting creators and buying services in mini apps.

#### [starGiftUnique](/constructor/starGiftUnique/)

Represents a [collectible star gift, see here »](/api/gifts/#collectible-gifts) for more info.

The sticker that represents the gift is contained in a [starGiftAttributeModel](/constructor/starGiftAttributeModel/) object in `attributes`.
