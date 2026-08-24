---
title: "payments.getStarsGiftOptions"
original: "https://core.telegram.org/method/payments.getStarsGiftOptions"
section: ref
description: "Obtain a list of Telegram Stars gift options » as starsGiftOption constructors."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"payments.getStarsGiftOptions","url":"/method/payments.getStarsGiftOptions/"}]
layout: layout.njk
---

# payments.getStarsGiftOptions

Obtain a list of [Telegram Stars gift options »](/api/stars/#buying-or-gifting-stars) as [starsGiftOption](/constructor/starsGiftOption/) constructors.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code>---functions---
<a href="/method/payments.getStarsGiftOptions/" class="current_page_link">payments.getStarsGiftOptions</a>#d3c96bc8 flags:<a href="/type/%23/">#</a> user_id:flags.0?<a href="/type/InputUser/">InputUser</a> = <a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/StarsGiftOption/">StarsGiftOption</a>&gt;;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>user_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/InputUser/">InputUser</a></td><td>Receiver of the gift (optional).</td></tr></tbody></table>

### Result

[Vector](/type/Vector%20t/)&lt;[StarsGiftOption](/type/StarsGiftOption/)\>

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>INPUT_USER_DEACTIVATED</td><td>The specified user was deleted.</td></tr><tr><td>400</td><td>USER_GIFT_UNAVAILABLE</td><td>Gifts are not available in the current region (<a href="/api/config/#stars-gifts-enabled">stars_gifts_enabled</a> is equal to false).</td></tr><tr><td>400</td><td>USER_ID_INVALID</td><td>The provided user ID is invalid.</td></tr></tbody></table>

### Related pages

#### [Telegram Stars](/api/stars/)

Telegram Stars are virtual items that allow users to purchase digital goods and services from bots and mini apps inside the Telegram ecosystem, send gifts to content creators on the Telegram platform, and more.

#### [starsGiftOption](/constructor/starsGiftOption/)

[Telegram Stars gift option](/api/stars/#buying-or-gifting-stars).

#### [Client configuration](/api/config/)

The MTProto API has multiple configuration parameters that can be fetched with the appropriate methods.
