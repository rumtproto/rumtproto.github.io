---
title: "starGiftAuctionState"
original: "https://core.telegram.org/constructor/starGiftAuctionState"
section: ref
description: "Represents an active or pending auction »."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"starGiftAuctionState","url":"/constructor/starGiftAuctionState/"}]
layout: layout.njk
---

# starGiftAuctionState

Represents an active or pending [auction »](/api/auctions/).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/starGiftAuctionState/" class="current_page_link">starGiftAuctionState</a>#771a4e66 version:<a href="/type/int/">int</a> start_date:<a href="/type/int/">int</a> end_date:<a href="/type/int/">int</a> min_bid_amount:<a href="/type/long/">long</a> bid_levels:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/AuctionBidLevel/">AuctionBidLevel</a>&gt; top_bidders:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/long/">long</a>&gt; next_round_at:<a href="/type/int/">int</a> last_gift_num:<a href="/type/int/">int</a> gifts_left:<a href="/type/int/">int</a> current_round:<a href="/type/int/">int</a> total_rounds:<a href="/type/int/">int</a> rounds:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/StarGiftAuctionRound/">StarGiftAuctionRound</a>&gt; = <a href="/type/StarGiftAuctionState/">StarGiftAuctionState</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>version</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Only apply incoming <a href="/constructor/starGiftAuctionState/">starGiftAuctionState</a> constructors if the received <code>version</code> is bigger than the locally cached <code>version</code>.</td></tr><tr><td><strong>start_date</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>UNIX timestamp indicating when the auction will start (or when it started, if it's in the past).</td></tr><tr><td><strong>end_date</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>UNIX timestamp indicating when the auction will end</td></tr><tr><td><strong>min_bid_amount</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Minumum allowed bid amount in <a href="/api/stars/">Telegram Stars</a>: only applicable if the user hasn't made a bid yet, otherwise must be overridden to the value of <a href="/constructor/starGiftAuctionUserState/">starGiftAuctionUserState</a>.<code>min_bid_amount</code> (which will be set if and only if the user already made a bid to this auction).</td></tr><tr><td><strong>bid_levels</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/AuctionBidLevel/">AuctionBidLevel</a>&gt;</td><td>Contains a sparse list of bids starting from the top bids, a more detailed description is available in <a href="/api/auctions/">the docs</a>.</td></tr><tr><td><strong>top_bidders</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/long/">long</a>&gt;</td><td>User IDs of the top 3 bidders (the <a href="/constructor/user/">user</a> constructors will be returned as <a href="/api/min/">min</a> constructors in the containing object).</td></tr><tr><td><strong>next_round_at</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>UNIX timestamp indicating when the current auction round will end, distributing <a href="/constructor/starGift/">starGift</a>.<code>gifts_per_round</code> gifts to the top <a href="/constructor/starGift/">starGift</a>.<code>gifts_per_round</code> bidders.</td></tr><tr><td><strong>last_gift_num</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>The number of gifts that were distributed in the previous round (also used to compute the approximated index of the gift that the current user will receive, <code>last_gift_num + approx_pos</code>, see <a href="/api/auctions/">here »</a> for more info).</td></tr><tr><td><strong>gifts_left</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>The remaining number of gifts that are yet to be distributed.</td></tr><tr><td><strong>current_round</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>The current round number (starting from 1).</td></tr><tr><td><strong>total_rounds</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>The total number of rounds in this auction.</td></tr><tr><td><strong>rounds</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/StarGiftAuctionRound/">StarGiftAuctionRound</a>&gt;</td><td>Detailed round information.</td></tr></tbody></table>

### Type

[StarGiftAuctionState](/type/StarGiftAuctionState/)

### Related pages

#### [starGiftAuctionState](/constructor/starGiftAuctionState/)

Represents an active or pending [auction »](/api/auctions/).

#### [Telegram Stars](/api/stars/)

Telegram Stars are virtual items that allow users to purchase digital goods and services from bots and mini apps inside the Telegram ecosystem, send gifts to content creators on the Telegram platform, and more.

#### [starGiftAuctionUserState](/constructor/starGiftAuctionUserState/)

Contains information about the current user's state in an [auction »](/api/auctions/).

The `bid_amount`, `bid_date`, `bid_peer` and `min_bid_amount` flags of [starGiftAuctionUserState](/constructor/starGiftAuctionUserState/) will all be set if the user placed a bid in the auction.

#### [Collectible gift auctions](/api/auctions/)

New collectible gift releases are distributed through Stars auctions held over several rounds.

#### [user](/constructor/user/)

Indicates info about a certain user.

Unless specified otherwise, when updating the [local peer database](/api/peers/), all fields from the newly received constructor take priority over the old constructor cached locally (including by removing fields that aren't set in the new constructor).

See [here »](https://github.com/tdlib/td/blob/73035e4a69ed26df563652de14aa9c4c86d23420/td/telegram/UserManager.cpp#L3106) for an implementation of the logic to use when updating the [local user peer database](/api/peers/).

#### [Min constructors](/api/min/)

In some situations user and channel constructors have reduced set of fields present (although id is always there) and min flag set.

#### [starGift](/constructor/starGift/)

Represents a [star gift, see here »](/api/gifts/) for more info.
