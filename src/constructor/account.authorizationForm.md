---
title: "account.authorizationForm (конструктор)"
original: "https://core.telegram.org/constructor/account.authorizationForm"
section: ref
kind: constructor
layout: layout.njk
---

# account.authorizationForm

*Конструктор из схемы TL.*

> [Telegram Passport](https://core.telegram.org/passport) authorization form

## Определение TL

```
account.authorizationForm#ad2e1cd8 flags:# required_types:Vector<SecureRequiredType> values:Vector<SecureValue> errors:Vector<SecureValueError> users:Vector<User> privacy_policy_url:flags.0?string = account.AuthorizationForm;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| required_types | [Vector](https://core.telegram.org/type/Vector%20t)<[SecureRequiredType](/type/SecureRequiredType/)> | Required [Telegram Passport](https://core.telegram.org/passport) documents |
| values | [Vector](https://core.telegram.org/type/Vector%20t)<[SecureValue](/type/SecureValue/)> | Already submitted [Telegram Passport](https://core.telegram.org/passport) documents |
| errors | [Vector](https://core.telegram.org/type/Vector%20t)<[SecureValueError](/type/SecureValueError/)> | [Telegram Passport](https://core.telegram.org/passport) errors |
| users | [Vector](https://core.telegram.org/type/Vector%20t)<[User](/type/User/)> | Info about the bot to which the form will be submitted |
| privacy_policy_url | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[string](/type/string/) | URL of the service's privacy policy |

## Тип

[account.AuthorizationForm](/type/account.AuthorizationForm/)

## Related pages

#### [Telegram Passport Manual](https://core.telegram.org/passport)

Telegram Passport, a unified authorization method for services that require personal identification.
