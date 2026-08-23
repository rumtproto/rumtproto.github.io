---
title: "payments.starGiftAuctionState (конструктор)"
original: "https://core.telegram.org/constructor/payments.starGiftAuctionState"
section: ref
kind: constructor
layout: layout.njk
---

# payments.starGiftAuctionState

*Конструктор из схемы TL.*

> Describes a [collectible gift auction »](https://core.telegram.org/api/auctions).

## Определение TL

```
payments.starGiftAuctionState#6b39f4ec gift:StarGift state:StarGiftAuctionState user_state:StarGiftAuctionUserState timeout:int users:Vector<User> chats:Vector<Chat> = payments.StarGiftAuctionState;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| gift | [StarGift](/type/StarGift/) | The gift currently being distributed in the auction. |
| state | [StarGiftAuctionState](/type/StarGiftAuctionState/) | Auction state. |
| user_state | [StarGiftAuctionUserState](/type/StarGiftAuctionUserState/) | Auction state related to the current user (i.e. info about placed bids, won gifts, and so on). |
| timeout | [int](/type/int/) | Re-invoke the [payments.getStarGiftAuctionState](/method/payments.getStarGiftAuctionState/) method after timeout seconds to keep receiving auction updates, see [here »](https://core.telegram.org/api/auctions) for more info on the full flow. |
| users | [Vector](https://core.telegram.org/type/Vector%20t)<[User](/type/User/)> | Mentioned users |
| chats | [Vector](https://core.telegram.org/type/Vector%20t)<[Chat](/type/Chat/)> | Mentioned chats |

## Тип

[payments.StarGiftAuctionState](/type/payments.StarGiftAuctionState/)

## Related pages

#### [payments.getStarGiftAuctionState](/method/payments.getStarGiftAuctionState/)

Returns info about a [collectible gift auction »](https://core.telegram.org/api/auctions); also subscribes the user to auction updates, see [here »](https://core.telegram.org/api/auctions) for more info on the full flow.

#### [Collectible gift auctions](https://core.telegram.org/api/auctions)

New collectible gift releases are distributed through Stars auctions held over several rounds.
