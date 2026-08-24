---
title: "inputInvoiceStarGiftUpgrade"
original: "https://core.telegram.org/constructor/inputInvoiceStarGiftUpgrade"
section: ref
description: "Used to pay to upgrade a Gift to a collectible gift, see the collectible gifts » documentation for more info on the full flow."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"inputInvoiceStarGiftUpgrade","url":"/constructor/inputInvoiceStarGiftUpgrade/"}]
layout: layout.njk
---

# inputInvoiceStarGiftUpgrade

Used to [pay to upgrade a Gift to a collectible gift](/api/gifts/#upgrade-a-gift-to-a-collectible-gift), see the [collectible gifts »](/api/gifts/#collectible-gifts) documentation for more info on the full flow.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/inputInvoiceStarGiftUpgrade/" class="current_page_link">inputInvoiceStarGiftUpgrade</a>#4d818d5d flags:<a href="/type/%23/">#</a> keep_original_details:flags.0?true stargift:<a href="/type/InputSavedStarGift/">InputSavedStarGift</a> = <a href="/type/InputInvoice/">InputInvoice</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>keep_original_details</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>Set this flag to keep the original gift text, sender and receiver in the upgraded gift as a <a href="/constructor/starGiftAttributeOriginalDetails/">starGiftAttributeOriginalDetails</a> attribute.</td></tr><tr><td><strong>stargift</strong></td><td style="text-align: center;"><a href="/type/InputSavedStarGift/">InputSavedStarGift</a></td><td>The identifier of the received gift to upgrade.</td></tr></tbody></table>

### Type

[InputInvoice](/type/InputInvoice/)

### Related pages

#### [starGiftAttributeOriginalDetails](/constructor/starGiftAttributeOriginalDetails/)

Info about the sender, receiver and message attached to the original [gift »](/api/gifts/), before it was upgraded to a [collectible gift »](/api/gifts/#collectible-gifts).

#### [Telegram Gifts](/api/gifts/)

Users can send Gifts to their friends. The recipients of gifts can display them on their profile pages or turn them into Telegram Stars ». Telegram Stars can be used for many things, including supporting creators and buying services in mini apps.
