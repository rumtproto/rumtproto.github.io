---
title: "inputInvoiceStarGiftAuctionBid"
original: "https://core.telegram.org/constructor/inputInvoiceStarGiftAuctionBid"
section: ref
description: "Used to place a bid in a collectible gift auction »."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"inputInvoiceStarGiftAuctionBid","url":"/constructor/inputInvoiceStarGiftAuctionBid/"}]
layout: layout.njk
---

# inputInvoiceStarGiftAuctionBid

Used to place a bid in a [collectible gift auction »](/api/auctions/).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/inputInvoiceStarGiftAuctionBid/" class="current_page_link">inputInvoiceStarGiftAuctionBid</a>#1ecafa10 flags:<a href="/type/%23/">#</a> hide_name:flags.0?true update_bid:flags.2?true peer:flags.3?<a href="/type/InputPeer/">InputPeer</a> gift_id:<a href="/type/long/">long</a> bid_amount:<a href="/type/long/">long</a> message:flags.1?<a href="/type/TextWithEntities/">TextWithEntities</a> = <a href="/type/InputInvoice/">InputInvoice</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>hide_name</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>If set, your name will be hidden if the destination peer decides to display the gift on their profile (they will still see that you sent the gift).<br>Must not be set when updating an existing bid, as the value cannot be changed for existing bids.</td></tr><tr><td><strong>update_bid</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/constructor/true/">true</a></td><td>Must be set when increasing an already existing bid.</td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.3?<a href="/type/InputPeer/">InputPeer</a></td><td>Identifier of the user or channel (only if <a href="/constructor/channelFull/">channelFull</a>.<code>stargifts_available</code> is set) that will receive the gift.</td></tr><tr><td><strong>gift_id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Identifier of the gift, from <a href="/constructor/starGift/">starGift</a>.<code>id</code></td></tr><tr><td><strong>bid_amount</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Total amount of the bid in <a href="/api/stars/">Telegram Stars</a>.</td></tr><tr><td><strong>message</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/type/TextWithEntities/">TextWithEntities</a></td><td>Optional message that will be attached with the gift if we end up winning this round: the maximum length for this field is specified in the <a href="/api/config/#stargifts-message-length-max">stargifts_message_length_max client configuration value »</a>.<br>Must not be set when updating an existing bid, as the value cannot be changed for existing bids.</td></tr></tbody></table>

### Type

[InputInvoice](/type/InputInvoice/)

### Related pages

#### [channelFull](/constructor/channelFull/)

Full info about a [channel](/api/channel/#channels), [supergroup](/api/channel/#supergroups) or [gigagroup](/api/channel/#gigagroups).

When updating the [local peer database »](/api/peers/), all fields from the newly received constructor take priority over the old constructor cached locally (including by removing fields that aren't set in the new constructor).

#### [starGift](/constructor/starGift/)

Represents a [star gift, see here »](/api/gifts/) for more info.

#### [Telegram Stars](/api/stars/)

Telegram Stars are virtual items that allow users to purchase digital goods and services from bots and mini apps inside the Telegram ecosystem, send gifts to content creators on the Telegram platform, and more.

#### [Client configuration](/api/config/)

The MTProto API has multiple configuration parameters that can be fetched with the appropriate methods.

#### [Collectible gift auctions](/api/auctions/)

New collectible gift releases are distributed through Stars auctions held over several rounds.
