---
title: "Payments.StarGiftAuctionAcquiredGifts (тип)"
original: "https://core.telegram.org/type/payments.StarGiftAuctionAcquiredGifts"
section: ref
kind: type
layout: layout.njk
---

# Payments.StarGiftAuctionAcquiredGifts

*Тип из схемы TL.*

> Describes all the gifts that the current user won in an [auction](https://core.telegram.org/api/auctions).

## Определение TL

```
payments.starGiftAuctionAcquiredGifts#7d5bd1f0 gifts:Vector<StarGiftAuctionAcquiredGift> users:Vector<User> chats:Vector<Chat> = payments.StarGiftAuctionAcquiredGifts;

---functions---

payments.getStarGiftAuctionAcquiredGifts#6ba2cbec gift_id:long = payments.StarGiftAuctionAcquiredGifts;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [payments.starGiftAuctionAcquiredGifts](/constructor/payments.starGiftAuctionAcquiredGifts/) | Describes all the gifts that the current user won in an [auction](https://core.telegram.org/api/auctions). |

## Методы

| Method | Описание |
|---|---|
| [payments.getStarGiftAuctionAcquiredGifts](/method/payments.getStarGiftAuctionAcquiredGifts/) | Fetches all the gifts that the current user won in an [auction](https://core.telegram.org/api/auctions). |

## Related pages

#### [Collectible gift auctions](https://core.telegram.org/api/auctions)

New collectible gift releases are distributed through Stars auctions held over several rounds.
