---
title: "inputInvoicePremiumGiftCode"
original: "https://core.telegram.org/constructor/inputInvoicePremiumGiftCode"
section: ref
description: "Used if the user wishes to start a channel/supergroup giveaway or send some giftcodes to members of a channel/supergroup, in exchange for boosts."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"inputInvoicePremiumGiftCode","url":"/constructor/inputInvoicePremiumGiftCode/"}]
layout: layout.njk
---

# inputInvoicePremiumGiftCode

Used if the user wishes to start a channel/supergroup [giveaway](/api/giveaways/) or send some [giftcodes](/api/giveaways/) to members of a channel/supergroup, in exchange for [boosts](/api/boost/).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/inputInvoicePremiumGiftCode/" class="current_page_link">inputInvoicePremiumGiftCode</a>#98986c0d purpose:<a href="/type/InputStorePaymentPurpose/">InputStorePaymentPurpose</a> option:<a href="/type/PremiumGiftCodeOption/">PremiumGiftCodeOption</a> = <a href="/type/InputInvoice/">InputInvoice</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>purpose</strong></td><td style="text-align: center;"><a href="/type/InputStorePaymentPurpose/">InputStorePaymentPurpose</a></td><td>Should be populated with <a href="/constructor/inputStorePaymentPremiumGiveaway/">inputStorePaymentPremiumGiveaway</a> for <a href="/api/giveaways/">giveaways</a> and <a href="/constructor/inputStorePaymentPremiumGiftCode/">inputStorePaymentPremiumGiftCode</a> for <a href="/api/giveaways/">gifts</a>.</td></tr><tr><td><strong>option</strong></td><td style="text-align: center;"><a href="/type/PremiumGiftCodeOption/">PremiumGiftCodeOption</a></td><td>Should be populated with one of the giveaway options returned by <a href="/method/payments.getPremiumGiftCodeOptions/">payments.getPremiumGiftCodeOptions</a>, see the <a href="/api/giveaways/">giveaways »</a> documentation for more info.</td></tr></tbody></table>

### Type

[InputInvoice](/type/InputInvoice/)

### Related pages

#### [inputStorePaymentPremiumGiveaway](/constructor/inputStorePaymentPremiumGiveaway/)

Used to pay for a [giveaway, see here »](/api/giveaways/) for more info.

#### [Giveaways and gifts](/api/giveaways/)

Telegram channel and supergroup administrators may launch giveaways to randomly distribute Telegram Premium subscriptions and other gifts among their followers, in exchange for boosts.

#### [inputStorePaymentPremiumGiftCode](/constructor/inputStorePaymentPremiumGiftCode/)

Used to gift [Telegram Premium](/api/premium/) subscriptions only to some specific subscribers of a channel/supergroup or to some of our contacts, see [here »](/api/giveaways/) for more info on giveaways and gifts.

#### [payments.getPremiumGiftCodeOptions](/method/payments.getPremiumGiftCodeOptions/)

Obtain a list of Telegram Premium [giveaway/gift code »](/api/giveaways/) options.

#### [Channel and supergroup boosts](/api/boost/)

Telegram Premium users can grant their favorite channels and supergroups additional features like the ability to post stories by giving them boosts.
