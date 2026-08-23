---
title: "auth.authorizationSignUpRequired (конструктор)"
original: "https://core.telegram.org/constructor/auth.authorizationSignUpRequired"
section: ref
kind: constructor
layout: layout.njk
---

# auth.authorizationSignUpRequired

*Конструктор из схемы TL.*

> An account with this phone number doesn't exist on telegram: the user has to [enter basic information and sign up](/api/auth/)

## Определение TL

```
auth.authorizationSignUpRequired#44747e9a flags:# terms_of_service:flags.0?help.TermsOfService = auth.Authorization;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| terms_of_service | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[help.TermsOfService](/type/help.TermsOfService/) | Telegram's terms of service: the user must read and accept the terms of service before signing up to telegram |

## Тип

[auth.Authorization](/type/auth.Authorization/)

## Related pages

#### [User Authorization](/api/auth/)

How to register a user's phone to start using the API.
