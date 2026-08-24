---
title: "payments.StarsRevenueAdsAccountUrl"
original: "https://core.telegram.org/type/payments.StarsRevenueAdsAccountUrl"
section: ref
description: "Contains a URL leading to a page where the user will be able to place ads for the channel/bot, paying using Telegram Stars."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"payments.StarsRevenueAdsAccountUrl","url":"/type/payments.StarsRevenueAdsAccountUrl/"}]
layout: layout.njk
---

# payments.StarsRevenueAdsAccountUrl

Contains a URL leading to a page where the user will be able to place ads for the channel/bot, paying using [Telegram Stars](/api/stars/#paying-for-ads).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/payments.starsRevenueAdsAccountUrl/">payments.starsRevenueAdsAccountUrl</a>#394e7f21 url:<a href="/type/string/">string</a> = <a href="/type/payments.StarsRevenueAdsAccountUrl/" class="current_page_link">payments.StarsRevenueAdsAccountUrl</a>;

---functions---

<a href="/method/payments.getStarsRevenueAdsAccountUrl/">payments.getStarsRevenueAdsAccountUrl</a>#d1d7efc5 peer:<a href="/type/InputPeer/">InputPeer</a> = <a href="/type/payments.StarsRevenueAdsAccountUrl/" class="current_page_link">payments.StarsRevenueAdsAccountUrl</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/payments.starsRevenueAdsAccountUrl/">payments.starsRevenueAdsAccountUrl</a></td><td>Contains a URL leading to a page where the user will be able to place ads for the channel/bot, paying using <a href="/api/stars/#paying-for-ads">Telegram Stars</a>.</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/payments.getStarsRevenueAdsAccountUrl/">payments.getStarsRevenueAdsAccountUrl</a></td><td>Returns a URL for a Telegram Ad platform account that can be used to set up advertisements for channel/bot in <code>peer</code>, paid using the Telegram Stars owned by the specified <code>peer</code>, see <a href="/api/stars/#paying-for-ads">here »</a> for more info.</td></tr></tbody></table>

### Related pages

#### [Telegram Stars](/api/stars/)

Telegram Stars are virtual items that allow users to purchase digital goods and services from bots and mini apps inside the Telegram ecosystem, send gifts to content creators on the Telegram platform, and more.
