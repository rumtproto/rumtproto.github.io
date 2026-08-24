---
title: "payments.starGiftAuctionState"
original: "https://core.telegram.org/constructor/payments.starGiftAuctionState"
section: ref
description: "Describes a collectible gift auction »."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"payments.starGiftAuctionState","url":"/constructor/payments.starGiftAuctionState/"}]
layout: layout.njk
---

# payments.starGiftAuctionState

Describes a [collectible gift auction »](/api/auctions/).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/payments.starGiftAuctionState/" class="current_page_link">payments.starGiftAuctionState</a>#6b39f4ec gift:<a href="/type/StarGift/">StarGift</a> state:<a href="/type/StarGiftAuctionState/">StarGiftAuctionState</a> user_state:<a href="/type/StarGiftAuctionUserState/">StarGiftAuctionUserState</a> timeout:<a href="/type/int/">int</a> users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; = <a href="/type/payments.StarGiftAuctionState/">payments.StarGiftAuctionState</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>gift</strong></td><td style="text-align: center;"><a href="/type/StarGift/">StarGift</a></td><td>The gift currently being distributed in the auction.</td></tr><tr><td><strong>state</strong></td><td style="text-align: center;"><a href="/type/StarGiftAuctionState/">StarGiftAuctionState</a></td><td>Auction state.</td></tr><tr><td><strong>user_state</strong></td><td style="text-align: center;"><a href="/type/StarGiftAuctionUserState/">StarGiftAuctionUserState</a></td><td>Auction state related to the current user (i.e. info about placed bids, won gifts, and so on).</td></tr><tr><td><strong>timeout</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Re-invoke the <a href="/method/payments.getStarGiftAuctionState/">payments.getStarGiftAuctionState</a> method after <code>timeout</code> seconds to keep receiving auction updates, see <a href="/api/auctions/">here »</a> for more info on the full flow.</td></tr><tr><td><strong>users</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt;</td><td>Mentioned users</td></tr><tr><td><strong>chats</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt;</td><td>Mentioned chats</td></tr></tbody></table>

### Type

[payments.StarGiftAuctionState](/type/payments.StarGiftAuctionState/)

### Related pages

#### [payments.getStarGiftAuctionState](/method/payments.getStarGiftAuctionState/)

Returns info about a [collectible gift auction »](/api/auctions/); also subscribes the user to auction updates, see [here »](/api/auctions/) for more info on the full flow.

#### [Collectible gift auctions](/api/auctions/)

New collectible gift releases are distributed through Stars auctions held over several rounds.
