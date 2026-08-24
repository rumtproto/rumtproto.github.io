---
title: "payments.checkGiftCode"
original: "https://core.telegram.org/method/payments.checkGiftCode"
section: ref
description: "Obtain information about a Telegram Premium giftcode »"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"payments.checkGiftCode","url":"/method/payments.checkGiftCode/"}]
layout: layout.njk
---

# payments.checkGiftCode

Obtain information about a [Telegram Premium giftcode »](/api/giveaways/)

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/payments.checkedGiftCode/">payments.checkedGiftCode</a>#eb983f8f flags:<a href="/type/%23/">#</a> via_giveaway:flags.2?true from_id:flags.4?<a href="/type/Peer/">Peer</a> giveaway_msg_id:flags.3?<a href="/type/int/">int</a> to_id:flags.0?<a href="/type/long/">long</a> date:<a href="/type/int/">int</a> days:<a href="/type/int/">int</a> used_date:flags.1?<a href="/type/int/">int</a> chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/payments.CheckedGiftCode/">payments.CheckedGiftCode</a>;
---functions---
<a href="/method/payments.checkGiftCode/" class="current_page_link">payments.checkGiftCode</a>#8e51b4c1 slug:<a href="/type/string/">string</a> = <a href="/type/payments.CheckedGiftCode/">payments.CheckedGiftCode</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>slug</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>The giftcode to check</td></tr></tbody></table>

### Result

[payments.CheckedGiftCode](/type/payments.CheckedGiftCode/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>GIFT_SLUG_EXPIRED</td><td>The specified gift slug has expired.</td></tr><tr><td>400</td><td>GIFT_SLUG_INVALID</td><td>The specified slug is invalid.</td></tr></tbody></table>

### Related pages

#### [Giveaways and gifts](/api/giveaways/)

Telegram channel and supergroup administrators may launch giveaways to randomly distribute Telegram Premium subscriptions and other gifts among their followers, in exchange for boosts.
