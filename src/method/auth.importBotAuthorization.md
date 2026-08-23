---
title: "auth.importBotAuthorization (метод)"
original: "https://core.telegram.org/method/auth.importBotAuthorization"
section: ref
kind: method
layout: layout.njk
---

# auth.importBotAuthorization

*Метод из схемы TL.*

> Login as a bot

## Определение TL

```
auth.authorization#2ea2c0d4 flags:# setup_password_required:flags.1?true otherwise_relogin_days:flags.1?int tmp_sessions:flags.0?int future_auth_token:flags.2?bytes user:User = auth.Authorization;
auth.authorizationSignUpRequired#44747e9a flags:# terms_of_service:flags.0?help.TermsOfService = auth.Authorization;
---functions---
auth.importBotAuthorization#67a3ff2c flags:int api_id:int api_hash:string bot_auth_token:string = auth.Authorization;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [int](/type/int/) | Reserved for future use |
| api_id | [int](/type/int/) | Application identifier (see. [App configuration](https://core.telegram.org/myapp)) |
| api_hash | [string](/type/string/) | Application identifier hash (see. [App configuration](https://core.telegram.org/myapp)) |
| bot_auth_token | [string](/type/string/) | Bot token (see [bots](https://core.telegram.org/bots)) |

## Результат

[auth.Authorization](/type/auth.Authorization/)

## Both users and bots can use this method

## This method can be invoked over an unauthenticated connection »

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | ACCESS_TOKEN_EXPIRED | Access token expired. |
| 400 | ACCESS_TOKEN_INVALID | Access token invalid. |
| 400 | API_ID_INVALID | API ID invalid. |
| 400 | API_ID_PUBLISHED_FLOOD | This API id was published somewhere, you can't use it now. |

## Related pages

#### [Bots: An introduction for developers](https://core.telegram.org/bots)

Bots are small applications that run entirely within the Telegram app.
