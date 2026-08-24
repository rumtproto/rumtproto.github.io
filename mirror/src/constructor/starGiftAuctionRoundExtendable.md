---
title: "starGiftAuctionRoundExtendable"
original: "https://core.telegram.org/constructor/starGiftAuctionRoundExtendable"
section: ref
description: "Describes one or more extendable collectible gift auction rounds »."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"starGiftAuctionRoundExtendable","url":"/constructor/starGiftAuctionRoundExtendable/"}]
layout: layout.njk
---

# starGiftAuctionRoundExtendable

Describes one or more extendable [collectible gift auction rounds »](/api/auctions/).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/starGiftAuctionRoundExtendable/" class="current_page_link">starGiftAuctionRoundExtendable</a>#aa021e5 num:<a href="/type/int/">int</a> duration:<a href="/type/int/">int</a> extend_top:<a href="/type/int/">int</a> extend_window:<a href="/type/int/">int</a> = <a href="/type/StarGiftAuctionRound/">StarGiftAuctionRound</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>num</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>This object describes all rounds starting from <code>num</code> up until <code>next.num-1</code> inclusively (<code>next</code> is the next <a href="/type/StarGiftAuctionRound/">StarGiftAuctionRound</a>).</td></tr><tr><td><strong>duration</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Duration in seconds of the round(s).</td></tr><tr><td><strong>extend_top</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>The round(s) will be extended by <code>extend_window</code> if a bid changes the composition/order of the top <code>extend_top</code> bidders.</td></tr><tr><td><strong>extend_window</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>The round(s) will be extended by this many seconds if a bid changes the composition/order of the top <code>extend_top</code> bidders.</td></tr></tbody></table>

### Type

[StarGiftAuctionRound](/type/StarGiftAuctionRound/)

### Related pages

#### [StarGiftAuctionRound](/type/StarGiftAuctionRound/)

Describes one or more rounds of a [collectible gift auction »](/api/auctions/), optionally extendable.

#### [Collectible gift auctions](/api/auctions/)

New collectible gift releases are distributed through Stars auctions held over several rounds.
