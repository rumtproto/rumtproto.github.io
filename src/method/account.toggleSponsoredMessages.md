---
title: "account.toggleSponsoredMessages (метод)"
original: "https://core.telegram.org/method/account.toggleSponsoredMessages"
section: ref
kind: method
layout: layout.njk
---

# account.toggleSponsoredMessages

*Метод из схемы TL.*

> Disable or re-enable Telegram ads for the current [Premium](https://core.telegram.org/api/premium) account.
> Useful for business owners that may want to launch and view their own Telegram ads via the [Telegram ad platform »](https://ads.telegram.org).

## Определение TL

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
account.toggleSponsoredMessages#b9d9a38d enabled:Bool = Bool;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| enabled | [Bool](/type/Bool/) | Enable or disable ads. |

## Результат

[Bool](/type/Bool/)

## Only users can use this method

## Related pages

#### [Telegram Premium](https://core.telegram.org/api/premium)

Telegram Premium is an optional subscription service that unlocks additional exclusive client-side and API-side features, while helping support the development of the app.
