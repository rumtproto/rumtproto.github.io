---
title: "payments.StarGiftUpgradePreview"
original: "https://core.telegram.org/type/payments.StarGiftUpgradePreview"
section: ref
description: "A preview of the possible attributes (chosen randomly) a gift » can receive after upgrading it to a collectible gift », see here » for more info."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"payments.StarGiftUpgradePreview","url":"/type/payments.StarGiftUpgradePreview/"}]
layout: layout.njk
---

# payments.StarGiftUpgradePreview

A preview of the possible attributes (chosen randomly) a [gift »](/api/gifts/) can receive after upgrading it to a [collectible gift »](/api/gifts/#collectible-gifts), see [here »](/api/gifts/#collectible-gifts) for more info.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/payments.starGiftUpgradePreview/">payments.starGiftUpgradePreview</a>#3de1dfed sample_attributes:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/StarGiftAttribute/">StarGiftAttribute</a>&gt; prices:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/StarGiftUpgradePrice/">StarGiftUpgradePrice</a>&gt; next_prices:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/StarGiftUpgradePrice/">StarGiftUpgradePrice</a>&gt; = <a href="/type/payments.StarGiftUpgradePreview/" class="current_page_link">payments.StarGiftUpgradePreview</a>;

---functions---

<a href="/method/payments.getStarGiftUpgradePreview/">payments.getStarGiftUpgradePreview</a>#9c9abcb1 gift_id:<a href="/type/long/">long</a> = <a href="/type/payments.StarGiftUpgradePreview/" class="current_page_link">payments.StarGiftUpgradePreview</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/payments.starGiftUpgradePreview/">payments.starGiftUpgradePreview</a></td><td>A preview of the possible attributes (chosen randomly) a <a href="/api/gifts/">gift »</a> can receive after upgrading it to a <a href="/api/gifts/#collectible-gifts">collectible gift »</a>, see <a href="/api/gifts/#collectible-gifts">here »</a> for more info.</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/payments.getStarGiftUpgradePreview/">payments.getStarGiftUpgradePreview</a></td><td>Obtain a preview of the possible attributes (chosen randomly) a <a href="/api/gifts/">gift »</a> can receive after upgrading it to a <a href="/api/gifts/#collectible-gifts">collectible gift »</a>, see <a href="/api/gifts/#collectible-gifts">here »</a> for more info.</td></tr></tbody></table>

### Related pages

#### [Telegram Gifts](/api/gifts/)

Users can send Gifts to their friends. The recipients of gifts can display them on their profile pages or turn them into Telegram Stars ». Telegram Stars can be used for many things, including supporting creators and buying services in mini apps.
