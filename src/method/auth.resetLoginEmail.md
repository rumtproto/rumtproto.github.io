---
title: "auth.resetLoginEmail (метод)"
original: "https://core.telegram.org/method/auth.resetLoginEmail"
section: ref
kind: method
layout: layout.njk
---

# auth.resetLoginEmail

*Метод из схемы TL.*

> Reset the [login email »](https://core.telegram.org/api/auth#email-verification).

## Определение TL

```
auth.sentCode#5e002502 flags:# type:auth.SentCodeType phone_code_hash:string next_type:flags.1?auth.CodeType timeout:flags.2?int = auth.SentCode;
auth.sentCodeSuccess#2390fe44 authorization:auth.Authorization = auth.SentCode;
auth.sentCodePaymentRequired#e0955a3c store_product:string phone_code_hash:string support_email_address:string support_email_subject:string currency:string amount:long = auth.SentCode;
---functions---
auth.resetLoginEmail#7e960193 phone_number:string phone_code_hash:string = auth.SentCode;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| phone_number | [string](/type/string/) | Phone number of the account |
| phone_code_hash | [string](/type/string/) | Phone code hash, obtained as described in the [documentation »](/api/auth/) |

## Результат

[auth.SentCode](/type/auth.SentCode/)

## Only users can use this method

## This method can be invoked over an unauthenticated connection »

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | EMAIL_INSTALL_MISSING | Attempting to send a code to the recovery email, but no email is configured. |
| 400 | PHONE_NUMBER_INVALID | The phone number is invalid. |
| 400 | TASK_ALREADY_EXISTS | An email reset was already requested. |

## Related pages

#### [User Authorization](/api/auth/)

How to register a user's phone to start using the API.
