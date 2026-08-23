---
title: "starGiftActiveAuctionState (конструктор)"
original: "https://core.telegram.org/constructor/starGiftActiveAuctionState"
section: ref
kind: constructor
layout: layout.njk
---

# starGiftActiveAuctionState

*Конструктор из схемы TL.*

> Contains info about [an auction where the user has placed a bid »](https://core.telegram.org/api/auctions).

## Определение TL

```
starGiftActiveAuctionState#d31bc45d gift:StarGift state:StarGiftAuctionState user_state:StarGiftAuctionUserState = StarGiftActiveAuctionState;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| gift | [StarGift](/type/StarGift/) | The [collectible gift »](https://core.telegram.org/api/gifts#collectible-gifts) currently being distributed in the auction. |
| state | [StarGiftAuctionState](/type/StarGiftAuctionState/) | Auction state |
| user_state | [StarGiftAuctionUserState](/type/StarGiftAuctionUserState/) | Auction state related to the current user (i.e. info about placed bids, won gifts and so on). |

## Тип

[StarGiftActiveAuctionState](/type/StarGiftActiveAuctionState/)

## Related pages

#### [Telegram Gifts](https://core.telegram.org/api/gifts)

Users can send Gifts to their friends. The recipients of gifts can display them on their profile pages or turn them into Telegram Stars ». Telegram Stars can be used for many things, including supporting creators and buying services in mini apps.

#### [Collectible gift auctions](https://core.telegram.org/api/auctions)

New collectible gift releases are distributed through Stars auctions held over several rounds.
