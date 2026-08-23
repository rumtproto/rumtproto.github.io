---
title: "authorization (конструктор)"
original: "https://core.telegram.org/constructor/authorization"
section: ref
kind: constructor
layout: layout.njk
---

# authorization

*Конструктор из схемы TL.*

> Logged-in session

## Определение TL

```
authorization#ad01d61d flags:# current:flags.0?true official_app:flags.1?true password_pending:flags.2?true encrypted_requests_disabled:flags.3?true call_requests_disabled:flags.4?true unconfirmed:flags.5?true hash:long device_model:string platform:string system_version:string api_id:int app_name:string app_version:string date_created:int date_active:int ip:string country:string region:string = Authorization;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| current | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | Whether this is the current session |
| official_app | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[true](/constructor/true/) | Whether the session is from an official app |
| password_pending | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[true](/constructor/true/) | Whether the session is still waiting for a 2FA password |
| encrypted_requests_disabled | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).3?[true](/constructor/true/) | Whether this session will accept encrypted chats |
| call_requests_disabled | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).4?[true](/constructor/true/) | Whether this session will accept phone calls |
| unconfirmed | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).5?[true](/constructor/true/) | Whether the session is [unconfirmed, see here »](https://core.telegram.org/api/auth/#confirming-login) for more info. |
| hash | [long](/type/long/) | Identifier |
| device_model | [string](/type/string/) | Device model |
| platform | [string](/type/string/) | Platform |
| system_version | [string](/type/string/) | System version |
| api_id | [int](/type/int/) | [API ID](https://core.telegram.org/api/obtaining_api_id) |
| app_name | [string](/type/string/) | App name |
| app_version | [string](/type/string/) | App version |
| date_created | [int](/type/int/) | When was the session created |
| date_active | [int](/type/int/) | When was the session last active |
| ip | [string](/type/string/) | Last known IP |
| country | [string](/type/string/) | Country determined from IP |
| region | [string](/type/string/) | Region determined from IP |

## Тип

[Authorization](/type/Authorization/)

## Related pages

#### [User Authorization](/api/auth/)

How to register a user's phone to start using the API.

#### [Creating your Telegram Application](https://core.telegram.org/api/obtaining_api_id)

How to get your application identifier and create a new Telegram app.
