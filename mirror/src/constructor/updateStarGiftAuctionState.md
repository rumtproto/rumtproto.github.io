---
title: "updateStarGiftAuctionState"
original: "https://core.telegram.org/constructor/updateStarGiftAuctionState"
section: ref
description: "Contains updates to auction state, see here » for more info on how to enable these updates."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"updateStarGiftAuctionState","url":"/constructor/updateStarGiftAuctionState/"}]
layout: layout.njk
---

# updateStarGiftAuctionState

Contains updates to [auction state, see here »](/api/auctions/) for more info on how to enable these updates.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/updateStarGiftAuctionState/" class="current_page_link">updateStarGiftAuctionState</a>#48e246c2 gift_id:<a href="/type/long/">long</a> state:<a href="/type/StarGiftAuctionState/">StarGiftAuctionState</a> = <a href="/type/Update/">Update</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>gift_id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>ID of the <a href="/api/gifts/#collectible-gifts">collectible gift »</a> currently being distributed in the auction.</td></tr><tr><td><strong>state</strong></td><td style="text-align: center;"><a href="/type/StarGiftAuctionState/">StarGiftAuctionState</a></td><td>Auction state.</td></tr></tbody></table>

### Type

[Update](/type/Update/)

### Related pages

#### [Telegram Gifts](/api/gifts/)

Users can send Gifts to their friends. The recipients of gifts can display them on their profile pages or turn them into Telegram Stars ». Telegram Stars can be used for many things, including supporting creators and buying services in mini apps.

#### [Collectible gift auctions](/api/auctions/)

New collectible gift releases are distributed through Stars auctions held over several rounds.
