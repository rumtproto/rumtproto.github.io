---
title: "StarGiftAuctionUserState"
original: "https://core.telegram.org/type/StarGiftAuctionUserState"
section: ref
description: "Contains information about the current user's state in an auction »."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"StarGiftAuctionUserState","url":"/type/StarGiftAuctionUserState/"}]
layout: layout.njk
---

# StarGiftAuctionUserState

Contains information about the current user's state in an [auction »](/api/auctions/).

The `bid_amount`, `bid_date`, `bid_peer` and `min_bid_amount` flags of [starGiftAuctionUserState](/constructor/starGiftAuctionUserState/) will all be set if the user placed a bid in the auction.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/starGiftAuctionUserState/">starGiftAuctionUserState</a>#2eeed1c4 flags:<a href="/type/%23/">#</a> returned:flags.1?true bid_amount:flags.0?<a href="/type/long/">long</a> bid_date:flags.0?<a href="/type/int/">int</a> min_bid_amount:flags.0?<a href="/type/long/">long</a> bid_peer:flags.0?<a href="/type/Peer/">Peer</a> acquired_count:<a href="/type/int/">int</a> = <a href="/type/StarGiftAuctionUserState/" class="current_page_link">StarGiftAuctionUserState</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/starGiftAuctionUserState/">starGiftAuctionUserState</a></td><td>Contains information about the current user's state in an <a href="/api/auctions/">auction »</a>.<br><br>The <code>bid_amount</code>, <code>bid_date</code>, <code>bid_peer</code> and <code>min_bid_amount</code> flags of <a href="/constructor/starGiftAuctionUserState/">starGiftAuctionUserState</a> will all be set if the user placed a bid in the auction.</td></tr></tbody></table>

### Related pages

#### [Collectible gift auctions](/api/auctions/)

New collectible gift releases are distributed through Stars auctions held over several rounds.

#### [starGiftAuctionUserState](/constructor/starGiftAuctionUserState/)

Contains information about the current user's state in an [auction »](/api/auctions/).

The `bid_amount`, `bid_date`, `bid_peer` and `min_bid_amount` flags of [starGiftAuctionUserState](/constructor/starGiftAuctionUserState/) will all be set if the user placed a bid in the auction.
