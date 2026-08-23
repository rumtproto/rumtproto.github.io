---
title: "inputPrivacyKeyStatusTimestamp (конструктор)"
original: "https://core.telegram.org/constructor/inputPrivacyKeyStatusTimestamp"
section: ref
kind: constructor
layout: layout.njk
---

# inputPrivacyKeyStatusTimestamp

*Конструктор из схемы TL.*

> Whether people will be able to see our exact last online timestamp.
> Note that if _we_ decide to hide our exact last online timestamp to someone (i.e., users A, B, C, or all users) **and** we do not have a [Premium](https://core.telegram.org/api/premium) subscription, we won't be able to see the exact last online timestamp of those users (A, B, C, or all users), even if those users _do_ share it with us.
> If those users _do_ share their exact online status with us, but we can't see it due to the reason mentioned above, the `by_me` flag of [userStatusRecently](/constructor/userStatusRecently/), [userStatusLastWeek](/constructor/userStatusLastWeek/), [userStatusLastMonth](/constructor/userStatusLastMonth/) will be set.

## Определение TL

```
inputPrivacyKeyStatusTimestamp#4f96cb18 = InputPrivacyKey;
```

## Параметры

This constructor does not require any parameters.

## Тип

[InputPrivacyKey](/type/InputPrivacyKey/)

## Related pages

#### [Telegram Premium](https://core.telegram.org/api/premium)

Telegram Premium is an optional subscription service that unlocks additional exclusive client-side and API-side features, while helping support the development of the app.

#### [userStatusRecently](/constructor/userStatusRecently/)

Online status: last seen recently

#### [userStatusLastWeek](/constructor/userStatusLastWeek/)

Online status: last seen last week

#### [userStatusLastMonth](/constructor/userStatusLastMonth/)

Online status: last seen last month
