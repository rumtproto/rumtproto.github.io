---
title: "auth.importAuthorization (метод)"
original: "https://core.telegram.org/method/auth.importAuthorization"
section: ref
kind: method
layout: layout.njk
---

# auth.importAuthorization

*Метод из схемы TL.*

> Logs in a user using a key transmitted from his native data-center.

## Определение TL

```
auth.authorization#2ea2c0d4 flags:# setup_password_required:flags.1?true otherwise_relogin_days:flags.1?int tmp_sessions:flags.0?int future_auth_token:flags.2?bytes user:User = auth.Authorization;
auth.authorizationSignUpRequired#44747e9a flags:# terms_of_service:flags.0?help.TermsOfService = auth.Authorization;
---functions---
auth.importAuthorization#a57a7dad id:long bytes:bytes = auth.Authorization;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| id | [long](/type/long/) | User ID |
| bytes | [bytes](/type/bytes/) | Authorization key |

## Результат

[auth.Authorization](/type/auth.Authorization/)

## Both users and bots can use this method

## This method can be invoked over an unauthenticated connection »

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | AUTH_BYTES_INVALID | The provided authorization is invalid. |
| 400 | USER_ID_INVALID | The provided user ID is invalid. |
