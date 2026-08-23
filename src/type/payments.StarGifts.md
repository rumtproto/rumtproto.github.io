---
title: "payments.StarGifts (тип)"
original: "https://core.telegram.org/type/payments.StarGifts"
section: ref
kind: type
layout: layout.njk
---

# payments.StarGifts

*Тип из схемы TL.*

> Available [gifts »](https://core.telegram.org/api/gifts).

## Определение TL

```
payments.starGiftsNotModified#a388a368 = payments.StarGifts;
payments.starGifts#2ed82995 hash:int gifts:Vector<StarGift> chats:Vector<Chat> users:Vector<User> = payments.StarGifts;

---functions---

payments.getStarGifts#c4563590 hash:int = payments.StarGifts;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [payments.starGiftsNotModified](/constructor/payments.starGiftsNotModified/) | The list of available [gifts »](https://core.telegram.org/api/gifts) hasn't changed. |
| [payments.starGifts](/constructor/payments.starGifts/) | Available [gifts »](https://core.telegram.org/api/gifts). |

## Методы

| Method | Описание |
|---|---|
| [payments.getStarGifts](/method/payments.getStarGifts/) | Get a list of available [gifts, see here »](https://core.telegram.org/api/gifts) for more info. |

## Related pages

#### [Telegram Gifts](https://core.telegram.org/api/gifts)

Users can send Gifts to their friends. The recipients of gifts can display them on their profile pages or turn them into Telegram Stars ». Telegram Stars can be used for many things, including supporting creators and buying services in mini apps.
