---
title: "account.sendVerifyPhoneCode (метод)"
original: "https://core.telegram.org/method/account.sendVerifyPhoneCode"
section: ref
kind: method
layout: layout.njk
---

# account.sendVerifyPhoneCode

*Метод из схемы TL.*

> Send the verification phone code for telegram [passport](https://core.telegram.org/passport).

## Определение TL

```
auth.sentCode#5e002502 flags:# type:auth.SentCodeType phone_code_hash:string next_type:flags.1?auth.CodeType timeout:flags.2?int = auth.SentCode;
auth.sentCodeSuccess#2390fe44 authorization:auth.Authorization = auth.SentCode;
auth.sentCodePaymentRequired#e0955a3c store_product:string phone_code_hash:string support_email_address:string support_email_subject:string currency:string amount:long = auth.SentCode;
---functions---
account.sendVerifyPhoneCode#a5a356f9 phone_number:string settings:CodeSettings = auth.SentCode;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| phone_number | [string](/type/string/) | The phone number to verify |
| settings | [CodeSettings](/type/CodeSettings/) | Phone code settings |

## Результат

[auth.SentCode](/type/auth.SentCode/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | PHONE_NUMBER_INVALID | The phone number is invalid. |

## Related pages

#### [Telegram Passport Manual](https://core.telegram.org/passport)

Telegram Passport, a unified authorization method for services that require personal identification.
