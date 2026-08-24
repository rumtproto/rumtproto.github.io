---
title: "payments.starGiftUpgradePreview"
original: "https://core.telegram.org/constructor/payments.starGiftUpgradePreview"
section: ref
description: "A preview of the possible attributes (chosen randomly) a gift » can receive after upgrading it to a collectible gift », see here » for more info."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"payments.starGiftUpgradePreview","url":"/constructor/payments.starGiftUpgradePreview/"}]
layout: layout.njk
---

# payments.starGiftUpgradePreview

A preview of the possible attributes (chosen randomly) a [gift »](/api/gifts/) can receive after upgrading it to a [collectible gift »](/api/gifts/#collectible-gifts), see [here »](/api/gifts/#collectible-gifts) for more info.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/payments.starGiftUpgradePreview/" class="current_page_link">payments.starGiftUpgradePreview</a>#3de1dfed sample_attributes:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/StarGiftAttribute/">StarGiftAttribute</a>&gt; prices:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/StarGiftUpgradePrice/">StarGiftUpgradePrice</a>&gt; next_prices:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/StarGiftUpgradePrice/">StarGiftUpgradePrice</a>&gt; = <a href="/type/payments.StarGiftUpgradePreview/">payments.StarGiftUpgradePreview</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>sample_attributes</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/StarGiftAttribute/">StarGiftAttribute</a>&gt;</td><td>Possible gift attributes</td></tr><tr><td><strong>prices</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/StarGiftUpgradePrice/">StarGiftUpgradePrice</a>&gt;</td><td>Contains a similar list of upgrade prices and timestamps, not as granular as in <code>next_prices</code> (i.e. prices are approximately 1 month apart), to be used mainly to scale the price graph, and to show a more general future overview of the upgrade price.</td></tr><tr><td><strong>next_prices</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/StarGiftUpgradePrice/">StarGiftUpgradePrice</a>&gt;</td><td>Contains the current upgrade price and a list of future prices, each associated to a UNIX timestamp that indicates when the price comes in effect (the current price is valid only until the next one comes into effect, and so on for all prices in the list).</td></tr></tbody></table>

### Type

[payments.StarGiftUpgradePreview](/type/payments.StarGiftUpgradePreview/)

### Related pages

#### [Telegram Gifts](/api/gifts/)

Users can send Gifts to their friends. The recipients of gifts can display them on their profile pages or turn them into Telegram Stars ». Telegram Stars can be used for many things, including supporting creators and buying services in mini apps.
