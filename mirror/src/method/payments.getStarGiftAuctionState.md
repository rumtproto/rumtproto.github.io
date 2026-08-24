---
title: "payments.getStarGiftAuctionState"
original: "https://core.telegram.org/method/payments.getStarGiftAuctionState"
section: ref
description: "Returns info about a collectible gift auction »; also subscribes the user to auction updates, see here » for more info on the full flow."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"payments.getStarGiftAuctionState","url":"/method/payments.getStarGiftAuctionState/"}]
layout: layout.njk
---

# payments.getStarGiftAuctionState

Returns info about a [collectible gift auction »](/api/auctions/); also subscribes the user to auction updates, see [here »](/api/auctions/) for more info on the full flow.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/payments.starGiftAuctionState/">payments.starGiftAuctionState</a>#6b39f4ec gift:<a href="/type/StarGift/">StarGift</a> state:<a href="/type/StarGiftAuctionState/">StarGiftAuctionState</a> user_state:<a href="/type/StarGiftAuctionUserState/">StarGiftAuctionUserState</a> timeout:<a href="/type/int/">int</a> users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; = <a href="/type/payments.StarGiftAuctionState/">payments.StarGiftAuctionState</a>;
---functions---
<a href="/method/payments.getStarGiftAuctionState/" class="current_page_link">payments.getStarGiftAuctionState</a>#5c9ff4d6 auction:<a href="/type/InputStarGiftAuction/">InputStarGiftAuction</a> version:<a href="/type/int/">int</a> = <a href="/type/payments.StarGiftAuctionState/">payments.StarGiftAuctionState</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>auction</strong></td><td style="text-align: center;"><a href="/type/InputStarGiftAuction/">InputStarGiftAuction</a></td><td>Either the ID of the gift linked to the auction, or an <a href="/api/links/#auction-links">auction deep link slug »</a>.</td></tr><tr><td><strong>version</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Initially <code>0</code>, then set to the returned <a href="/constructor/starGiftAuctionState/">starGiftAuctionState</a>.<code>version</code>, to avoid refetching results if they haven't changed.</td></tr></tbody></table>

### Result

[payments.StarGiftAuctionState](/type/payments.StarGiftAuctionState/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>STARGIFT_INVALID</td><td>The passed gift is invalid.</td></tr></tbody></table>

### Related pages

#### [Deep links](/api/links/)

Telegram clients must handle special tg:// and t.me deep links encountered in messages, link entities and in other apps by registering OS handlers.

#### [starGiftAuctionState](/constructor/starGiftAuctionState/)

Represents an active or pending [auction »](/api/auctions/).

#### [Collectible gift auctions](/api/auctions/)

New collectible gift releases are distributed through Stars auctions held over several rounds.
