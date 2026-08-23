---
title: "auth.reportMissingCode (метод)"
original: "https://core.telegram.org/method/auth.reportMissingCode"
section: ref
kind: method
layout: layout.njk
---

# auth.reportMissingCode

*Метод из схемы TL.*

> Official apps only, reports that the SMS authentication code wasn't delivered.

## Определение TL

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
auth.reportMissingCode#cb9deff6 phone_number:string phone_code_hash:string mnc:string = Bool;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| phone_number | [string](/type/string/) | Phone number where we were supposed to receive the code |
| phone_code_hash | [string](/type/string/) | The phone code hash obtained from [auth.sendCode](/method/auth.sendCode/) |
| mnc | [string](/type/string/) | [MNC](https://en.wikipedia.org/wiki/Mobile_country_code) of the current network operator. |

## Результат

[Bool](/type/Bool/)

## Only users can use this method

## This method can be invoked over an unauthenticated connection »

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | PHONE_NUMBER_INVALID | The phone number is invalid. |

## Related pages

#### [auth.sendCode](/method/auth.sendCode/)

Send the verification code for login
