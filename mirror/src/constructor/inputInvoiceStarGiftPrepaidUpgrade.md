---
title: "inputInvoiceStarGiftPrepaidUpgrade"
original: "https://core.telegram.org/constructor/inputInvoiceStarGiftPrepaidUpgrade"
section: ref
description: "Separately prepay for the upgrade of a gift »."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"inputInvoiceStarGiftPrepaidUpgrade","url":"/constructor/inputInvoiceStarGiftPrepaidUpgrade/"}]
layout: layout.njk
---

# inputInvoiceStarGiftPrepaidUpgrade

[Separately prepay for the upgrade of a gift »](/api/gifts/#prepaying-for-someone-else-s-upgrade).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/inputInvoiceStarGiftPrepaidUpgrade/" class="current_page_link">inputInvoiceStarGiftPrepaidUpgrade</a>#9a0b48b8 peer:<a href="/type/InputPeer/">InputPeer</a> hash:<a href="/type/string/">string</a> = <a href="/type/InputInvoice/">InputInvoice</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer/">InputPeer</a></td><td>The peer that owns the gift.</td></tr><tr><td><strong>hash</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>The upgrade hash from <a href="/constructor/messageActionStarGift/">messageActionStarGift</a>.<code>prepaid_upgrade_hash</code> or <a href="/constructor/savedStarGift/">savedStarGift</a>.<code>prepaid_upgrade_hash</code>.</td></tr></tbody></table>

### Type

[InputInvoice](/type/InputInvoice/)

### Related pages

#### [messageActionStarGift](/constructor/messageActionStarGift/)

You received a [gift, see here »](/api/gifts/) for more info.

#### [savedStarGift](/constructor/savedStarGift/)

Represents a [gift](/api/gifts/) owned by a peer.

#### [Telegram Gifts](/api/gifts/)

Users can send Gifts to their friends. The recipients of gifts can display them on their profile pages or turn them into Telegram Stars ». Telegram Stars can be used for many things, including supporting creators and buying services in mini apps.
