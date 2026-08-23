---
title: "account.sendConfirmPhoneCode (метод)"
original: "https://core.telegram.org/method/account.sendConfirmPhoneCode"
section: ref
kind: method
layout: layout.njk
---

# account.sendConfirmPhoneCode

*Метод из схемы TL.*

> Send confirmation code to cancel account deletion, for more info [click here »](https://core.telegram.org/api/account-deletion)

## Определение TL

```
auth.sentCode#5e002502 flags:# type:auth.SentCodeType phone_code_hash:string next_type:flags.1?auth.CodeType timeout:flags.2?int = auth.SentCode;
auth.sentCodeSuccess#2390fe44 authorization:auth.Authorization = auth.SentCode;
auth.sentCodePaymentRequired#e0955a3c store_product:string phone_code_hash:string support_email_address:string support_email_subject:string currency:string amount:long = auth.SentCode;
---functions---
account.sendConfirmPhoneCode#1b3faa88 hash:string settings:CodeSettings = auth.SentCode;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| hash | [string](/type/string/) | The hash from the service notification, for more info [click here »](https://core.telegram.org/api/account-deletion) |
| settings | [CodeSettings](/type/CodeSettings/) | Phone code settings |

## Результат

[auth.SentCode](/type/auth.SentCode/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | HASH_INVALID | The provided hash is invalid. |

## Related pages

#### [Account deletion](https://core.telegram.org/api/account-deletion)

How to reset an account if the 2FA password was forgotten.
