---
title: "auth.resetAuthorizations (метод)"
original: "https://core.telegram.org/method/auth.resetAuthorizations"
section: ref
kind: method
layout: layout.njk
---

# auth.resetAuthorizations

*Метод из схемы TL.*

> Terminates all user's authorized sessions except for the current one.
> After calling this method it is necessary to reregister the current device using the method [account.registerDevice](/method/account.registerDevice/)

## Определение TL

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
auth.resetAuthorizations#9fab0d1a = Bool;
```

## Параметры

This constructor does not require any parameters.

## Результат

[Bool](/type/Bool/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 406 | FRESH_RESET_AUTHORISATION_FORBIDDEN | You can't logout other sessions if less than 24 hours have passed since you logged on the current session. |

## Related pages

#### [account.registerDevice](/method/account.registerDevice/)

Register device to receive [PUSH notifications](https://core.telegram.org/api/push-updates)
