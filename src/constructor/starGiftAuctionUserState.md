---
title: "starGiftAuctionUserState (конструктор)"
original: "https://core.telegram.org/constructor/starGiftAuctionUserState"
section: ref
kind: constructor
layout: layout.njk
---

# starGiftAuctionUserState

*Конструктор из схемы TL.*

> Contains information about the current user's state in an [auction »](https://core.telegram.org/api/auctions).
> The `bid_amount`, `bid_date`, `bid_peer` and `min_bid_amount` flags of [starGiftAuctionUserState](/constructor/starGiftAuctionUserState/) will all be set if the user placed a bid in the auction.

## Определение TL

```
starGiftAuctionUserState#2eeed1c4 flags:# returned:flags.1?true bid_amount:flags.0?long bid_date:flags.0?int min_bid_amount:flags.0?long bid_peer:flags.0?Peer acquired_count:int = StarGiftAuctionUserState;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| returned | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[true](/constructor/true/) | If set, the placed bid was returned to the user, because it was outbid so much that it fell out of the top [starGiftAuctionState](/constructor/starGiftAuctionState/).gifts_left positions, meaning that even if no new bids are placed, the user will never receive any gifts, so the bid was completely removed from the auction, and in order to participate again the user must manually make a new bid. |
| bid_amount | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[long](/type/long/) | Contains the amount of the placed bid in [Telegram Stars](https://core.telegram.org/api/stars). |
| bid_date | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[int](/type/int/) | Contains a UNIX timestamp, indicating when the bid was placed. |
| min_bid_amount | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[long](/type/long/) | Contains the minumum allowed bid amount in [Telegram Stars](https://core.telegram.org/api/stars), if set overrides [starGiftAuctionState](/constructor/starGiftAuctionState/).min_bid_amount for the current user. |
| bid_peer | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[Peer](/type/Peer/) | Contains the peer that will receive the gift, if you end up winning this round |
| acquired_count | [int](/type/int/) | Contains the number of gifts that were purchased so far in the auction by the current user. |

## Тип

[StarGiftAuctionUserState](/type/StarGiftAuctionUserState/)

## Related pages

#### [starGiftAuctionState](/constructor/starGiftAuctionState/)

Represents an active or pending [auction »](https://core.telegram.org/api/auctions).

#### [Telegram Stars](https://core.telegram.org/api/stars)

Telegram Stars are virtual items that allow users to purchase digital goods and services from bots and mini apps inside the Telegram ecosystem, send gifts to content creators on the Telegram platform, and more.

#### [Collectible gift auctions](https://core.telegram.org/api/auctions)

New collectible gift releases are distributed through Stars auctions held over several rounds.

#### [starGiftAuctionUserState](/constructor/starGiftAuctionUserState/)

Contains information about the current user's state in an [auction »](https://core.telegram.org/api/auctions).

The `bid_amount`, `bid_date`, `bid_peer` and `min_bid_amount` flags of [starGiftAuctionUserState](/constructor/starGiftAuctionUserState/) will all be set if the user placed a bid in the auction.
