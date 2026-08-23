---
title: "account.updateDeviceLocked (метод)"
original: "https://core.telegram.org/method/account.updateDeviceLocked"
section: ref
kind: method
layout: layout.njk
---

# account.updateDeviceLocked

*Метод из схемы TL.*

> When client-side passcode lock feature is enabled, will not show message texts in incoming [PUSH notifications](https://core.telegram.org/api/push-updates).

## Определение TL

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
account.updateDeviceLocked#38df3532 period:int = Bool;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| period | [int](/type/int/) | Inactivity period after which to start hiding message texts in [PUSH notifications](https://core.telegram.org/api/push-updates). |

## Результат

[Bool](/type/Bool/)

## Only users can use this method

## Related pages

#### [Handling PUSH-notifications](https://core.telegram.org/api/push-updates)

How to subscribe to and handle PUSH notifications
