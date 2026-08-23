---
title: "payments.UniqueStarGift (тип)"
original: "https://core.telegram.org/type/payments.UniqueStarGift"
section: ref
kind: type
layout: layout.njk
---

# payments.UniqueStarGift

*Тип из схемы TL.*

> Represents a [collectible gift »](https://core.telegram.org/api/gifts#collectible-gifts).

## Определение TL

```
payments.uniqueStarGift#416c56e8 gift:StarGift chats:Vector<Chat> users:Vector<User> = payments.UniqueStarGift;

---functions---

payments.getUniqueStarGift#a1974d72 slug:string = payments.UniqueStarGift;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [payments.uniqueStarGift](/constructor/payments.uniqueStarGift/) | Represents a [collectible gift »](https://core.telegram.org/api/gifts#collectible-gifts). |

## Методы

| Method | Описание |
|---|---|
| [payments.getUniqueStarGift](/method/payments.getUniqueStarGift/) | Obtain info about a [collectible gift »](https://core.telegram.org/api/gifts#collectible-gifts) using a slug obtained from a [collectible gift link »](https://core.telegram.org/api/links#collectible-gift-link). |

## Related pages

#### [Telegram Gifts](https://core.telegram.org/api/gifts)

Users can send Gifts to their friends. The recipients of gifts can display them on their profile pages or turn them into Telegram Stars ». Telegram Stars can be used for many things, including supporting creators and buying services in mini apps.
