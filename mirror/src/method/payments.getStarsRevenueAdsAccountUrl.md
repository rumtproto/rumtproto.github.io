---
title: "payments.getStarsRevenueAdsAccountUrl"
original: "https://core.telegram.org/method/payments.getStarsRevenueAdsAccountUrl"
section: ref
description: "Returns a URL for a Telegram Ad platform account that can be used to set up advertisements for channel/bot in peer, paid using the Telegram Stars owned by the specified peer, see…"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"payments.getStarsRevenueAdsAccountUrl","url":"/method/payments.getStarsRevenueAdsAccountUrl/"}]
layout: layout.njk
---

# payments.getStarsRevenueAdsAccountUrl

Returns a URL for a Telegram Ad platform account that can be used to set up advertisements for channel/bot in `peer`, paid using the Telegram Stars owned by the specified `peer`, see [here »](/api/stars/#paying-for-ads) for more info.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/payments.starsRevenueAdsAccountUrl/">payments.starsRevenueAdsAccountUrl</a>#394e7f21 url:<a href="/type/string/">string</a> = <a href="/type/payments.StarsRevenueAdsAccountUrl/">payments.StarsRevenueAdsAccountUrl</a>;
---functions---
<a href="/method/payments.getStarsRevenueAdsAccountUrl/" class="current_page_link">payments.getStarsRevenueAdsAccountUrl</a>#d1d7efc5 peer:<a href="/type/InputPeer/">InputPeer</a> = <a href="/type/payments.StarsRevenueAdsAccountUrl/">payments.StarsRevenueAdsAccountUrl</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer/">InputPeer</a></td><td>Channel or bot that owns the stars.</td></tr></tbody></table>

### Result

[payments.StarsRevenueAdsAccountUrl](/type/payments.StarsRevenueAdsAccountUrl/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>403</td><td>CHAT_WRITE_FORBIDDEN</td><td>You can't write in this chat.</td></tr><tr><td>400</td><td>PEER_ID_INVALID</td><td>The provided peer id is invalid.</td></tr></tbody></table>

### Related pages

#### [Telegram Stars](/api/stars/)

Telegram Stars are virtual items that allow users to purchase digital goods and services from bots and mini apps inside the Telegram ecosystem, send gifts to content creators on the Telegram platform, and more.
