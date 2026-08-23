---
title: "auth.importWebTokenAuthorization (метод)"
original: "https://core.telegram.org/method/auth.importWebTokenAuthorization"
section: ref
kind: method
layout: layout.njk
---

# auth.importWebTokenAuthorization

*Метод из схемы TL.*

> Login by importing an authorization token

## Определение TL

```
auth.authorization#2ea2c0d4 flags:# setup_password_required:flags.1?true otherwise_relogin_days:flags.1?int tmp_sessions:flags.0?int future_auth_token:flags.2?bytes user:User = auth.Authorization;
auth.authorizationSignUpRequired#44747e9a flags:# terms_of_service:flags.0?help.TermsOfService = auth.Authorization;
---functions---
auth.importWebTokenAuthorization#2db873a9 api_id:int api_hash:string web_auth_token:string = auth.Authorization;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| api_id | [int](/type/int/) | [API ID](https://core.telegram.org/api/obtaining_api_id) |
| api_hash | [string](/type/string/) | [API hash](https://core.telegram.org/api/obtaining_api_id) |
| web_auth_token | [string](/type/string/) | The authorization token |

## Результат

[auth.Authorization](/type/auth.Authorization/)

## Only users can use this method

## This method can be invoked over an unauthenticated connection »

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | API_ID_INVALID | API ID invalid. |
| 400 | WEBAUTH_TOKEN_EXPIRED | The specified auth token has expired. |

## Related pages

#### [Creating your Telegram Application](https://core.telegram.org/api/obtaining_api_id)

How to get your application identifier and create a new Telegram app.
