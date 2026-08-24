---
title: "starGiftAuctionRound"
original: "https://core.telegram.org/constructor/starGiftAuctionRound"
section: ref
description: "Describes one or more collectible gift auction rounds »."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"starGiftAuctionRound","url":"/constructor/starGiftAuctionRound/"}]
layout: layout.njk
---

# starGiftAuctionRound

Describes one or more [collectible gift auction rounds »](/api/auctions/).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/starGiftAuctionRound/" class="current_page_link">starGiftAuctionRound</a>#3aae0528 num:<a href="/type/int/">int</a> duration:<a href="/type/int/">int</a> = <a href="/type/StarGiftAuctionRound/">StarGiftAuctionRound</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>num</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>This object describes all rounds starting from <code>num</code> up until <code>next.num-1</code> inclusively (<code>next</code> is the next <a href="/type/StarGiftAuctionRound/">StarGiftAuctionRound</a>).</td></tr><tr><td><strong>duration</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Duration in seconds of the round(s).</td></tr></tbody></table>

### Type

[StarGiftAuctionRound](/type/StarGiftAuctionRound/)

### Related pages

#### [StarGiftAuctionRound](/type/StarGiftAuctionRound/)

Describes one or more rounds of a [collectible gift auction »](/api/auctions/), optionally extendable.

#### [Collectible gift auctions](/api/auctions/)

New collectible gift releases are distributed through Stars auctions held over several rounds.
