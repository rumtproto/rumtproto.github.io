---
title: "updateBotPurchasedPaidMedia (конструктор)"
original: "https://core.telegram.org/constructor/updateBotPurchasedPaidMedia"
section: ref
kind: constructor
layout: layout.njk
---

# updateBotPurchasedPaidMedia

*Конструктор из схемы TL.*

> Bots only: a user has purchased a [paid media](https://core.telegram.org/api/paid-media).

## Определение TL

```
updateBotPurchasedPaidMedia#283bd312 user_id:long payload:string qts:int = Update;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| user_id | [long](/type/long/) | The user that bought the media |
| payload | [string](/type/string/) | Payload passed by the bot in [inputMediaPaidMedia](/constructor/inputMediaPaidMedia/).payload |
| qts | [int](/type/int/) | New qts value, see [updates »](/api/updates/) for more info. |

## Тип

[Update](/type/Update/)

## Related pages

#### [inputMediaPaidMedia](/constructor/inputMediaPaidMedia/)

[Paid media, see here »](https://core.telegram.org/api/paid-media) for more info.

#### [Working with Updates](/api/updates/)

How to subscribe to updates and handle them properly.

#### [Paid media](https://core.telegram.org/api/paid-media)

Content creators can accept Stars by publishing paid photos or videos on their channels. Subscribers will be allowed to view such posts only after paying the author to unlock them.
