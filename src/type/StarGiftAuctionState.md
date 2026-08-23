---
title: "StarGiftAuctionState (тип)"
original: "https://core.telegram.org/type/StarGiftAuctionState"
section: ref
kind: type
layout: layout.njk
---

# StarGiftAuctionState

*Тип из схемы TL.*

> State of a [collectible gift auction »](https://core.telegram.org/api/auctions): active/pending, finished, or unchanged with respect to a locally cached version.

## Определение TL

```
starGiftAuctionStateNotModified#fe333952 = StarGiftAuctionState;
starGiftAuctionState#771a4e66 version:int start_date:int end_date:int min_bid_amount:long bid_levels:Vector<AuctionBidLevel> top_bidders:Vector<long> next_round_at:int last_gift_num:int gifts_left:int current_round:int total_rounds:int rounds:Vector<StarGiftAuctionRound> = StarGiftAuctionState;
starGiftAuctionStateFinished#972dabbf flags:# start_date:int end_date:int average_price:long listed_count:flags.0?int fragment_listed_count:flags.1?int fragment_listed_url:flags.1?string = StarGiftAuctionState;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [starGiftAuctionStateNotModified](/constructor/starGiftAuctionStateNotModified/) | Returned only by auction methods (never by updates) if the passed version is equal to the remote [auction »](https://core.telegram.org/api/auctions).version, meaning auction information hasn't changed over the locally cached version. |
| [starGiftAuctionState](/constructor/starGiftAuctionState/) | Represents an active or pending [auction »](https://core.telegram.org/api/auctions). |
| [starGiftAuctionStateFinished](/constructor/starGiftAuctionStateFinished/) | Represents a finished [auction »](https://core.telegram.org/api/auctions). |

## Related pages

#### [Collectible gift auctions](https://core.telegram.org/api/auctions)

New collectible gift releases are distributed through Stars auctions held over several rounds.
