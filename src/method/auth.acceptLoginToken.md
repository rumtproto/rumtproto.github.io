---
title: "auth.acceptLoginToken (метод)"
original: "https://core.telegram.org/method/auth.acceptLoginToken"
section: ref
kind: method
layout: layout.njk
---

# auth.acceptLoginToken

*Метод из схемы TL.*

> Accept QR code login token, logging in the app that generated it.
> Returns info about the new session.
> For more info, see [login via QR code](https://core.telegram.org/api/qr-login).

## Определение TL

```
authorization#ad01d61d flags:# current:flags.0?true official_app:flags.1?true password_pending:flags.2?true encrypted_requests_disabled:flags.3?true call_requests_disabled:flags.4?true unconfirmed:flags.5?true hash:long device_model:string platform:string system_version:string api_id:int app_name:string app_version:string date_created:int date_active:int ip:string country:string region:string = Authorization;
---functions---
auth.acceptLoginToken#e894ad4d token:bytes = Authorization;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| token | [bytes](/type/bytes/) | Login token embedded in QR code, for more info, see [login via QR code](https://core.telegram.org/api/qr-login). |

## Результат

[Authorization](/type/Authorization/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | AUTH_TOKEN_ALREADY_ACCEPTED | The specified auth token was already accepted. |
| 400 | AUTH_TOKEN_EXCEPTION | An error occurred while importing the auth token. |
| 400 | AUTH_TOKEN_EXPIRED | The authorization token has expired. |
| 400 | AUTH_TOKEN_INVALIDX | The specified auth token is invalid. |

## Related pages

#### [Login via QR code](https://core.telegram.org/api/qr-login)

QR code login flow
