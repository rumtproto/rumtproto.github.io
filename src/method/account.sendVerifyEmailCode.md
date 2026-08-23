---
title: "account.sendVerifyEmailCode (метод)"
original: "https://core.telegram.org/method/account.sendVerifyEmailCode"
section: ref
kind: method
layout: layout.njk
---

# account.sendVerifyEmailCode

*Метод из схемы TL.*

> Send an email verification code.

## Определение TL

```
account.sentEmailCode#811f854f email_pattern:string length:int = account.SentEmailCode;
---functions---
account.sendVerifyEmailCode#98e037bb purpose:EmailVerifyPurpose email:string = account.SentEmailCode;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| purpose | [EmailVerifyPurpose](/type/EmailVerifyPurpose/) | Verification purpose. |
| email | [string](/type/string/) | The email where to send the code. |

## Результат

[account.SentEmailCode](/type/account.SentEmailCode/)

## Only users can use this method

## This method can be invoked over an unauthenticated connection »

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | EMAIL_INVALID | The specified email is invalid. |
| 400 | EMAIL_NOT_ALLOWED | The specified email cannot be used to complete the operation. |
| 400 | EMAIL_NOT_SETUP | In order to change the login email with emailVerifyPurposeLoginChange, an existing login email must already be set using emailVerifyPurposeLoginSetup. |
| 400 | PHONE_CODE_EMPTY | phone_code is missing. |
| 400 | PHONE_HASH_EXPIRED | An invalid or expired phone_code_hash was provided. |
| 400 | PHONE_NUMBER_INVALID | The phone number is invalid. |
