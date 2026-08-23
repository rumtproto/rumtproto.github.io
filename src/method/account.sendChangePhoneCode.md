---
title: "account.sendChangePhoneCode (метод)"
original: "https://core.telegram.org/method/account.sendChangePhoneCode"
section: ref
kind: method
layout: layout.njk
---

# account.sendChangePhoneCode

*Метод из схемы TL.*

> Verify a new phone number to associate to the current account

## Определение TL

```
auth.sentCode#5e002502 flags:# type:auth.SentCodeType phone_code_hash:string next_type:flags.1?auth.CodeType timeout:flags.2?int = auth.SentCode;
auth.sentCodeSuccess#2390fe44 authorization:auth.Authorization = auth.SentCode;
auth.sentCodePaymentRequired#e0955a3c store_product:string phone_code_hash:string support_email_address:string support_email_subject:string currency:string amount:long = auth.SentCode;
---functions---
account.sendChangePhoneCode#82574ae5 phone_number:string settings:CodeSettings = auth.SentCode;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| phone_number | [string](/type/string/) | New phone number |
| settings | [CodeSettings](/type/CodeSettings/) | Phone code settings |

## Результат

[auth.SentCode](/type/auth.SentCode/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 406 | FRESH_CHANGE_PHONE_FORBIDDEN | You can't change phone number right after logging in, please wait at least 24 hours. |
| 400 | PHONE_NUMBER_BANNED | The provided phone number is banned from telegram. |
| 406 | PHONE_NUMBER_INVALID | The phone number is invalid. |
| 400 | PHONE_NUMBER_OCCUPIED | The phone number is already in use. |
