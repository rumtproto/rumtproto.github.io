---
title: "account.resendPasswordEmail (метод)"
original: "https://core.telegram.org/method/account.resendPasswordEmail"
section: ref
kind: method
layout: layout.njk
---

# account.resendPasswordEmail

*Метод из схемы TL.*

> Resend the code to verify an email to use as [2FA recovery method](/api/srp/).

## Определение TL

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
account.resendPasswordEmail#7a7f2a15 = Bool;
```

## Параметры

This constructor does not require any parameters.

## Результат

[Bool](/type/Bool/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | EMAIL_HASH_EXPIRED | Email hash expired. |

## Related pages

#### [Two-factor authentication](/api/srp/)

How to login to a user's account if they have enabled 2FA, how to change password.
