---
title: "payments.starGiftAuctionAcquiredGifts (конструктор)"
original: "https://core.telegram.org/constructor/payments.starGiftAuctionAcquiredGifts"
section: ref
kind: constructor
layout: layout.njk
---

# payments.starGiftAuctionAcquiredGifts

*Конструктор из схемы TL.*

> Describes all the gifts that the current user won in an [auction](https://core.telegram.org/api/auctions).

## Определение TL

```
payments.starGiftAuctionAcquiredGifts#7d5bd1f0 gifts:Vector<StarGiftAuctionAcquiredGift> users:Vector<User> chats:Vector<Chat> = payments.StarGiftAuctionAcquiredGifts;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| gifts | [Vector](https://core.telegram.org/type/Vector%20t)<[StarGiftAuctionAcquiredGift](/type/StarGiftAuctionAcquiredGift/)> | The gifts |
| users | [Vector](https://core.telegram.org/type/Vector%20t)<[User](/type/User/)> | Mentioned users |
| chats | [Vector](https://core.telegram.org/type/Vector%20t)<[Chat](/type/Chat/)> | Mentioned chats |

## Тип

[payments.StarGiftAuctionAcquiredGifts](/type/payments.StarGiftAuctionAcquiredGifts/)

## Related pages

#### [Collectible gift auctions](https://core.telegram.org/api/auctions)

New collectible gift releases are distributed through Stars auctions held over several rounds.
