---
title: "auth.sentCode (конструктор)"
original: "https://core.telegram.org/constructor/auth.sentCode"
section: ref
kind: constructor
layout: layout.njk
---

# auth.sentCode

*Конструктор из схемы TL.*

> Contains info about a sent verification code.

## Определение TL

```
auth.sentCode#5e002502 flags:# type:auth.SentCodeType phone_code_hash:string next_type:flags.1?auth.CodeType timeout:flags.2?int = auth.SentCode;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| type | [auth.SentCodeType](/type/auth.SentCodeType/) | Phone code type |
| phone_code_hash | [string](/type/string/) | Phone code hash, to be stored and later re-used with [auth.signIn](/method/auth.signIn/) |
| next_type | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[auth.CodeType](/type/auth.CodeType/) | Phone code type that will be sent next, if the phone code is not received within timeout seconds: to send it use [auth.resendCode](/method/auth.resendCode/) |
| timeout | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[int](/type/int/) | Timeout for reception of the phone code |

## Тип

[auth.SentCode](/type/auth.SentCode/)

## Related pages

#### [auth.signIn](/method/auth.signIn/)

Signs in a user with a validated phone number.

#### [auth.resendCode](/method/auth.resendCode/)

Resend the login code via another medium, the phone code type is determined by the return value of the previous auth.sendCode/auth.resendCode: see [login](/api/auth/) for more info.
