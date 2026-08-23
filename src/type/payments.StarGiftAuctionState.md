---
title: "Payments.StarGiftAuctionState (тип)"
original: "https://core.telegram.org/type/payments.StarGiftAuctionState"
section: ref
kind: type
layout: layout.njk
---

# Payments.StarGiftAuctionState

*Тип из схемы TL.*

> Describes a [collectible gift auction »](https://core.telegram.org/api/auctions).

## Определение TL

```
payments.starGiftAuctionState#6b39f4ec gift:StarGift state:StarGiftAuctionState user_state:StarGiftAuctionUserState timeout:int users:Vector<User> chats:Vector<Chat> = payments.StarGiftAuctionState;

---functions---

payments.getStarGiftAuctionState#5c9ff4d6 auction:InputStarGiftAuction version:int = payments.StarGiftAuctionState;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [payments.starGiftAuctionState](/constructor/payments.starGiftAuctionState/) | Describes a [collectible gift auction »](https://core.telegram.org/api/auctions). |

## Методы

| Method | Описание |
|---|---|
| [payments.getStarGiftAuctionState](/method/payments.getStarGiftAuctionState/) | Returns info about a [collectible gift auction »](https://core.telegram.org/api/auctions); also subscribes the user to auction updates, see [here »](https://core.telegram.org/api/auctions) for more info on the full flow. |

## Related pages

#### [Collectible gift auctions](https://core.telegram.org/api/auctions)

New collectible gift releases are distributed through Stars auctions held over several rounds.
