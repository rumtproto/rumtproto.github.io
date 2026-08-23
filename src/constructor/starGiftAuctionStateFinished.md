---
title: "starGiftAuctionStateFinished (конструктор)"
original: "https://core.telegram.org/constructor/starGiftAuctionStateFinished"
section: ref
kind: constructor
layout: layout.njk
---

# starGiftAuctionStateFinished

*Конструктор из схемы TL.*

> Represents a finished [auction »](https://core.telegram.org/api/auctions).

## Определение TL

```
starGiftAuctionStateFinished#972dabbf flags:# start_date:int end_date:int average_price:long listed_count:flags.0?int fragment_listed_count:flags.1?int fragment_listed_url:flags.1?string = StarGiftAuctionState;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| start_date | [int](/type/int/) | UNIX timestamp indicating when the auction started. |
| end_date | [int](/type/int/) | UNIX timestamp indicating when the auction ended. |
| average_price | [long](/type/long/) | Average price of distributed gifts. |
| listed_count | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[int](/type/int/) | Number of gifts from the auction currently being resold on Telegram: if set, when the corresponding element is clicked in graphical clients, [payments.getResaleStarGifts](/method/payments.getResaleStarGifts/) should be invoked with the ID of the gift associated to this auction, see [here »](https://core.telegram.org/api/auctions) for more info. |
| fragment_listed_count | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[int](/type/int/) | Number of gifts from the auction currently being resold on [Fragment](https://fragment.com). |
| fragment_listed_url | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[string](/type/string/) | Only set if fragment_listed_count is set. If set, when the corresponding element is clicked in graphical clients, this URL should be opened. |

## Тип

[StarGiftAuctionState](/type/StarGiftAuctionState/)

## Related pages

#### [payments.getResaleStarGifts](/method/payments.getResaleStarGifts/)

Get [collectible gifts](https://core.telegram.org/api/gifts#collectible-gifts) of a specific type currently on resale, see [here »](https://core.telegram.org/api/gifts#reselling-collectible-gifts) for more info.

`sort_by_price` and `sort_by_num` are mutually exclusive, if neither are set results are sorted by the unixtime (descending) when their resell price was last changed.

See [here »](https://core.telegram.org/api/gifts#sending-gifts) for detailed documentation on this method.

#### [Collectible gift auctions](https://core.telegram.org/api/auctions)

New collectible gift releases are distributed through Stars auctions held over several rounds.
