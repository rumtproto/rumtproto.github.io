---
title: "updateStarsRevenueStatus"
original: "https://core.telegram.org/constructor/updateStarsRevenueStatus"
section: ref
description: "The Telegram Star balance of a channel/bot we own has changed »."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"updateStarsRevenueStatus","url":"/constructor/updateStarsRevenueStatus/"}]
layout: layout.njk
---

# updateStarsRevenueStatus

The [Telegram Star balance of a channel/bot we own has changed »](/api/stars/#revenue-statistics).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/updateStarsRevenueStatus/" class="current_page_link">updateStarsRevenueStatus</a>#a584b019 peer:<a href="/type/Peer/">Peer</a> status:<a href="/type/StarsRevenueStatus/">StarsRevenueStatus</a> = <a href="/type/Update/">Update</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/Peer/">Peer</a></td><td>Channel/bot</td></tr><tr><td><strong>status</strong></td><td style="text-align: center;"><a href="/type/StarsRevenueStatus/">StarsRevenueStatus</a></td><td>New Telegram Star balance.</td></tr></tbody></table>

### Type

[Update](/type/Update/)

### Related pages

#### [Telegram Stars](/api/stars/)

Telegram Stars are virtual items that allow users to purchase digital goods and services from bots and mini apps inside the Telegram ecosystem, send gifts to content creators on the Telegram platform, and more.
