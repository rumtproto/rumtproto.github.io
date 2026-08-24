---
title: "payments.getStarGiftActiveAuctions"
original: "https://core.telegram.org/method/payments.getStarGiftActiveAuctions"
section: ref
description: "Fetches all currently active gift auctions the user has ever bid on (including auctions where the user was outbid and their bid was returned), as long as the auction hasn't ended…"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"payments.getStarGiftActiveAuctions","url":"/method/payments.getStarGiftActiveAuctions/"}]
layout: layout.njk
---

# payments.getStarGiftActiveAuctions

Fetches all currently active [gift auctions](/api/auctions/) **the user has ever bid on** (including auctions where the user was outbid and their bid was returned), as long as the auction hasn't ended yet.

This method is primarily used to display an auction badge in the chat list immediately on app startup, without waiting for real-time [updateStarGiftAuctionState](/constructor/updateStarGiftAuctionState/) updates to arrive: the client calls it to discover which auctions the user is participating in and show the badge proactively.

To instead fetch the full state of a single auction, subscribe to its real-time updates and render the detailed auction UI (typically when the user opens a specific auction), use [payments.getStarGiftAuctionState](/method/payments.getStarGiftAuctionState/).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/payments.starGiftActiveAuctionsNotModified/">payments.starGiftActiveAuctionsNotModified</a>#db33dad0 = <a href="/type/payments.StarGiftActiveAuctions/">payments.StarGiftActiveAuctions</a>;
<a href="/constructor/payments.starGiftActiveAuctions/">payments.starGiftActiveAuctions</a>#aef6abbc auctions:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/StarGiftActiveAuctionState/">StarGiftActiveAuctionState</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; = <a href="/type/payments.StarGiftActiveAuctions/">payments.StarGiftActiveAuctions</a>;
---functions---
<a href="/method/payments.getStarGiftActiveAuctions/" class="current_page_link">payments.getStarGiftActiveAuctions</a>#a5d0514d hash:<a href="/type/long/">long</a> = <a href="/type/payments.StarGiftActiveAuctions/">payments.StarGiftActiveAuctions</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>hash</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Hash generated <a href="/api/auctions/">as specified here »</a></td></tr></tbody></table>

### Result

[payments.StarGiftActiveAuctions](/type/payments.StarGiftActiveAuctions/)

### Only users can use this method

### Related pages

#### [Collectible gift auctions](/api/auctions/)

New collectible gift releases are distributed through Stars auctions held over several rounds.

#### [updateStarGiftAuctionState](/constructor/updateStarGiftAuctionState/)

Contains updates to [auction state, see here »](/api/auctions/) for more info on how to enable these updates.

#### [payments.getStarGiftAuctionState](/method/payments.getStarGiftAuctionState/)

Returns info about a [collectible gift auction »](/api/auctions/); also subscribes the user to auction updates, see [here »](/api/auctions/) for more info on the full flow.
