---
title: "updateStarGiftAuctionUserState"
original: "https://core.telegram.org/constructor/updateStarGiftAuctionUserState"
section: ref
description: "Contains updates to auction state related to the current user, see here » for more info on how to enable these updates."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"updateStarGiftAuctionUserState","url":"/constructor/updateStarGiftAuctionUserState/"}]
layout: layout.njk
---

# updateStarGiftAuctionUserState

Contains updates to [auction state related to the current user, see here »](/api/auctions/) for more info on how to enable these updates.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/updateStarGiftAuctionUserState/" class="current_page_link">updateStarGiftAuctionUserState</a>#dc58f31e gift_id:<a href="/type/long/">long</a> user_state:<a href="/type/StarGiftAuctionUserState/">StarGiftAuctionUserState</a> = <a href="/type/Update/">Update</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>gift_id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>ID of the <a href="/api/gifts/#collectible-gifts">collectible gift »</a> currently being distributed in the auction.</td></tr><tr><td><strong>user_state</strong></td><td style="text-align: center;"><a href="/type/StarGiftAuctionUserState/">StarGiftAuctionUserState</a></td><td>Auction state related to the current user (i.e. info about placed bids, won gifts and so on).</td></tr></tbody></table>

### Type

[Update](/type/Update/)

### Related pages

#### [Telegram Gifts](/api/gifts/)

Users can send Gifts to their friends. The recipients of gifts can display them on their profile pages or turn them into Telegram Stars ». Telegram Stars can be used for many things, including supporting creators and buying services in mini apps.

#### [Collectible gift auctions](/api/auctions/)

New collectible gift releases are distributed through Stars auctions held over several rounds.
