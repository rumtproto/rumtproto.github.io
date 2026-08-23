---
title: "payments.getStarGifts (метод)"
original: "https://core.telegram.org/method/payments.getStarGifts"
section: ref
kind: method
layout: layout.njk
---

# payments.getStarGifts

*Метод из схемы TL.*

> Get a list of available [gifts, see here »](https://core.telegram.org/api/gifts) for more info.

## Определение TL

```
payments.starGiftsNotModified#a388a368 = payments.StarGifts;
payments.starGifts#2ed82995 hash:int gifts:Vector<StarGift> chats:Vector<Chat> users:Vector<User> = payments.StarGifts;
---functions---
payments.getStarGifts#c4563590 hash:int = payments.StarGifts;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| hash | [int](/type/int/) | [Hash used for caching, for more info click here](https://core.telegram.org/api/offsets#hash-generation). The hash may be generated locally by using the ids of the returned or stored sticker [starGift](/constructor/starGift/)s. |

## Результат

[payments.StarGifts](/type/payments.StarGifts/)

## Both users and bots can use this method

## Related pages

#### [Pagination in the API](https://core.telegram.org/api/offsets)

How to fetch results from large lists of objects.

#### [starGift](/constructor/starGift/)

Represents a [star gift, see here »](https://core.telegram.org/api/gifts) for more info.

#### [Telegram Gifts](https://core.telegram.org/api/gifts)

Users can send Gifts to their friends. The recipients of gifts can display them on their profile pages or turn them into Telegram Stars ». Telegram Stars can be used for many things, including supporting creators and buying services in mini apps.
