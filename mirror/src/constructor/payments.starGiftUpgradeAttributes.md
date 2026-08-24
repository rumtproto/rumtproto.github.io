---
title: "payments.starGiftUpgradeAttributes"
original: "https://core.telegram.org/constructor/payments.starGiftUpgradeAttributes"
section: ref
description: "List of just the collectible attributes that may appear for a gift type once it's upgraded to a collectible gift »."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"payments.starGiftUpgradeAttributes","url":"/constructor/payments.starGiftUpgradeAttributes/"}]
layout: layout.njk
---

# payments.starGiftUpgradeAttributes

List of just the collectible attributes that may appear for a gift type once it's upgraded to a [collectible gift »](/api/gifts/#collectible-gifts).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/payments.starGiftUpgradeAttributes/" class="current_page_link">payments.starGiftUpgradeAttributes</a>#46c6e36f attributes:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/StarGiftAttribute/">StarGiftAttribute</a>&gt; = <a href="/type/payments.StarGiftUpgradeAttributes/">payments.StarGiftUpgradeAttributes</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>attributes</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/StarGiftAttribute/">StarGiftAttribute</a>&gt;</td><td>Full list of possible attributes that may be assigned when gifts of the specified type are turned into <a href="/api/gifts/#collectible-gifts">collectible gifts »</a>, including craft-only models marked with <a href="/constructor/starGiftAttributeModel/">starGiftAttributeModel</a>.<code>crafted</code>.</td></tr></tbody></table>

### Type

[payments.StarGiftUpgradeAttributes](/type/payments.StarGiftUpgradeAttributes/)

### Related pages

#### [Telegram Gifts](/api/gifts/)

Users can send Gifts to their friends. The recipients of gifts can display them on their profile pages or turn them into Telegram Stars ». Telegram Stars can be used for many things, including supporting creators and buying services in mini apps.

#### [starGiftAttributeModel](/constructor/starGiftAttributeModel/)

The model of a [collectible gift »](/api/gifts/#collectible-gifts).
