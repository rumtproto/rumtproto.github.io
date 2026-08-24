---
title: "starGiftAuctionStateFinished"
original: "https://core.telegram.org/constructor/starGiftAuctionStateFinished"
section: ref
description: "Represents a finished auction »."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"starGiftAuctionStateFinished","url":"/constructor/starGiftAuctionStateFinished/"}]
layout: layout.njk
---

# starGiftAuctionStateFinished

Represents a finished [auction »](/api/auctions/).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/starGiftAuctionStateFinished/" class="current_page_link">starGiftAuctionStateFinished</a>#972dabbf flags:<a href="/type/%23/">#</a> start_date:<a href="/type/int/">int</a> end_date:<a href="/type/int/">int</a> average_price:<a href="/type/long/">long</a> listed_count:flags.0?<a href="/type/int/">int</a> fragment_listed_count:flags.1?<a href="/type/int/">int</a> fragment_listed_url:flags.1?<a href="/type/string/">string</a> = <a href="/type/StarGiftAuctionState/">StarGiftAuctionState</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>start_date</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>UNIX timestamp indicating when the auction started.</td></tr><tr><td><strong>end_date</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>UNIX timestamp indicating when the auction ended.</td></tr><tr><td><strong>average_price</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Average price of distributed gifts.</td></tr><tr><td><strong>listed_count</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/int/">int</a></td><td>Number of gifts from the auction currently being resold on Telegram: if set, when the corresponding element is clicked in graphical clients, <a href="/method/payments.getResaleStarGifts/">payments.getResaleStarGifts</a> should be invoked with the ID of the gift associated to this auction, see <a href="/api/auctions/">here »</a> for more info.</td></tr><tr><td><strong>fragment_listed_count</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/type/int/">int</a></td><td>Number of gifts from the auction currently being resold on <a href="https://fragment.com">Fragment</a>.</td></tr><tr><td><strong>fragment_listed_url</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/type/string/">string</a></td><td>Only set if <code>fragment_listed_count</code> is set. If set, when the corresponding element is clicked in graphical clients, this URL should be opened.</td></tr></tbody></table>

### Type

[StarGiftAuctionState](/type/StarGiftAuctionState/)

### Related pages

#### [payments.getResaleStarGifts](/method/payments.getResaleStarGifts/)

Get [collectible gifts](/api/gifts/#collectible-gifts) of a specific type currently on resale, see [here »](/api/gifts/#reselling-collectible-gifts) for more info.

`sort_by_price` and `sort_by_num` are mutually exclusive, if neither are set results are sorted by the unixtime (descending) when their resell price was last changed.

See [here »](/api/gifts/#sending-gifts) for detailed documentation on this method.

#### [Collectible gift auctions](/api/auctions/)

New collectible gift releases are distributed through Stars auctions held over several rounds.
