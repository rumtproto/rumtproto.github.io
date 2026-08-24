---
title: "Premium.BoostsStatus"
original: "https://core.telegram.org/type/premium.BoostsStatus"
section: ref
description: "Contains info about the current boost status of a peer."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"Premium.BoostsStatus","url":"/type/premium.BoostsStatus/"}]
layout: layout.njk
---

# Premium.BoostsStatus

Contains info about the current [boost status](/api/boost/) of a peer.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/premium.boostsStatus/">premium.boostsStatus</a>#4959427a flags:<a href="/type/%23/">#</a> my_boost:flags.2?true level:<a href="/type/int/">int</a> current_level_boosts:<a href="/type/int/">int</a> boosts:<a href="/type/int/">int</a> gift_boosts:flags.4?<a href="/type/int/">int</a> next_level_boosts:flags.0?<a href="/type/int/">int</a> premium_audience:flags.1?<a href="/type/StatsPercentValue/">StatsPercentValue</a> boost_url:<a href="/type/string/">string</a> prepaid_giveaways:flags.3?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/PrepaidGiveaway/">PrepaidGiveaway</a>&gt; my_boost_slots:flags.2?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/int/">int</a>&gt; = <a href="/type/premium.BoostsStatus/" class="current_page_link">premium.BoostsStatus</a>;

---functions---

<a href="/method/premium.getBoostsStatus/">premium.getBoostsStatus</a>#42f1f61 peer:<a href="/type/InputPeer/">InputPeer</a> = <a href="/type/premium.BoostsStatus/" class="current_page_link">premium.BoostsStatus</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/premium.boostsStatus/">premium.boostsStatus</a></td><td>Contains info about the current <a href="/api/boost/">boost status</a> of a peer.</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/premium.getBoostsStatus/">premium.getBoostsStatus</a></td><td>Gets the current <a href="/api/boost/">number of boosts</a> of a channel/supergroup.</td></tr></tbody></table>

### Related pages

#### [Channel and supergroup boosts](/api/boost/)

Telegram Premium users can grant their favorite channels and supergroups additional features like the ability to post stories by giving them boosts.
