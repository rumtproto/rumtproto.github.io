---
title: "payments.getUniqueStarGift (метод)"
original: "https://core.telegram.org/method/payments.getUniqueStarGift"
section: ref
kind: method
layout: layout.njk
---

# payments.getUniqueStarGift

*Метод из схемы TL.*

> Obtain info about a [collectible gift »](https://core.telegram.org/api/gifts#collectible-gifts) using a slug obtained from a [collectible gift link »](https://core.telegram.org/api/links#collectible-gift-link).

## Определение TL

```
payments.uniqueStarGift#416c56e8 gift:StarGift chats:Vector<Chat> users:Vector<User> = payments.UniqueStarGift;
---functions---
payments.getUniqueStarGift#a1974d72 slug:string = payments.UniqueStarGift;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| slug | [string](/type/string/) | The slug. |

## Результат

[payments.UniqueStarGift](/type/payments.UniqueStarGift/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | STARGIFT_SLUG_INVALID | The specified gift slug is invalid. |

## Related pages

#### [Telegram Gifts](https://core.telegram.org/api/gifts)

Users can send Gifts to their friends. The recipients of gifts can display them on their profile pages or turn them into Telegram Stars ». Telegram Stars can be used for many things, including supporting creators and buying services in mini apps.

#### [Deep links](https://core.telegram.org/api/links)

Telegram clients must handle special tg:// and t.me deep links encountered in messages, link entities and in other apps by registering OS handlers.
