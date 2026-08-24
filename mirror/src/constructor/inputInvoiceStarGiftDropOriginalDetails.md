---
title: "inputInvoiceStarGiftDropOriginalDetails"
original: "https://core.telegram.org/constructor/inputInvoiceStarGiftDropOriginalDetails"
section: ref
description: "Used to pay for for the removal of the starGiftAttributeOriginalDetails attribute from a collectible gift, see here » for the full flow."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"inputInvoiceStarGiftDropOriginalDetails","url":"/constructor/inputInvoiceStarGiftDropOriginalDetails/"}]
layout: layout.njk
---

# inputInvoiceStarGiftDropOriginalDetails

Used to pay for for the removal of the [starGiftAttributeOriginalDetails](/constructor/starGiftAttributeOriginalDetails/) attribute from a collectible gift, see [here »](/api/gifts/#dropping-the-original-details-of-an-upgraded-gift) for the full flow.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/inputInvoiceStarGiftDropOriginalDetails/" class="current_page_link">inputInvoiceStarGiftDropOriginalDetails</a>#923d8d1 stargift:<a href="/type/InputSavedStarGift/">InputSavedStarGift</a> = <a href="/type/InputInvoice/">InputInvoice</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>stargift</strong></td><td style="text-align: center;"><a href="/type/InputSavedStarGift/">InputSavedStarGift</a></td><td>The collectible gift whose <a href="/constructor/starGiftAttributeOriginalDetails/">starGiftAttributeOriginalDetails</a> attribute should be removed.</td></tr></tbody></table>

### Type

[InputInvoice](/type/InputInvoice/)

### Related pages

#### [starGiftAttributeOriginalDetails](/constructor/starGiftAttributeOriginalDetails/)

Info about the sender, receiver and message attached to the original [gift »](/api/gifts/), before it was upgraded to a [collectible gift »](/api/gifts/#collectible-gifts).

#### [Telegram Gifts](/api/gifts/)

Users can send Gifts to their friends. The recipients of gifts can display them on their profile pages or turn them into Telegram Stars ». Telegram Stars can be used for many things, including supporting creators and buying services in mini apps.
