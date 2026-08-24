---
title: "Payments.StarGiftAuctionAcquiredGifts"
original: "https://core.telegram.org/type/payments.StarGiftAuctionAcquiredGifts"
section: ref
description: "Describes all the gifts that the current user won in an auction."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"Payments.StarGiftAuctionAcquiredGifts","url":"/type/payments.StarGiftAuctionAcquiredGifts/"}]
layout: layout.njk
---

# Payments.StarGiftAuctionAcquiredGifts

Describes all the gifts that the current user won in an [auction](/api/auctions/).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/payments.starGiftAuctionAcquiredGifts/">payments.starGiftAuctionAcquiredGifts</a>#7d5bd1f0 gifts:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/StarGiftAuctionAcquiredGift/">StarGiftAuctionAcquiredGift</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; = <a href="/type/payments.StarGiftAuctionAcquiredGifts/" class="current_page_link">payments.StarGiftAuctionAcquiredGifts</a>;

---functions---

<a href="/method/payments.getStarGiftAuctionAcquiredGifts/">payments.getStarGiftAuctionAcquiredGifts</a>#6ba2cbec gift_id:<a href="/type/long/">long</a> = <a href="/type/payments.StarGiftAuctionAcquiredGifts/" class="current_page_link">payments.StarGiftAuctionAcquiredGifts</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/payments.starGiftAuctionAcquiredGifts/">payments.starGiftAuctionAcquiredGifts</a></td><td>Describes all the gifts that the current user won in an <a href="/api/auctions/">auction</a>.</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/payments.getStarGiftAuctionAcquiredGifts/">payments.getStarGiftAuctionAcquiredGifts</a></td><td>Fetches all the gifts that the current user won in an <a href="/api/auctions/">auction</a>.</td></tr></tbody></table>

### Related pages

#### [Collectible gift auctions](/api/auctions/)

New collectible gift releases are distributed through Stars auctions held over several rounds.
