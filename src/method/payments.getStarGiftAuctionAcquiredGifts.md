---
title: "payments.getStarGiftAuctionAcquiredGifts (метод)"
original: "https://core.telegram.org/method/payments.getStarGiftAuctionAcquiredGifts"
section: ref
kind: method
layout: layout.njk
---

# payments.getStarGiftAuctionAcquiredGifts

*Метод из схемы TL.*

> Fetches all the gifts that the current user won in an [auction](https://core.telegram.org/api/auctions).

## Определение TL

```
payments.starGiftAuctionAcquiredGifts#7d5bd1f0 gifts:Vector<StarGiftAuctionAcquiredGift> users:Vector<User> chats:Vector<Chat> = payments.StarGiftAuctionAcquiredGifts;
---functions---
payments.getStarGiftAuctionAcquiredGifts#6ba2cbec gift_id:long = payments.StarGiftAuctionAcquiredGifts;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| gift_id | [long](/type/long/) | The gift ID linked to the auction. |

## Результат

[payments.StarGiftAuctionAcquiredGifts](/type/payments.StarGiftAuctionAcquiredGifts/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | STARGIFT_INVALID | The passed gift is invalid. |

## Related pages

#### [Collectible gift auctions](https://core.telegram.org/api/auctions)

New collectible gift releases are distributed through Stars auctions held over several rounds.
