---
title: "auth.resendCode (метод)"
original: "https://core.telegram.org/method/auth.resendCode"
section: ref
kind: method
layout: layout.njk
---

# auth.resendCode

*Метод из схемы TL.*

> Resend the login code via another medium, the phone code type is determined by the return value of the previous auth.sendCode/auth.resendCode: see [login](/api/auth/) for more info.

## Определение TL

```
auth.sentCode#5e002502 flags:# type:auth.SentCodeType phone_code_hash:string next_type:flags.1?auth.CodeType timeout:flags.2?int = auth.SentCode;
auth.sentCodeSuccess#2390fe44 authorization:auth.Authorization = auth.SentCode;
auth.sentCodePaymentRequired#e0955a3c store_product:string phone_code_hash:string support_email_address:string support_email_subject:string currency:string amount:long = auth.SentCode;
---functions---
auth.resendCode#cae47523 flags:# phone_number:string phone_code_hash:string reason:flags.0?string = auth.SentCode;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| phone_number | [string](/type/string/) | The phone number |
| phone_code_hash | [string](/type/string/) | The phone code hash obtained from [auth.sendCode](/method/auth.sendCode/) |
| reason | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[string](/type/string/) | Official clients only, used if the device integrity verification failed, and no secret could be obtained to invoke [auth.requestFirebaseSms](/method/auth.requestFirebaseSms/): in this case, the device integrity verification failure reason must be passed here. |

## Результат

[auth.SentCode](/type/auth.SentCode/)

## Only users can use this method

## This method can be invoked over an unauthenticated connection »

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | EMAIL_INSTALL_MISSING | Attempting to send a code to the recovery email, but no email is configured. |
| 400 | PHONE_CODE_EMPTY | phone_code is missing. |
| 400 | PHONE_CODE_EXPIRED | The phone code you provided has expired. |
| 400 | PHONE_CODE_HASH_EMPTY | phone_code_hash is missing. |
| 406 | PHONE_NUMBER_INVALID | The phone number is invalid. |
| 406 | SEND_CODE_UNAVAILABLE | Returned when all available options for this type of number were already used (e.g. flash-call, then SMS, then this error might be returned to trigger a second resend). |

## Related pages

#### [auth.sendCode](/method/auth.sendCode/)

Send the verification code for login

#### [auth.requestFirebaseSms](/method/auth.requestFirebaseSms/)

Request an SMS code via Firebase.

#### [User Authorization](/api/auth/)

How to register a user's phone to start using the API.
