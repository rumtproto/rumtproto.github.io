---
title: "starGiftAuctionAcquiredGift (конструктор)"
original: "https://core.telegram.org/constructor/starGiftAuctionAcquiredGift"
section: ref
kind: constructor
layout: layout.njk
---

# starGiftAuctionAcquiredGift

*Конструктор из схемы TL.*

> Describes a gift that the current user won in an auction.

## Определение TL

```
starGiftAuctionAcquiredGift#42b00348 flags:# name_hidden:flags.0?true peer:Peer date:int bid_amount:long round:int pos:int message:flags.1?TextWithEntities gift_num:flags.2?int = StarGiftAuctionAcquiredGift;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| name_hidden | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | If set, your name will be hidden if the destination peer decides to display the gift on their profile (they will still see that you sent the gift). |
| peer | [Peer](/type/Peer/) | The peer that received the gift. |
| date | [int](/type/int/) | When was the gift obtained. |
| bid_amount | [long](/type/long/) | The amount in [Telegram Stars](https://core.telegram.org/api/stars) that was bid in order to obtain the gift. |
| round | [int](/type/int/) | The round number where the gift was obtained. |
| pos | [int](/type/int/) | The position of the gift in the auction. |
| message | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[TextWithEntities](/type/TextWithEntities/) | Optional message that attached with the gift, passed when making the bid. |
| gift_num | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[int](/type/int/) | If set, the collectible number of the won gift among all collectibles of the same type. This field is optional because only auction collectibles won before this field was introduced in the API will not have this flag set. |

## Тип

[StarGiftAuctionAcquiredGift](/type/StarGiftAuctionAcquiredGift/)

## Related pages

#### [Telegram Stars](https://core.telegram.org/api/stars)

Telegram Stars are virtual items that allow users to purchase digital goods and services from bots and mini apps inside the Telegram ecosystem, send gifts to content creators on the Telegram platform, and more.
