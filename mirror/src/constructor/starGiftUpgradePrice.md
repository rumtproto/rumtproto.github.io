---
title: "starGiftUpgradePrice"
original: "https://core.telegram.org/constructor/starGiftUpgradePrice"
section: ref
description: "Indicates the price for a gift upgrade » starting from a specific point in time."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"starGiftUpgradePrice","url":"/constructor/starGiftUpgradePrice/"}]
layout: layout.njk
---

# starGiftUpgradePrice

Indicates the price for a [gift upgrade »](/api/gifts/#collectible-gifts) starting from a specific point in time.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/starGiftUpgradePrice/" class="current_page_link">starGiftUpgradePrice</a>#99ea331d date:<a href="/type/int/">int</a> upgrade_stars:<a href="/type/long/">long</a> = <a href="/type/StarGiftUpgradePrice/">StarGiftUpgradePrice</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>date</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>UNIX timestamp indicating when the price will be in effect.</td></tr><tr><td><strong>upgrade_stars</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Upgrade price.</td></tr></tbody></table>

### Type

[StarGiftUpgradePrice](/type/StarGiftUpgradePrice/)

### Related pages

#### [Telegram Gifts](/api/gifts/)

Users can send Gifts to their friends. The recipients of gifts can display them on their profile pages or turn them into Telegram Stars ». Telegram Stars can be used for many things, including supporting creators and buying services in mini apps.
