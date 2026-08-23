---
title: "auth.importLoginToken (метод)"
original: "https://core.telegram.org/method/auth.importLoginToken"
section: ref
kind: method
layout: layout.njk
---

# auth.importLoginToken

*Метод из схемы TL.*

> Login using a redirected login token, generated in case of DC mismatch during [QR code login](https://core.telegram.org/api/qr-login).
> For more info, see [login via QR code](https://core.telegram.org/api/qr-login).

## Определение TL

```
auth.loginToken#629f1980 expires:int token:bytes = auth.LoginToken;
auth.loginTokenMigrateTo#68e9916 dc_id:int token:bytes = auth.LoginToken;
auth.loginTokenSuccess#390d5c5e authorization:auth.Authorization = auth.LoginToken;
---functions---
auth.importLoginToken#95ac5ce4 token:bytes = auth.LoginToken;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| token | [bytes](/type/bytes/) | Login token |

## Результат

[auth.LoginToken](/type/auth.LoginToken/)

## Only users can use this method

## This method can be invoked over an unauthenticated connection »

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | AUTH_TOKEN_ALREADY_ACCEPTED | The specified auth token was already accepted. |
| 400 | AUTH_TOKEN_EXPIRED | The authorization token has expired. |
| 400 | AUTH_TOKEN_INVALID | The specified auth token is invalid. |
| 400 | AUTH_TOKEN_INVALIDX | The specified auth token is invalid. |

## Related pages

#### [Login via QR code](https://core.telegram.org/api/qr-login)

QR code login flow
