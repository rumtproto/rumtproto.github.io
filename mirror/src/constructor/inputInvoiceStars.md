---
title: "inputInvoiceStars"
original: "https://core.telegram.org/constructor/inputInvoiceStars"
section: ref
description: "Used to top up the Telegram Stars balance of the current account or someone else's account, or to start a Telegram Star giveaway »."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"inputInvoiceStars","url":"/constructor/inputInvoiceStars/"}]
layout: layout.njk
---

# inputInvoiceStars

Used to top up the [Telegram Stars](/api/stars/) balance of the current account or someone else's account, or to start a [Telegram Star giveaway »](/api/giveaways/#star-giveaways).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/inputInvoiceStars/" class="current_page_link">inputInvoiceStars</a>#65f00ce3 purpose:<a href="/type/InputStorePaymentPurpose/">InputStorePaymentPurpose</a> = <a href="/type/InputInvoice/">InputInvoice</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>purpose</strong></td><td style="text-align: center;"><a href="/type/InputStorePaymentPurpose/">InputStorePaymentPurpose</a></td><td>An <a href="/constructor/inputStorePaymentStarsGiveaway/">inputStorePaymentStarsGiveaway</a>, <a href="/constructor/inputStorePaymentStarsTopup/">inputStorePaymentStarsTopup</a> or <a href="/constructor/inputStorePaymentStarsGift/">inputStorePaymentStarsGift</a>.</td></tr></tbody></table>

### Type

[InputInvoice](/type/InputInvoice/)

### Related pages

#### [inputStorePaymentStarsGiveaway](/constructor/inputStorePaymentStarsGiveaway/)

Used to pay for a [star giveaway, see here »](/api/giveaways/#star-giveaways) for more info.

#### [inputStorePaymentStarsTopup](/constructor/inputStorePaymentStarsTopup/)

Used to top up the [Telegram Stars balance](/api/stars/) of the current account.

#### [inputStorePaymentStarsGift](/constructor/inputStorePaymentStarsGift/)

Used to gift [Telegram Stars](/api/stars/) to a friend.

#### [Telegram Stars](/api/stars/)

Telegram Stars are virtual items that allow users to purchase digital goods and services from bots and mini apps inside the Telegram ecosystem, send gifts to content creators on the Telegram platform, and more.

#### [Giveaways and gifts](/api/giveaways/)

Telegram channel and supergroup administrators may launch giveaways to randomly distribute Telegram Premium subscriptions and other gifts among their followers, in exchange for boosts.
