---
title: "auctionBidLevel"
original: "https://core.telegram.org/constructor/auctionBidLevel"
section: ref
description: "Describes a bid in an auction."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"auctionBidLevel","url":"/constructor/auctionBidLevel/"}]
layout: layout.njk
---

# auctionBidLevel

Describes a bid in an [auction](/api/auctions/).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/auctionBidLevel/" class="current_page_link">auctionBidLevel</a>#310240cc pos:<a href="/type/int/">int</a> amount:<a href="/type/long/">long</a> date:<a href="/type/int/">int</a> = <a href="/type/AuctionBidLevel/">AuctionBidLevel</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>pos</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Position of the bid.</td></tr><tr><td><strong>amount</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Amount of the bid in <a href="/api/stars/">Telegram Stars</a>.</td></tr><tr><td><strong>date</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Date when the bid was placed.</td></tr></tbody></table>

### Type

[AuctionBidLevel](/type/AuctionBidLevel/)

### Related pages

#### [Telegram Stars](/api/stars/)

Telegram Stars are virtual items that allow users to purchase digital goods and services from bots and mini apps inside the Telegram ecosystem, send gifts to content creators on the Telegram platform, and more.

#### [Collectible gift auctions](/api/auctions/)

New collectible gift releases are distributed through Stars auctions held over several rounds.
