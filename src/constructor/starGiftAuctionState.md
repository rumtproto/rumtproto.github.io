---
title: "starGiftAuctionState (конструктор)"
original: "https://core.telegram.org/constructor/starGiftAuctionState"
section: ref
kind: constructor
layout: layout.njk
---

# starGiftAuctionState

*Конструктор из схемы TL.*

> Represents an active or pending [auction »](https://core.telegram.org/api/auctions).

## Определение TL

```
starGiftAuctionState#771a4e66 version:int start_date:int end_date:int min_bid_amount:long bid_levels:Vector<AuctionBidLevel> top_bidders:Vector<long> next_round_at:int last_gift_num:int gifts_left:int current_round:int total_rounds:int rounds:Vector<StarGiftAuctionRound> = StarGiftAuctionState;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| version | [int](/type/int/) | Only apply incoming [starGiftAuctionState](/constructor/starGiftAuctionState/) constructors if the received version is bigger than the locally cached version. |
| start_date | [int](/type/int/) | UNIX timestamp indicating when the auction will start (or when it started, if it's in the past). |
| end_date | [int](/type/int/) | UNIX timestamp indicating when the auction will end |
| min_bid_amount | [long](/type/long/) | Minumum allowed bid amount in [Telegram Stars](https://core.telegram.org/api/stars): only applicable if the user hasn't made a bid yet, otherwise must be overridden to the value of [starGiftAuctionUserState](/constructor/starGiftAuctionUserState/).min_bid_amount (which will be set if and only if the user already made a bid to this auction). |
| bid_levels | [Vector](https://core.telegram.org/type/Vector%20t)<[AuctionBidLevel](/type/AuctionBidLevel/)> | Contains a sparse list of bids starting from the top bids, a more detailed description is available in [the docs](https://core.telegram.org/api/auctions). |
| top_bidders | [Vector](https://core.telegram.org/type/Vector%20t)<[long](/type/long/)> | User IDs of the top 3 bidders (the [user](/constructor/user/) constructors will be returned as [min](https://core.telegram.org/api/min) constructors in the containing object). |
| next_round_at | [int](/type/int/) | UNIX timestamp indicating when the current auction round will end, distributing [starGift](/constructor/starGift/).gifts_per_round gifts to the top [starGift](/constructor/starGift/).gifts_per_round bidders. |
| last_gift_num | [int](/type/int/) | The number of gifts that were distributed in the previous round (also used to compute the approximated index of the gift that the current user will receive, last_gift_num + approx_pos, see [here »](https://core.telegram.org/api/auctions) for more info). |
| gifts_left | [int](/type/int/) | The remaining number of gifts that are yet to be distributed. |
| current_round | [int](/type/int/) | The current round number (starting from 1). |
| total_rounds | [int](/type/int/) | The total number of rounds in this auction. |
| rounds | [Vector](https://core.telegram.org/type/Vector%20t)<[StarGiftAuctionRound](/type/StarGiftAuctionRound/)> | Detailed round information. |

## Тип

[StarGiftAuctionState](/type/StarGiftAuctionState/)

## Related pages

#### [starGiftAuctionState](/constructor/starGiftAuctionState/)

Represents an active or pending [auction »](https://core.telegram.org/api/auctions).

#### [Telegram Stars](https://core.telegram.org/api/stars)

Telegram Stars are virtual items that allow users to purchase digital goods and services from bots and mini apps inside the Telegram ecosystem, send gifts to content creators on the Telegram platform, and more.

#### [starGiftAuctionUserState](/constructor/starGiftAuctionUserState/)

Contains information about the current user's state in an [auction »](https://core.telegram.org/api/auctions).

The `bid_amount`, `bid_date`, `bid_peer` and `min_bid_amount` flags of [starGiftAuctionUserState](/constructor/starGiftAuctionUserState/) will all be set if the user placed a bid in the auction.

#### [Collectible gift auctions](https://core.telegram.org/api/auctions)

New collectible gift releases are distributed through Stars auctions held over several rounds.

#### [user](/constructor/user/)

Indicates info about a certain user.

Unless specified otherwise, when updating the [local peer database](https://core.telegram.org/api/peers), all fields from the newly received constructor take priority over the old constructor cached locally (including by removing fields that aren't set in the new constructor).

See [here »](https://github.com/tdlib/td/blob/73035e4a69ed26df563652de14aa9c4c86d23420/td/telegram/UserManager.cpp#L3106) for an implementation of the logic to use when updating the [local user peer database](https://core.telegram.org/api/peers).

#### [Min constructors](https://core.telegram.org/api/min)

In some situations user and channel constructors have reduced set of fields present (although id is always there) and min flag set.

#### [starGift](/constructor/starGift/)

Represents a [star gift, see here »](https://core.telegram.org/api/gifts) for more info.
