---
title: "auth.sendCode (метод)"
original: "https://core.telegram.org/method/auth.sendCode"
section: ref
kind: method
layout: layout.njk
---

# auth.sendCode

*Метод из схемы TL.*

> Send the verification code for login

## Определение TL

```
auth.sentCode#5e002502 flags:# type:auth.SentCodeType phone_code_hash:string next_type:flags.1?auth.CodeType timeout:flags.2?int = auth.SentCode;
auth.sentCodeSuccess#2390fe44 authorization:auth.Authorization = auth.SentCode;
auth.sentCodePaymentRequired#e0955a3c store_product:string phone_code_hash:string support_email_address:string support_email_subject:string currency:string amount:long = auth.SentCode;
---functions---
auth.sendCode#a677244f phone_number:string api_id:int api_hash:string settings:CodeSettings = auth.SentCode;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| phone_number | [string](/type/string/) | Phone number in international format |
| api_id | [int](/type/int/) | Application identifier (see [App configuration](https://core.telegram.org/myapp)) |
| api_hash | [string](/type/string/) | Application secret hash (see [App configuration](https://core.telegram.org/myapp)) |
| settings | [CodeSettings](/type/CodeSettings/) | Settings for the code type to send |

## Результат

[auth.SentCode](/type/auth.SentCode/)

## Only users can use this method

## This method can be invoked over an unauthenticated connection »

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | API_ID_INVALID | API ID invalid. |
| 400 | API_ID_PUBLISHED_FLOOD | This API id was published somewhere, you can't use it now. |
| 500 | AUTH_RESTART | Restart the authorization process. |
| 500 | AUTH_RESTART_%d | Internal error (debug info %d), please repeat the method call. |
| 400 | PHONE_NUMBER_APP_SIGNUP_FORBIDDEN | You can't sign up using this app. |
| 400 | PHONE_NUMBER_BANNED | The provided phone number is banned from telegram. |
| 400 | PHONE_NUMBER_FLOOD | You asked for the code too many times. |
| 406 | PHONE_NUMBER_INVALID | The phone number is invalid. |
| 406 | PHONE_PASSWORD_FLOOD | You have tried logging in too many times. |
| 400 | PHONE_PASSWORD_PROTECTED | This phone is password protected. |
| 400 | SMS_CODE_CREATE_FAILED | An error occurred while creating the SMS code. |
| 406 | UPDATE_APP_TO_LOGIN | Please update your client to login. |
