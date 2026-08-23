---
title: "auth.sentCodeTypeEmailCode (конструктор)"
original: "https://core.telegram.org/constructor/auth.sentCodeTypeEmailCode"
section: ref
kind: constructor
layout: layout.njk
---

# auth.sentCodeTypeEmailCode

*Конструктор из схемы TL.*

> The code was sent via the [previously configured login email »](https://core.telegram.org/api/auth/#email-verification)

## Определение TL

```
auth.sentCodeTypeEmailCode#f450f59b flags:# apple_signin_allowed:flags.0?true google_signin_allowed:flags.1?true email_pattern:string length:int reset_available_period:flags.3?int reset_pending_date:flags.4?int = auth.SentCodeType;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| apple_signin_allowed | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | Whether authorization through Apple ID is allowed |
| google_signin_allowed | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[true](/constructor/true/) | Whether authorization through Google ID is allowed |
| email_pattern | [string](/type/string/) | [Pattern](https://core.telegram.org/api/pattern) of the email |
| length | [int](/type/int/) | Length of the sent verification code |
| reset_available_period | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).3?[int](/type/int/) | Clients should wait for the specified amount of seconds before allowing the user to invoke [auth.resetLoginEmail](/method/auth.resetLoginEmail/) (will be 0 for [Premium](https://core.telegram.org/api/premium) users). |
| reset_pending_date | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).4?[int](/type/int/) | An email reset was already requested, and will occur at the specified date. |

## Тип

[auth.SentCodeType](/type/auth.SentCodeType/)

## Related pages

#### [Pattern matching](https://core.telegram.org/api/pattern)

Some methods require the client to verify if the data obtained from an external source matches a certain pattern.

#### [auth.resetLoginEmail](/method/auth.resetLoginEmail/)

Reset the [login email »](https://core.telegram.org/api/auth#email-verification).

#### [Telegram Premium](https://core.telegram.org/api/premium)

Telegram Premium is an optional subscription service that unlocks additional exclusive client-side and API-side features, while helping support the development of the app.

#### [User Authorization](/api/auth/)

How to register a user's phone to start using the API.
