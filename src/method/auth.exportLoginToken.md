---
title: "auth.exportLoginToken (метод)"
original: "https://core.telegram.org/method/auth.exportLoginToken"
section: ref
kind: method
layout: layout.njk
---

# auth.exportLoginToken

*Метод из схемы TL.*

> Generate a login token, for [login via QR code](https://core.telegram.org/api/qr-login).  
> The generated login token should be encoded using base64url, then shown as a `tg://login?token=base64encodedtoken` [deep link »](https://core.telegram.org/api/links#qr-code-login-links) in the QR code.
> For more info, see [login via QR code](https://core.telegram.org/api/qr-login).

## Определение TL

```
auth.loginToken#629f1980 expires:int token:bytes = auth.LoginToken;
auth.loginTokenMigrateTo#68e9916 dc_id:int token:bytes = auth.LoginToken;
auth.loginTokenSuccess#390d5c5e authorization:auth.Authorization = auth.LoginToken;
---functions---
auth.exportLoginToken#b7e085fe api_id:int api_hash:string except_ids:Vector<long> = auth.LoginToken;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| api_id | [int](/type/int/) | Application identifier (see. [App configuration](https://core.telegram.org/myapp)) |
| api_hash | [string](/type/string/) | Application identifier hash (see. [App configuration](https://core.telegram.org/myapp)) |
| except_ids | [Vector](https://core.telegram.org/type/Vector%20t)<[long](/type/long/)> | List of already logged-in user IDs, to prevent logging in twice with the same user |

## Результат

[auth.LoginToken](/type/auth.LoginToken/)

## Only users can use this method

## This method can be invoked over an unauthenticated connection »

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | API_ID_INVALID | API ID invalid. |
| 400 | API_ID_PUBLISHED_FLOOD | This API id was published somewhere, you can't use it now. |
| 500 | AUTH_RESTART | Restart the authorization process. |

## Related pages

#### [Login via QR code](https://core.telegram.org/api/qr-login)

QR code login flow

#### [Deep links](https://core.telegram.org/api/links)

Telegram clients must handle special tg:// and t.me deep links encountered in messages, link entities and in other apps by registering OS handlers.
