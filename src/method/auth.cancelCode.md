---
title: "auth.cancelCode (метод)"
original: "https://core.telegram.org/method/auth.cancelCode"
section: ref
kind: method
layout: layout.njk
---

# auth.cancelCode

*Метод из схемы TL.*

> Cancel the login verification code

## Определение TL

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
auth.cancelCode#1f040578 phone_number:string phone_code_hash:string = Bool;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| phone_number | [string](/type/string/) | Phone number |
| phone_code_hash | [string](/type/string/) | Phone code hash from [auth.sendCode](/method/auth.sendCode/) |

## Результат

[Bool](/type/Bool/)

## Only users can use this method

## This method can be invoked over an unauthenticated connection »

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | PHONE_CODE_EXPIRED | The phone code you provided has expired. |
| 406 | PHONE_NUMBER_INVALID | The phone number is invalid. |

## Related pages

#### [auth.sendCode](/method/auth.sendCode/)

Send the verification code for login
