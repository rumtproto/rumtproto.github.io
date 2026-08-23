---
title: "emailVerifyPurposeLoginSetup (конструктор)"
original: "https://core.telegram.org/constructor/emailVerifyPurposeLoginSetup"
section: ref
kind: constructor
layout: layout.njk
---

# emailVerifyPurposeLoginSetup

*Конструктор из схемы TL.*

> Email verification purpose: setup login email

## Определение TL

```
emailVerifyPurposeLoginSetup#4345be73 phone_number:string phone_code_hash:string = EmailVerifyPurpose;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| phone_number | [string](/type/string/) | Phone number |
| phone_code_hash | [string](/type/string/) | Phone code hash as specified by the [documentation](https://core.telegram.org/api/auth/#email-verification) |

## Тип

[EmailVerifyPurpose](/type/EmailVerifyPurpose/)

## Related pages

#### [User Authorization](/api/auth/)

How to register a user's phone to start using the API.
