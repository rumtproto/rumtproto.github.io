---
title: "account.verifyEmail (метод)"
original: "https://core.telegram.org/method/account.verifyEmail"
section: ref
kind: method
layout: layout.njk
---

# account.verifyEmail

*Метод из схемы TL.*

> Verify an email address.

## Определение TL

```
account.emailVerified#2b96cd1b email:string = account.EmailVerified;
account.emailVerifiedLogin#e1bb0d61 email:string sent_code:auth.SentCode = account.EmailVerified;
---functions---
account.verifyEmail#32da4cf purpose:EmailVerifyPurpose verification:EmailVerification = account.EmailVerified;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| purpose | [EmailVerifyPurpose](/type/EmailVerifyPurpose/) | Verification purpose |
| verification | [EmailVerification](/type/EmailVerification/) | Email verification code or token |

## Результат

[account.EmailVerified](/type/account.EmailVerified/)

## Only users can use this method

## This method can be invoked over an unauthenticated connection »

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | CODE_INVALID | Code invalid. |
| 400 | EMAIL_INVALID | The specified email is invalid. |
| 400 | EMAIL_NOT_ALLOWED | The specified email cannot be used to complete the operation. |
| 400 | EMAIL_VERIFY_EXPIRED | The verification email has expired. |
| 400 | PHONE_CODE_EXPIRED | The phone code you provided has expired. |
| 400 | PHONE_NUMBER_INVALID | The phone number is invalid. |
