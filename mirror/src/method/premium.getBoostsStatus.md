---
title: "premium.getBoostsStatus"
original: "https://core.telegram.org/method/premium.getBoostsStatus"
section: ref
description: "Gets the current number of boosts of a channel/supergroup."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"premium.getBoostsStatus","url":"/method/premium.getBoostsStatus/"}]
layout: layout.njk
---

# premium.getBoostsStatus

Gets the current [number of boosts](/api/boost/) of a channel/supergroup.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/premium.boostsStatus/">premium.boostsStatus</a>#4959427a flags:<a href="/type/%23/">#</a> my_boost:flags.2?true level:<a href="/type/int/">int</a> current_level_boosts:<a href="/type/int/">int</a> boosts:<a href="/type/int/">int</a> gift_boosts:flags.4?<a href="/type/int/">int</a> next_level_boosts:flags.0?<a href="/type/int/">int</a> premium_audience:flags.1?<a href="/type/StatsPercentValue/">StatsPercentValue</a> boost_url:<a href="/type/string/">string</a> prepaid_giveaways:flags.3?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/PrepaidGiveaway/">PrepaidGiveaway</a>&gt; my_boost_slots:flags.2?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/int/">int</a>&gt; = <a href="/type/premium.BoostsStatus/">premium.BoostsStatus</a>;
---functions---
<a href="/method/premium.getBoostsStatus/" class="current_page_link">premium.getBoostsStatus</a>#42f1f61 peer:<a href="/type/InputPeer/">InputPeer</a> = <a href="/type/premium.BoostsStatus/">premium.BoostsStatus</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer/">InputPeer</a></td><td>The peer.</td></tr></tbody></table>

### Result

[premium.BoostsStatus](/type/premium.BoostsStatus/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>CHANNEL_INVALID</td><td>The provided channel is invalid.</td></tr><tr><td>400</td><td>CHANNEL_PRIVATE</td><td>You haven't joined this channel/supergroup.</td></tr><tr><td>400</td><td>PEER_ID_INVALID</td><td>The provided peer id is invalid.</td></tr></tbody></table>

### Related pages

#### [Channel and supergroup boosts](/api/boost/)

Telegram Premium users can grant their favorite channels and supergroups additional features like the ability to post stories by giving them boosts.
