---
title: "inputInvoiceStarGift"
original: "https://core.telegram.org/constructor/inputInvoiceStarGift"
section: ref
description: "Used to buy a Telegram Star Gift, see here » for more info."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"inputInvoiceStarGift","url":"/constructor/inputInvoiceStarGift/"}]
layout: layout.njk
---

# inputInvoiceStarGift

Used to buy a [Telegram Star Gift, see here »](/api/gifts/) for more info.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/inputInvoiceStarGift/" class="current_page_link">inputInvoiceStarGift</a>#e8625e92 flags:<a href="/type/%23/">#</a> hide_name:flags.0?true include_upgrade:flags.2?true peer:<a href="/type/InputPeer/">InputPeer</a> gift_id:<a href="/type/long/">long</a> message:flags.1?<a href="/type/TextWithEntities/">TextWithEntities</a> = <a href="/type/InputInvoice/">InputInvoice</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>hide_name</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>If set, your name will be hidden if the destination user decides to display the gift on their profile (they will still see that you sent the gift)</td></tr><tr><td><strong>include_upgrade</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/constructor/true/">true</a></td><td>Also pay for an eventual upgrade of the gift to a <a href="/api/gifts/#collectible-gifts">collectible gift »</a>.</td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer/">InputPeer</a></td><td>Receiver of the gift.</td></tr><tr><td><strong>gift_id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Identifier of the gift, from <a href="/constructor/starGift/">starGift</a>.<code>id</code></td></tr><tr><td><strong>message</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/type/TextWithEntities/">TextWithEntities</a></td><td>Optional message, attached with the gift.<br>The maximum length for this field is specified in the <a href="/api/config/#stargifts-message-length-max">stargifts_message_length_max client configuration value »</a>.</td></tr></tbody></table>

### Type

[InputInvoice](/type/InputInvoice/)

### Related pages

#### [Telegram Gifts](/api/gifts/)

Users can send Gifts to their friends. The recipients of gifts can display them on their profile pages or turn them into Telegram Stars ». Telegram Stars can be used for many things, including supporting creators and buying services in mini apps.

#### [starGift](/constructor/starGift/)

Represents a [star gift, see here »](/api/gifts/) for more info.

#### [Client configuration](/api/config/)

The MTProto API has multiple configuration parameters that can be fetched with the appropriate methods.
