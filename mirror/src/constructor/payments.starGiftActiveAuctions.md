---
title: "payments.starGiftActiveAuctions"
original: "https://core.telegram.org/constructor/payments.starGiftActiveAuctions"
section: ref
description: "Describes all currently active gift auctions where the user has placed a bid."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"payments.starGiftActiveAuctions","url":"/constructor/payments.starGiftActiveAuctions/"}]
layout: layout.njk
---

# payments.starGiftActiveAuctions

Describes all currently active [gift auctions](/api/auctions/) **where the user has placed a bid**.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/payments.starGiftActiveAuctions/" class="current_page_link">payments.starGiftActiveAuctions</a>#aef6abbc auctions:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/StarGiftActiveAuctionState/">StarGiftActiveAuctionState</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; = <a href="/type/payments.StarGiftActiveAuctions/">payments.StarGiftActiveAuctions</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>auctions</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/StarGiftActiveAuctionState/">StarGiftActiveAuctionState</a>&gt;</td><td>Auctions where the user has placed a bid</td></tr><tr><td><strong>users</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt;</td><td>Mentioned users</td></tr><tr><td><strong>chats</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt;</td><td>Mentioned chats</td></tr></tbody></table>

### Type

[payments.StarGiftActiveAuctions](/type/payments.StarGiftActiveAuctions/)

### Related pages

#### [Collectible gift auctions](/api/auctions/)

New collectible gift releases are distributed through Stars auctions held over several rounds.
