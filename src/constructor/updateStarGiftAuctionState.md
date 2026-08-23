---
title: "updateStarGiftAuctionState (конструктор)"
original: "https://core.telegram.org/constructor/updateStarGiftAuctionState"
section: ref
kind: constructor
layout: layout.njk
---

# updateStarGiftAuctionState

*Конструктор из схемы TL.*

> Contains updates to [auction state, see here »](https://core.telegram.org/api/auctions) for more info on how to enable these updates.

## Определение TL

```
updateStarGiftAuctionState#48e246c2 gift_id:long state:StarGiftAuctionState = Update;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| gift_id | [long](/type/long/) | ID of the [collectible gift »](https://core.telegram.org/api/gifts#collectible-gifts) currently being distributed in the auction. |
| state | [StarGiftAuctionState](/type/StarGiftAuctionState/) | Auction state. |

## Тип

[Update](/type/Update/)

## Related pages

#### [Telegram Gifts](https://core.telegram.org/api/gifts)

Users can send Gifts to their friends. The recipients of gifts can display them on their profile pages or turn them into Telegram Stars ». Telegram Stars can be used for many things, including supporting creators and buying services in mini apps.

#### [Collectible gift auctions](https://core.telegram.org/api/auctions)

New collectible gift releases are distributed through Stars auctions held over several rounds.
