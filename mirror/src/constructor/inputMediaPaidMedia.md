---
title: "inputMediaPaidMedia"
original: "https://core.telegram.org/constructor/inputMediaPaidMedia"
section: ref
description: "Paid media, see here » for more info."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"inputMediaPaidMedia","url":"/constructor/inputMediaPaidMedia/"}]
layout: layout.njk
---

# inputMediaPaidMedia

[Paid media, see here »](/api/paid-media/) for more info.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/inputMediaPaidMedia/" class="current_page_link">inputMediaPaidMedia</a>#c4103386 flags:<a href="/type/%23/">#</a> stars_amount:<a href="/type/long/">long</a> extended_media:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/InputMedia/">InputMedia</a>&gt; payload:flags.0?<a href="/type/string/">string</a> = <a href="/type/InputMedia/">InputMedia</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>stars_amount</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>The price of the media in <a href="/api/stars/">Telegram Stars</a>.</td></tr><tr><td><strong>extended_media</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/InputMedia/">InputMedia</a>&gt;</td><td>Photos or videos.</td></tr><tr><td><strong>payload</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/string/">string</a></td><td>Bots only, specifies a custom payload that will then be passed in <a href="/constructor/updateBotPurchasedPaidMedia/">updateBotPurchasedPaidMedia</a> when a payment is made (this field will not be visible to the user)</td></tr></tbody></table>

### Type

[InputMedia](/type/InputMedia/)

### Related pages

#### [Telegram Stars](/api/stars/)

Telegram Stars are virtual items that allow users to purchase digital goods and services from bots and mini apps inside the Telegram ecosystem, send gifts to content creators on the Telegram platform, and more.

#### [updateBotPurchasedPaidMedia](/constructor/updateBotPurchasedPaidMedia/)

Bots only: a user has purchased a [paid media](/api/paid-media/).

#### [Paid media](/api/paid-media/)

Content creators can accept Stars by publishing paid photos or videos on their channels. Subscribers will be allowed to view such posts only after paying the author to unlock them.
