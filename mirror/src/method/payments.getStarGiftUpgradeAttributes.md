---
title: "payments.getStarGiftUpgradeAttributes"
original: "https://core.telegram.org/method/payments.getStarGiftUpgradeAttributes"
section: ref
description: "Obtains the full list of just the collectible attributes that may appear for a gift type once it's upgraded to a collectible gift »."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"payments.getStarGiftUpgradeAttributes","url":"/method/payments.getStarGiftUpgradeAttributes/"}]
layout: layout.njk
---

# payments.getStarGiftUpgradeAttributes

Obtains the **full** list of just the collectible attributes that may appear for a gift type once it's upgraded to a [collectible gift »](/api/gifts/#collectible-gifts).

The result may also include [starGiftAttributeModel](/constructor/starGiftAttributeModel/) constructors with the `crafted` flag set: these models are reserved for [crafting »](/api/gifts/#crafting-collectible-gifts) and should be filtered out from regular upgrade previews (and vice versa).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/payments.starGiftUpgradeAttributes/">payments.starGiftUpgradeAttributes</a>#46c6e36f attributes:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/StarGiftAttribute/">StarGiftAttribute</a>&gt; = <a href="/type/payments.StarGiftUpgradeAttributes/">payments.StarGiftUpgradeAttributes</a>;
---functions---
<a href="/method/payments.getStarGiftUpgradeAttributes/" class="current_page_link">payments.getStarGiftUpgradeAttributes</a>#6d038b58 gift_id:<a href="/type/long/">long</a> = <a href="/type/payments.StarGiftUpgradeAttributes/">payments.StarGiftUpgradeAttributes</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>gift_id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Non-collectible base gift ID, from <a href="/constructor/starGift/">starGift</a>.<code>id</code></td></tr></tbody></table>

### Result

[payments.StarGiftUpgradeAttributes](/type/payments.StarGiftUpgradeAttributes/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>STARGIFT_INVALID</td><td>The passed gift is invalid.</td></tr></tbody></table>

### Related pages

#### [starGift](/constructor/starGift/)

Represents a [star gift, see here »](/api/gifts/) for more info.

#### [Telegram Gifts](/api/gifts/)

Users can send Gifts to their friends. The recipients of gifts can display them on their profile pages or turn them into Telegram Stars ». Telegram Stars can be used for many things, including supporting creators and buying services in mini apps.

#### [starGiftAttributeModel](/constructor/starGiftAttributeModel/)

The model of a [collectible gift »](/api/gifts/#collectible-gifts).
