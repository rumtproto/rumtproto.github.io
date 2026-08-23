---
title: "auth.sentCodeTypeSetUpEmailRequired (конструктор)"
original: "https://core.telegram.org/constructor/auth.sentCodeTypeSetUpEmailRequired"
section: ref
kind: constructor
layout: layout.njk
---

# auth.sentCodeTypeSetUpEmailRequired

*Конструктор из схемы TL.*

> The user should add and verify an email address in order to login as described [here »](https://core.telegram.org/api/auth/#email-verification).

## Определение TL

```
auth.sentCodeTypeSetUpEmailRequired#a5491dea flags:# apple_signin_allowed:flags.0?true google_signin_allowed:flags.1?true = auth.SentCodeType;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| apple_signin_allowed | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | Whether authorization through Apple ID is allowed |
| google_signin_allowed | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[true](/constructor/true/) | Whether authorization through Google ID is allowed |

## Тип

[auth.SentCodeType](/type/auth.SentCodeType/)

## Related pages

#### [User Authorization](/api/auth/)

How to register a user's phone to start using the API.
