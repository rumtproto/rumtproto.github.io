---
title: "account.verifyPhone (метод)"
original: "https://core.telegram.org/method/account.verifyPhone"
section: ref
kind: method
layout: layout.njk
---

# account.verifyPhone

*Метод из схемы TL.*

> Verify a phone number for telegram [passport](https://core.telegram.org/passport).

## Определение TL

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
account.verifyPhone#4dd3a7f6 phone_number:string phone_code_hash:string phone_code:string = Bool;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| phone_number | [string](/type/string/) | Phone number |
| phone_code_hash | [string](/type/string/) | Phone code hash received from the call to [account.sendVerifyPhoneCode](/method/account.sendVerifyPhoneCode/) |
| phone_code | [string](/type/string/) | Code received after the call to [account.sendVerifyPhoneCode](/method/account.sendVerifyPhoneCode/) |

## Результат

[Bool](/type/Bool/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | PHONE_CODE_EMPTY | phone_code is missing. |
| 400 | PHONE_CODE_EXPIRED | The phone code you provided has expired. |
| 400 | PHONE_NUMBER_INVALID | The phone number is invalid. |

## Related pages

#### [account.sendVerifyPhoneCode](/method/account.sendVerifyPhoneCode/)

Send the verification phone code for telegram [passport](https://core.telegram.org/passport).

#### [Telegram Passport Manual](https://core.telegram.org/passport)

Telegram Passport, a unified authorization method for services that require personal identification.
