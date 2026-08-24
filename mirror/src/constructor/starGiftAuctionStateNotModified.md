---
title: "starGiftAuctionStateNotModified"
original: "https://core.telegram.org/constructor/starGiftAuctionStateNotModified"
section: ref
description: "Returned only by auction methods (never by updates) if the passed version is equal to the remote auction ».version, meaning auction information hasn't changed over the locally…"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"starGiftAuctionStateNotModified","url":"/constructor/starGiftAuctionStateNotModified/"}]
layout: layout.njk
---

# starGiftAuctionStateNotModified

Returned only by auction methods (never by updates) if the passed `version` is equal to the remote [auction »](/api/auctions/).`version`, meaning auction information hasn't changed over the locally cached version.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/starGiftAuctionStateNotModified/" class="current_page_link">starGiftAuctionStateNotModified</a>#fe333952 = <a href="/type/StarGiftAuctionState/">StarGiftAuctionState</a>;</code></pre>

### Parameters

This constructor does not require any parameters.

### Type

[StarGiftAuctionState](/type/StarGiftAuctionState/)

### Related pages

#### [Collectible gift auctions](/api/auctions/)

New collectible gift releases are distributed through Stars auctions held over several rounds.
