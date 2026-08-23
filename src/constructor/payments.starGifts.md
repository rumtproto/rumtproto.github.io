---
title: "payments.starGifts (конструктор)"
original: "https://core.telegram.org/constructor/payments.starGifts"
section: ref
kind: constructor
layout: layout.njk
---

# payments.starGifts

*Конструктор из схемы TL.*

> Available [gifts »](https://core.telegram.org/api/gifts).

## Определение TL

```
payments.starGifts#2ed82995 hash:int gifts:Vector<StarGift> chats:Vector<Chat> users:Vector<User> = payments.StarGifts;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| hash | [int](/type/int/) | [Hash used for caching, for more info click here](https://core.telegram.org/api/offsets#hash-generation) |
| gifts | [Vector](https://core.telegram.org/type/Vector%20t)<[StarGift](/type/StarGift/)> | List of available gifts. |
| chats | [Vector](https://core.telegram.org/type/Vector%20t)<[Chat](/type/Chat/)> | Chats mentioned in the gifts field. |
| users | [Vector](https://core.telegram.org/type/Vector%20t)<[User](/type/User/)> | Users mentioned in the gifts field. |

## Тип

[payments.StarGifts](/type/payments.StarGifts/)

## Related pages

#### [Pagination in the API](https://core.telegram.org/api/offsets)

How to fetch results from large lists of objects.

#### [Telegram Gifts](https://core.telegram.org/api/gifts)

Users can send Gifts to their friends. The recipients of gifts can display them on their profile pages or turn them into Telegram Stars ». Telegram Stars can be used for many things, including supporting creators and buying services in mini apps.
