---
title: "Payments.StarGiftAuctionState"
original: "https://core.telegram.org/type/payments.StarGiftAuctionState"
section: ref
description: "Describes a collectible gift auction »."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"Payments.StarGiftAuctionState","url":"/type/payments.StarGiftAuctionState/"}]
layout: layout.njk
---

# Payments.StarGiftAuctionState

Describes a [collectible gift auction »](/api/auctions/).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/payments.starGiftAuctionState/">payments.starGiftAuctionState</a>#6b39f4ec gift:<a href="/type/StarGift/">StarGift</a> state:<a href="/type/StarGiftAuctionState/">StarGiftAuctionState</a> user_state:<a href="/type/StarGiftAuctionUserState/">StarGiftAuctionUserState</a> timeout:<a href="/type/int/">int</a> users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; = <a href="/type/payments.StarGiftAuctionState/" class="current_page_link">payments.StarGiftAuctionState</a>;

---functions---

<a href="/method/payments.getStarGiftAuctionState/">payments.getStarGiftAuctionState</a>#5c9ff4d6 auction:<a href="/type/InputStarGiftAuction/">InputStarGiftAuction</a> version:<a href="/type/int/">int</a> = <a href="/type/payments.StarGiftAuctionState/" class="current_page_link">payments.StarGiftAuctionState</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/payments.starGiftAuctionState/">payments.starGiftAuctionState</a></td><td>Describes a <a href="/api/auctions/">collectible gift auction »</a>.</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/payments.getStarGiftAuctionState/">payments.getStarGiftAuctionState</a></td><td>Returns info about a <a href="/api/auctions/">collectible gift auction »</a>; also subscribes the user to auction updates, see <a href="/api/auctions/">here »</a> for more info on the full flow.</td></tr></tbody></table>

### Related pages

#### [Collectible gift auctions](/api/auctions/)

New collectible gift releases are distributed through Stars auctions held over several rounds.
