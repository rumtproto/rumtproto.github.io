---
title: "inputInvoicePremiumGiftStars"
original: "https://core.telegram.org/constructor/inputInvoicePremiumGiftStars"
section: ref
description: "Used to gift a Telegram Premium subscription to another user, paying with Telegram Stars."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"inputInvoicePremiumGiftStars","url":"/constructor/inputInvoicePremiumGiftStars/"}]
layout: layout.njk
---

# inputInvoicePremiumGiftStars

Used to gift a [Telegram Premium](/api/premium/) subscription to another user, paying with [Telegram Stars](/api/stars/).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/inputInvoicePremiumGiftStars/" class="current_page_link">inputInvoicePremiumGiftStars</a>#dabab2ef flags:<a href="/type/%23/">#</a> user_id:<a href="/type/InputUser/">InputUser</a> months:<a href="/type/int/">int</a> message:flags.0?<a href="/type/TextWithEntities/">TextWithEntities</a> = <a href="/type/InputInvoice/">InputInvoice</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>user_id</strong></td><td style="text-align: center;"><a href="/type/InputUser/">InputUser</a></td><td>Who will receive the gifted subscription.</td></tr><tr><td><strong>months</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Duration of the subscription in months, must be one of the options with <code>currency == "XTR"</code> returned by <a href="/method/payments.getPremiumGiftCodeOptions/">payments.getPremiumGiftCodeOptions</a>.</td></tr><tr><td><strong>message</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/TextWithEntities/">TextWithEntities</a></td><td>Message attached with the gift.</td></tr></tbody></table>

### Type

[InputInvoice](/type/InputInvoice/)

### Related pages

#### [payments.getPremiumGiftCodeOptions](/method/payments.getPremiumGiftCodeOptions/)

Obtain a list of Telegram Premium [giveaway/gift code »](/api/giveaways/) options.

#### [Telegram Premium](/api/premium/)

Telegram Premium is an optional subscription service that unlocks additional exclusive client-side and API-side features, while helping support the development of the app.

#### [Telegram Stars](/api/stars/)

Telegram Stars are virtual items that allow users to purchase digital goods and services from bots and mini apps inside the Telegram ecosystem, send gifts to content creators on the Telegram platform, and more.
