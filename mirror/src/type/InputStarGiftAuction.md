---
title: "InputStarGiftAuction"
original: "https://core.telegram.org/type/InputStarGiftAuction"
section: ref
description: "Identifies a collectible gift auction », either by the ID of the linked collectible gift or by an auction deep link slug."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"InputStarGiftAuction","url":"/type/InputStarGiftAuction/"}]
layout: layout.njk
---

# InputStarGiftAuction

Identifies a [collectible gift auction »](/api/auctions/), either by the ID of the linked collectible gift or by an auction deep link slug.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/inputStarGiftAuction/">inputStarGiftAuction</a>#2e16c98 gift_id:<a href="/type/long/">long</a> = <a href="/type/InputStarGiftAuction/" class="current_page_link">InputStarGiftAuction</a>;
<a href="/constructor/inputStarGiftAuctionSlug/">inputStarGiftAuctionSlug</a>#7ab58308 slug:<a href="/type/string/">string</a> = <a href="/type/InputStarGiftAuction/" class="current_page_link">InputStarGiftAuction</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/inputStarGiftAuction/">inputStarGiftAuction</a></td><td>Used to fetch <a href="/api/auctions/">auctions</a> using the ID of the linked <a href="/api/gifts/#collectible-gifts">collectible gift</a>.</td></tr><tr><td><a href="/constructor/inputStarGiftAuctionSlug/">inputStarGiftAuctionSlug</a></td><td>Used to fetch <a href="/api/auctions/">auctions</a> using the <a href="/api/links/#auction-links">slug of an auction deep link »</a>.</td></tr></tbody></table>

### Related pages

#### [Collectible gift auctions](/api/auctions/)

New collectible gift releases are distributed through Stars auctions held over several rounds.
