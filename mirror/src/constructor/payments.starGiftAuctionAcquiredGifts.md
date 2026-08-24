---
title: "payments.starGiftAuctionAcquiredGifts"
original: "https://core.telegram.org/constructor/payments.starGiftAuctionAcquiredGifts"
section: ref
description: "Describes all the gifts that the current user won in an auction."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"payments.starGiftAuctionAcquiredGifts","url":"/constructor/payments.starGiftAuctionAcquiredGifts/"}]
layout: layout.njk
---

# payments.starGiftAuctionAcquiredGifts

Describes all the gifts that the current user won in an [auction](/api/auctions/).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/payments.starGiftAuctionAcquiredGifts/" class="current_page_link">payments.starGiftAuctionAcquiredGifts</a>#7d5bd1f0 gifts:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/StarGiftAuctionAcquiredGift/">StarGiftAuctionAcquiredGift</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; = <a href="/type/payments.StarGiftAuctionAcquiredGifts/">payments.StarGiftAuctionAcquiredGifts</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>gifts</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/StarGiftAuctionAcquiredGift/">StarGiftAuctionAcquiredGift</a>&gt;</td><td>The gifts</td></tr><tr><td><strong>users</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt;</td><td>Mentioned users</td></tr><tr><td><strong>chats</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt;</td><td>Mentioned chats</td></tr></tbody></table>

### Type

[payments.StarGiftAuctionAcquiredGifts](/type/payments.StarGiftAuctionAcquiredGifts/)

### Related pages

#### [Collectible gift auctions](/api/auctions/)

New collectible gift releases are distributed through Stars auctions held over several rounds.
