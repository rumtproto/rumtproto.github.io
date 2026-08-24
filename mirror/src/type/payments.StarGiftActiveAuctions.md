---
title: "Payments.StarGiftActiveAuctions"
original: "https://core.telegram.org/type/payments.StarGiftActiveAuctions"
section: ref
description: "List of currently active gift auctions » where the user has placed a bid, or an indication that the locally cached list hasn't changed."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"Payments.StarGiftActiveAuctions","url":"/type/payments.StarGiftActiveAuctions/"}]
layout: layout.njk
---

# Payments.StarGiftActiveAuctions

List of currently active [gift auctions »](/api/auctions/) where the user has placed a bid, or an indication that the locally cached list hasn't changed.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/payments.starGiftActiveAuctionsNotModified/">payments.starGiftActiveAuctionsNotModified</a>#db33dad0 = <a href="/type/payments.StarGiftActiveAuctions/" class="current_page_link">payments.StarGiftActiveAuctions</a>;
<a href="/constructor/payments.starGiftActiveAuctions/">payments.starGiftActiveAuctions</a>#aef6abbc auctions:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/StarGiftActiveAuctionState/">StarGiftActiveAuctionState</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; = <a href="/type/payments.StarGiftActiveAuctions/" class="current_page_link">payments.StarGiftActiveAuctions</a>;

---functions---

<a href="/method/payments.getStarGiftActiveAuctions/">payments.getStarGiftActiveAuctions</a>#a5d0514d hash:<a href="/type/long/">long</a> = <a href="/type/payments.StarGiftActiveAuctions/" class="current_page_link">payments.StarGiftActiveAuctions</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/payments.starGiftActiveAuctionsNotModified/">payments.starGiftActiveAuctionsNotModified</a></td><td>The list of currently active <a href="/api/auctions/">gift auctions</a> <strong>where the user has placed a bid</strong> hasn't changed.</td></tr><tr><td><a href="/constructor/payments.starGiftActiveAuctions/">payments.starGiftActiveAuctions</a></td><td>Describes all currently active <a href="/api/auctions/">gift auctions</a> <strong>where the user has placed a bid</strong>.</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/payments.getStarGiftActiveAuctions/">payments.getStarGiftActiveAuctions</a></td><td>Fetches all currently active <a href="/api/auctions/">gift auctions</a> <strong>the user has ever bid on</strong> (including auctions where the user was outbid and their bid was returned), as long as the auction hasn't ended yet.<br><br>This method is primarily used to display an auction badge in the chat list immediately on app startup, without waiting for real-time <a href="/constructor/updateStarGiftAuctionState/">updateStarGiftAuctionState</a> updates to arrive: the client calls it to discover which auctions the user is participating in and show the badge proactively.<br><br>To instead fetch the full state of a single auction, subscribe to its real-time updates and render the detailed auction UI (typically when the user opens a specific auction), use <a href="/method/payments.getStarGiftAuctionState/">payments.getStarGiftAuctionState</a>.</td></tr></tbody></table>

### Related pages

#### [Collectible gift auctions](/api/auctions/)

New collectible gift releases are distributed through Stars auctions held over several rounds.
