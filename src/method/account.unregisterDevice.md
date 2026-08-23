---
title: "account.unregisterDevice (метод)"
original: "https://core.telegram.org/method/account.unregisterDevice"
section: ref
kind: method
layout: layout.njk
---

# account.unregisterDevice

*Метод из схемы TL.*

> Deletes a device by its token, stops sending PUSH-notifications to it.

## Определение TL

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
account.unregisterDevice#6a0d3206 token_type:int token:string other_uids:Vector<long> = Bool;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| token_type | [int](/type/int/) | Device token type, see [PUSH updates](https://core.telegram.org/api/push-updates#subscribing-to-notifications) for the possible values. |
| token | [string](/type/string/) | Device token, see [PUSH updates](https://core.telegram.org/api/push-updates#subscribing-to-notifications) for the possible values. |
| other_uids | [Vector](https://core.telegram.org/type/Vector%20t)<[long](/type/long/)> | List of user identifiers of other users currently using the client |

## Результат

[Bool](/type/Bool/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | TOKEN_INVALID | The provided token is invalid. |

## Related pages

#### [Handling PUSH-notifications](https://core.telegram.org/api/push-updates)

How to subscribe to and handle PUSH notifications
