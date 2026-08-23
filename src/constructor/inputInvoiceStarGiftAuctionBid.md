---
title: "inputInvoiceStarGiftAuctionBid (конструктор)"
original: "https://core.telegram.org/constructor/inputInvoiceStarGiftAuctionBid"
section: ref
kind: constructor
layout: layout.njk
---

# inputInvoiceStarGiftAuctionBid

*Конструктор из схемы TL.*

> Used to place a bid in a [collectible gift auction »](https://core.telegram.org/api/auctions).

## Определение TL

```
inputInvoiceStarGiftAuctionBid#1ecafa10 flags:# hide_name:flags.0?true update_bid:flags.2?true peer:flags.3?InputPeer gift_id:long bid_amount:long message:flags.1?TextWithEntities = InputInvoice;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| hide_name | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | If set, your name will be hidden if the destination peer decides to display the gift on their profile (they will still see that you sent the gift). Must not be set when updating an existing bid, as the value cannot be changed for existing bids. |
| update_bid | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[true](/constructor/true/) | Must be set when increasing an already existing bid. |
| peer | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).3?[InputPeer](/type/InputPeer/) | Identifier of the user or channel (only if [channelFull](/constructor/channelFull/).stargifts_available is set) that will receive the gift. |
| gift_id | [long](/type/long/) | Identifier of the gift, from [starGift](/constructor/starGift/).id |
| bid_amount | [long](/type/long/) | Total amount of the bid in [Telegram Stars](https://core.telegram.org/api/stars). |
| message | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[TextWithEntities](/type/TextWithEntities/) | Optional message that will be attached with the gift if we end up winning this round: the maximum length for this field is specified in the [stargifts_message_length_max client configuration value »](https://core.telegram.org/api/config#stargifts-message-length-max). Must not be set when updating an existing bid, as the value cannot be changed for existing bids. |

## Тип

[InputInvoice](/type/InputInvoice/)

## Related pages

#### [channelFull](/constructor/channelFull/)

Full info about a [channel](https://core.telegram.org/api/channel#channels), [supergroup](https://core.telegram.org/api/channel#supergroups) or [gigagroup](https://core.telegram.org/api/channel#gigagroups).

When updating the [local peer database »](https://core.telegram.org/api/peers), all fields from the newly received constructor take priority over the old constructor cached locally (including by removing fields that aren't set in the new constructor).

#### [starGift](/constructor/starGift/)

Represents a [star gift, see here »](https://core.telegram.org/api/gifts) for more info.

#### [Telegram Stars](https://core.telegram.org/api/stars)

Telegram Stars are virtual items that allow users to purchase digital goods and services from bots and mini apps inside the Telegram ecosystem, send gifts to content creators on the Telegram platform, and more.

#### [Client configuration](https://core.telegram.org/api/config)

The MTProto API has multiple configuration parameters that can be fetched with the appropriate methods.

#### [Collectible gift auctions](https://core.telegram.org/api/auctions)

New collectible gift releases are distributed through Stars auctions held over several rounds.
