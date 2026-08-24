---
title: "Payments.StarGiftUpgradeAttributes"
original: "https://core.telegram.org/type/payments.StarGiftUpgradeAttributes"
section: ref
description: "List of just the collectible attributes that may appear for a gift type once it's upgraded to a collectible gift »."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"Payments.StarGiftUpgradeAttributes","url":"/type/payments.StarGiftUpgradeAttributes/"}]
layout: layout.njk
---

# Payments.StarGiftUpgradeAttributes

List of just the collectible attributes that may appear for a gift type once it's upgraded to a [collectible gift »](/api/gifts/#collectible-gifts).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/payments.starGiftUpgradeAttributes/">payments.starGiftUpgradeAttributes</a>#46c6e36f attributes:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/StarGiftAttribute/">StarGiftAttribute</a>&gt; = <a href="/type/payments.StarGiftUpgradeAttributes/" class="current_page_link">payments.StarGiftUpgradeAttributes</a>;

---functions---

<a href="/method/payments.getStarGiftUpgradeAttributes/">payments.getStarGiftUpgradeAttributes</a>#6d038b58 gift_id:<a href="/type/long/">long</a> = <a href="/type/payments.StarGiftUpgradeAttributes/" class="current_page_link">payments.StarGiftUpgradeAttributes</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/payments.starGiftUpgradeAttributes/">payments.starGiftUpgradeAttributes</a></td><td>List of just the collectible attributes that may appear for a gift type once it's upgraded to a <a href="/api/gifts/#collectible-gifts">collectible gift »</a>.</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/payments.getStarGiftUpgradeAttributes/">payments.getStarGiftUpgradeAttributes</a></td><td>Obtains the <strong>full</strong> list of just the collectible attributes that may appear for a gift type once it's upgraded to a <a href="/api/gifts/#collectible-gifts">collectible gift »</a>.<br><br>The result may also include <a href="/constructor/starGiftAttributeModel/">starGiftAttributeModel</a> constructors with the <code>crafted</code> flag set: these models are reserved for <a href="/api/gifts/#crafting-collectible-gifts">crafting »</a> and should be filtered out from regular upgrade previews (and vice versa).</td></tr></tbody></table>

### Related pages

#### [Telegram Gifts](/api/gifts/)

Users can send Gifts to their friends. The recipients of gifts can display them on their profile pages or turn them into Telegram Stars ». Telegram Stars can be used for many things, including supporting creators and buying services in mini apps.
