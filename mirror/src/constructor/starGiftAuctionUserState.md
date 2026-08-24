---
title: "starGiftAuctionUserState"
original: "https://core.telegram.org/constructor/starGiftAuctionUserState"
section: ref
description: "Contains information about the current user's state in an auction »."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"starGiftAuctionUserState","url":"/constructor/starGiftAuctionUserState/"}]
layout: layout.njk
---

# starGiftAuctionUserState

Contains information about the current user's state in an [auction »](/api/auctions/).

The `bid_amount`, `bid_date`, `bid_peer` and `min_bid_amount` flags of [starGiftAuctionUserState](/constructor/starGiftAuctionUserState/) will all be set if the user placed a bid in the auction.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/starGiftAuctionUserState/" class="current_page_link">starGiftAuctionUserState</a>#2eeed1c4 flags:<a href="/type/%23/">#</a> returned:flags.1?true bid_amount:flags.0?<a href="/type/long/">long</a> bid_date:flags.0?<a href="/type/int/">int</a> min_bid_amount:flags.0?<a href="/type/long/">long</a> bid_peer:flags.0?<a href="/type/Peer/">Peer</a> acquired_count:<a href="/type/int/">int</a> = <a href="/type/StarGiftAuctionUserState/">StarGiftAuctionUserState</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>returned</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/constructor/true/">true</a></td><td>If set, the placed bid was returned to the user, because it was outbid so much that it fell out of the top <a href="/constructor/starGiftAuctionState/">starGiftAuctionState</a>.<code>gifts_left</code> positions, meaning that even if no new bids are placed, the user will never receive any gifts, so the bid was completely removed from the auction, and in order to participate again the user must manually make a new bid.</td></tr><tr><td><strong>bid_amount</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/long/">long</a></td><td>Contains the amount of the placed bid in <a href="/api/stars/">Telegram Stars</a>.</td></tr><tr><td><strong>bid_date</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/int/">int</a></td><td>Contains a UNIX timestamp, indicating when the bid was placed.</td></tr><tr><td><strong>min_bid_amount</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/long/">long</a></td><td>Contains the minumum allowed bid amount in <a href="/api/stars/">Telegram Stars</a>, if set overrides <a href="/constructor/starGiftAuctionState/">starGiftAuctionState</a>.<code>min_bid_amount</code> for the current user.</td></tr><tr><td><strong>bid_peer</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/Peer/">Peer</a></td><td>Contains the peer that will receive the gift, if you end up winning this round</td></tr><tr><td><strong>acquired_count</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Contains the number of gifts that were purchased so far in the auction by the current user.</td></tr></tbody></table>

### Type

[StarGiftAuctionUserState](/type/StarGiftAuctionUserState/)

### Related pages

#### [starGiftAuctionState](/constructor/starGiftAuctionState/)

Represents an active or pending [auction »](/api/auctions/).

#### [Telegram Stars](/api/stars/)

Telegram Stars are virtual items that allow users to purchase digital goods and services from bots and mini apps inside the Telegram ecosystem, send gifts to content creators on the Telegram platform, and more.

#### [Collectible gift auctions](/api/auctions/)

New collectible gift releases are distributed through Stars auctions held over several rounds.

#### [starGiftAuctionUserState](/constructor/starGiftAuctionUserState/)

Contains information about the current user's state in an [auction »](/api/auctions/).

The `bid_amount`, `bid_date`, `bid_peer` and `min_bid_amount` flags of [starGiftAuctionUserState](/constructor/starGiftAuctionUserState/) will all be set if the user placed a bid in the auction.
