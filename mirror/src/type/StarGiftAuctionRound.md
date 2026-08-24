---
title: "StarGiftAuctionRound"
original: "https://core.telegram.org/type/StarGiftAuctionRound"
section: ref
description: "Describes one or more rounds of a collectible gift auction », optionally extendable."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"StarGiftAuctionRound","url":"/type/StarGiftAuctionRound/"}]
layout: layout.njk
---

# StarGiftAuctionRound

Describes one or more rounds of a [collectible gift auction »](/api/auctions/), optionally extendable.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/starGiftAuctionRound/">starGiftAuctionRound</a>#3aae0528 num:<a href="/type/int/">int</a> duration:<a href="/type/int/">int</a> = <a href="/type/StarGiftAuctionRound/" class="current_page_link">StarGiftAuctionRound</a>;
<a href="/constructor/starGiftAuctionRoundExtendable/">starGiftAuctionRoundExtendable</a>#aa021e5 num:<a href="/type/int/">int</a> duration:<a href="/type/int/">int</a> extend_top:<a href="/type/int/">int</a> extend_window:<a href="/type/int/">int</a> = <a href="/type/StarGiftAuctionRound/" class="current_page_link">StarGiftAuctionRound</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/starGiftAuctionRound/">starGiftAuctionRound</a></td><td>Describes one or more <a href="/api/auctions/">collectible gift auction rounds »</a>.</td></tr><tr><td><a href="/constructor/starGiftAuctionRoundExtendable/">starGiftAuctionRoundExtendable</a></td><td>Describes one or more extendable <a href="/api/auctions/">collectible gift auction rounds »</a>.</td></tr></tbody></table>

### Related pages

#### [Collectible gift auctions](/api/auctions/)

New collectible gift releases are distributed through Stars auctions held over several rounds.
