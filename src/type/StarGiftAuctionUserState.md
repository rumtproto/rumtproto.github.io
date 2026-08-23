---
title: "StarGiftAuctionUserState (тип)"
original: "https://core.telegram.org/type/StarGiftAuctionUserState"
section: ref
kind: type
layout: layout.njk
---

# StarGiftAuctionUserState

*Тип из схемы TL.*

> Contains information about the current user's state in an [auction »](https://core.telegram.org/api/auctions).
> The `bid_amount`, `bid_date`, `bid_peer` and `min_bid_amount` flags of [starGiftAuctionUserState](/constructor/starGiftAuctionUserState/) will all be set if the user placed a bid in the auction.

## Определение TL

```
starGiftAuctionUserState#2eeed1c4 flags:# returned:flags.1?true bid_amount:flags.0?long bid_date:flags.0?int min_bid_amount:flags.0?long bid_peer:flags.0?Peer acquired_count:int = StarGiftAuctionUserState;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [starGiftAuctionUserState](/constructor/starGiftAuctionUserState/) | Contains information about the current user's state in an [auction »](https://core.telegram.org/api/auctions). The bid_amount, bid_date, bid_peer and min_bid_amount flags of [starGiftAuctionUserState](/constructor/starGiftAuctionUserState/) will all be set if the user placed a bid in the auction. |

## Related pages

#### [Collectible gift auctions](https://core.telegram.org/api/auctions)

New collectible gift releases are distributed through Stars auctions held over several rounds.

#### [starGiftAuctionUserState](/constructor/starGiftAuctionUserState/)

Contains information about the current user's state in an [auction »](https://core.telegram.org/api/auctions).

The `bid_amount`, `bid_date`, `bid_peer` and `min_bid_amount` flags of [starGiftAuctionUserState](/constructor/starGiftAuctionUserState/) will all be set if the user placed a bid in the auction.
