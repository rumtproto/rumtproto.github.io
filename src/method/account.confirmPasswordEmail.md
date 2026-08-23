---
title: "account.confirmPasswordEmail (метод)"
original: "https://core.telegram.org/method/account.confirmPasswordEmail"
section: ref
kind: method
layout: layout.njk
---

# account.confirmPasswordEmail

*Метод из схемы TL.*

> Verify an email to use as [2FA recovery method](/api/srp/).

## Определение TL

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
account.confirmPasswordEmail#8fdf1920 code:string = Bool;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| code | [string](/type/string/) | The phone code that was received after [setting a recovery email](https://core.telegram.org/api/srp/#email-verification) |

## Результат

[Bool](/type/Bool/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | CODE_INVALID | Code invalid. |
| 400 | EMAIL_HASH_EXPIRED | Email hash expired. |

## Related pages

#### [Two-factor authentication](/api/srp/)

How to login to a user's account if they have enabled 2FA, how to change password.
