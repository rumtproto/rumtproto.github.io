---
title: "auth.checkPaidAuth (метод)"
original: "https://core.telegram.org/method/auth.checkPaidAuth"
section: ref
kind: method
layout: layout.njk
---

# auth.checkPaidAuth

*Метод из схемы TL.*

> Checks the status of a [login payment](https://core.telegram.org/api/auth/#paid-auth).

## Определение TL

```
auth.sentCode#5e002502 flags:# type:auth.SentCodeType phone_code_hash:string next_type:flags.1?auth.CodeType timeout:flags.2?int = auth.SentCode;
auth.sentCodeSuccess#2390fe44 authorization:auth.Authorization = auth.SentCode;
auth.sentCodePaymentRequired#e0955a3c store_product:string phone_code_hash:string support_email_address:string support_email_subject:string currency:string amount:long = auth.SentCode;
---functions---
auth.checkPaidAuth#56e59f9c phone_number:string phone_code_hash:string form_id:long = auth.SentCode;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| phone_number | [string](/type/string/) | Phone number |
| phone_code_hash | [string](/type/string/) | The phone code hash obtained from [auth.sendCode](/method/auth.sendCode/) |
| form_id | [long](/type/long/) | The payment form ID passed to [payments.sendPaymentForm](/method/payments.sendPaymentForm/). |

## Результат

[auth.SentCode](/type/auth.SentCode/)

## Only users can use this method

## This method can be invoked over an unauthenticated connection »

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | PHONE_NUMBER_INVALID | The phone number is invalid. |

## Related pages

#### [auth.sendCode](/method/auth.sendCode/)

Send the verification code for login

#### [payments.sendPaymentForm](/method/payments.sendPaymentForm/)

Send compiled payment form

#### [User Authorization](/api/auth/)

How to register a user's phone to start using the API.
