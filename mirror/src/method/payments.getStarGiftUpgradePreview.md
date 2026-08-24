---
title: "payments.getStarGiftUpgradePreview"
original: "https://core.telegram.org/method/payments.getStarGiftUpgradePreview"
section: ref
description: "Obtain a preview of the possible attributes (chosen randomly) a gift » can receive after upgrading it to a collectible gift », see here » for more info."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"payments.getStarGiftUpgradePreview","url":"/method/payments.getStarGiftUpgradePreview/"}]
layout: layout.njk
---

# payments.getStarGiftUpgradePreview

Obtain a preview of the possible attributes (chosen randomly) a [gift »](/api/gifts/) can receive after upgrading it to a [collectible gift »](/api/gifts/#collectible-gifts), see [here »](/api/gifts/#collectible-gifts) for more info.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/payments.starGiftUpgradePreview/">payments.starGiftUpgradePreview</a>#3de1dfed sample_attributes:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/StarGiftAttribute/">StarGiftAttribute</a>&gt; prices:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/StarGiftUpgradePrice/">StarGiftUpgradePrice</a>&gt; next_prices:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/StarGiftUpgradePrice/">StarGiftUpgradePrice</a>&gt; = <a href="/type/payments.StarGiftUpgradePreview/">payments.StarGiftUpgradePreview</a>;
---functions---
<a href="/method/payments.getStarGiftUpgradePreview/" class="current_page_link">payments.getStarGiftUpgradePreview</a>#9c9abcb1 gift_id:<a href="/type/long/">long</a> = <a href="/type/payments.StarGiftUpgradePreview/">payments.StarGiftUpgradePreview</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>gift_id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>The gift to upgrade.</td></tr></tbody></table>

### Result

[payments.StarGiftUpgradePreview](/type/payments.StarGiftUpgradePreview/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>STARGIFT_INVALID</td><td>The passed gift is invalid.</td></tr><tr><td>400</td><td>STARGIFT_UPGRADE_UNAVAILABLE</td><td>A received gift can only be upgraded to a collectible gift if the <a href="/constructor/messageActionStarGift/">messageActionStarGift</a>/<a href="/constructor/savedStarGift/">savedStarGift</a>.<code>can_upgrade</code> flag is set.</td></tr></tbody></table>

### Related pages

#### [Telegram Gifts](/api/gifts/)

Users can send Gifts to their friends. The recipients of gifts can display them on their profile pages or turn them into Telegram Stars ». Telegram Stars can be used for many things, including supporting creators and buying services in mini apps.

#### [messageActionStarGift](/constructor/messageActionStarGift/)

You received a [gift, see here »](/api/gifts/) for more info.

#### [savedStarGift](/constructor/savedStarGift/)

Represents a [gift](/api/gifts/) owned by a peer.
