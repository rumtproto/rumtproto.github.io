---
title: "payments.checkCanSendGift (метод)"
original: "https://core.telegram.org/method/payments.checkCanSendGift"
section: ref
kind: method
layout: layout.njk
---

# payments.checkCanSendGift

*Метод из схемы TL.*

> Check if the specified [gift »](https://core.telegram.org/api/gifts) can be sent.

## Определение TL

```
payments.checkCanSendGiftResultOk#374fa7ad = payments.CheckCanSendGiftResult;
payments.checkCanSendGiftResultFail#d5e58274 reason:TextWithEntities = payments.CheckCanSendGiftResult;
---functions---
payments.checkCanSendGift#c0c4edc9 gift_id:long = payments.CheckCanSendGiftResult;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| gift_id | [long](/type/long/) | Gift ID. |

## Результат

[payments.CheckCanSendGiftResult](/type/payments.CheckCanSendGiftResult/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | STARGIFT_INVALID | The passed gift is invalid. |

## Related pages

#### [Telegram Gifts](https://core.telegram.org/api/gifts)

Users can send Gifts to their friends. The recipients of gifts can display them on their profile pages or turn them into Telegram Stars ». Telegram Stars can be used for many things, including supporting creators and buying services in mini apps.
