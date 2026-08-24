---
title: "StarGiftAuctionState"
original: "https://core.telegram.org/type/StarGiftAuctionState"
section: ref
description: "State of a collectible gift auction »: active/pending, finished, or unchanged with respect to a locally cached version."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"StarGiftAuctionState","url":"/type/StarGiftAuctionState/"}]
layout: layout.njk
---

# StarGiftAuctionState

State of a [collectible gift auction »](/api/auctions/): active/pending, finished, or unchanged with respect to a locally cached version.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/starGiftAuctionStateNotModified/">starGiftAuctionStateNotModified</a>#fe333952 = <a href="/type/StarGiftAuctionState/" class="current_page_link">StarGiftAuctionState</a>;
<a href="/constructor/starGiftAuctionState/">starGiftAuctionState</a>#771a4e66 version:<a href="/type/int/">int</a> start_date:<a href="/type/int/">int</a> end_date:<a href="/type/int/">int</a> min_bid_amount:<a href="/type/long/">long</a> bid_levels:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/AuctionBidLevel/">AuctionBidLevel</a>&gt; top_bidders:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/long/">long</a>&gt; next_round_at:<a href="/type/int/">int</a> last_gift_num:<a href="/type/int/">int</a> gifts_left:<a href="/type/int/">int</a> current_round:<a href="/type/int/">int</a> total_rounds:<a href="/type/int/">int</a> rounds:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/StarGiftAuctionRound/">StarGiftAuctionRound</a>&gt; = <a href="/type/StarGiftAuctionState/" class="current_page_link">StarGiftAuctionState</a>;
<a href="/constructor/starGiftAuctionStateFinished/">starGiftAuctionStateFinished</a>#972dabbf flags:<a href="/type/%23/">#</a> start_date:<a href="/type/int/">int</a> end_date:<a href="/type/int/">int</a> average_price:<a href="/type/long/">long</a> listed_count:flags.0?<a href="/type/int/">int</a> fragment_listed_count:flags.1?<a href="/type/int/">int</a> fragment_listed_url:flags.1?<a href="/type/string/">string</a> = <a href="/type/StarGiftAuctionState/" class="current_page_link">StarGiftAuctionState</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/starGiftAuctionStateNotModified/">starGiftAuctionStateNotModified</a></td><td>Returned only by auction methods (never by updates) if the passed <code>version</code> is equal to the remote <a href="/api/auctions/">auction »</a>.<code>version</code>, meaning auction information hasn't changed over the locally cached version.</td></tr><tr><td><a href="/constructor/starGiftAuctionState/">starGiftAuctionState</a></td><td>Represents an active or pending <a href="/api/auctions/">auction »</a>.</td></tr><tr><td><a href="/constructor/starGiftAuctionStateFinished/">starGiftAuctionStateFinished</a></td><td>Represents a finished <a href="/api/auctions/">auction »</a>.</td></tr></tbody></table>

### Related pages

#### [Collectible gift auctions](/api/auctions/)

New collectible gift releases are distributed through Stars auctions held over several rounds.
