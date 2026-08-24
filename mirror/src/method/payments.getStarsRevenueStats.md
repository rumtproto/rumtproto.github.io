---
title: "payments.getStarsRevenueStats"
original: "https://core.telegram.org/method/payments.getStarsRevenueStats"
section: ref
description: "Get Telegram Star revenue statistics »."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"payments.getStarsRevenueStats","url":"/method/payments.getStarsRevenueStats/"}]
layout: layout.njk
---

# payments.getStarsRevenueStats

Get [Telegram Star revenue statistics »](/api/stars/).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/payments.starsRevenueStats/">payments.starsRevenueStats</a>#6c207376 flags:<a href="/type/%23/">#</a> top_hours_graph:flags.0?<a href="/type/StatsGraph/">StatsGraph</a> revenue_graph:<a href="/type/StatsGraph/">StatsGraph</a> status:<a href="/type/StarsRevenueStatus/">StarsRevenueStatus</a> usd_rate:<a href="/type/double/">double</a> = <a href="/type/payments.StarsRevenueStats/">payments.StarsRevenueStats</a>;
---functions---
<a href="/method/payments.getStarsRevenueStats/" class="current_page_link">payments.getStarsRevenueStats</a>#d91ffad6 flags:<a href="/type/%23/">#</a> dark:flags.0?true ton:flags.1?true peer:<a href="/type/InputPeer/">InputPeer</a> = <a href="/type/payments.StarsRevenueStats/">payments.StarsRevenueStats</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>dark</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>Whether to enable dark theme for graph colors</td></tr><tr><td><strong>ton</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/constructor/true/">true</a></td><td>If set, fetches channel/bot ad revenue statistics in TON.</td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer/">InputPeer</a></td><td>Get statistics for the specified bot, channel or ourselves (<a href="/constructor/inputPeerSelf/">inputPeerSelf</a>).</td></tr></tbody></table>

### Result

[payments.StarsRevenueStats](/type/payments.StarsRevenueStats/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>CHANNEL_INVALID</td><td>The provided channel is invalid.</td></tr><tr><td>400</td><td>CHANNEL_PRIVATE</td><td>You haven't joined this channel/supergroup.</td></tr><tr><td>400</td><td>PEER_ID_INVALID</td><td>The provided peer id is invalid.</td></tr></tbody></table>

### Related pages

#### [inputPeerSelf](/constructor/inputPeerSelf/)

Defines the current user.

#### [Telegram Stars](/api/stars/)

Telegram Stars are virtual items that allow users to purchase digital goods and services from bots and mini apps inside the Telegram ecosystem, send gifts to content creators on the Telegram platform, and more.
