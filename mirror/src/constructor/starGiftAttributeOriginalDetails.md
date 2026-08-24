---
title: "starGiftAttributeOriginalDetails"
original: "https://core.telegram.org/constructor/starGiftAttributeOriginalDetails"
section: ref
description: "Info about the sender, receiver and message attached to the original gift », before it was upgraded to a collectible gift »."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"starGiftAttributeOriginalDetails","url":"/constructor/starGiftAttributeOriginalDetails/"}]
layout: layout.njk
---

# starGiftAttributeOriginalDetails

Info about the sender, receiver and message attached to the original [gift »](/api/gifts/), before it was upgraded to a [collectible gift »](/api/gifts/#collectible-gifts).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/starGiftAttributeOriginalDetails/" class="current_page_link">starGiftAttributeOriginalDetails</a>#e0bff26c flags:<a href="/type/%23/">#</a> sender_id:flags.0?<a href="/type/Peer/">Peer</a> recipient_id:<a href="/type/Peer/">Peer</a> date:<a href="/type/int/">int</a> message:flags.1?<a href="/type/TextWithEntities/">TextWithEntities</a> = <a href="/type/StarGiftAttribute/">StarGiftAttribute</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>sender_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/Peer/">Peer</a></td><td>Original sender of the gift, absent if the gift was private.</td></tr><tr><td><strong>recipient_id</strong></td><td style="text-align: center;"><a href="/type/Peer/">Peer</a></td><td>Original receiver of the gift.</td></tr><tr><td><strong>date</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>When was the gift sent.</td></tr><tr><td><strong>message</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/type/TextWithEntities/">TextWithEntities</a></td><td>Original message attached to the gift, if present.</td></tr></tbody></table>

### Type

[StarGiftAttribute](/type/StarGiftAttribute/)

### Related pages

#### [Telegram Gifts](/api/gifts/)

Users can send Gifts to their friends. The recipients of gifts can display them on their profile pages or turn them into Telegram Stars ». Telegram Stars can be used for many things, including supporting creators and buying services in mini apps.
