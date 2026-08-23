---
title: "auth.initPasskeyLogin (метод)"
original: "https://core.telegram.org/method/auth.initPasskeyLogin"
section: ref
kind: method
layout: layout.njk
---

# auth.initPasskeyLogin

*Метод из схемы TL.*

> Initialize login with a passkey over an unauthenticated connection, see [here »](https://core.telegram.org/api/passkeys#logging-in-with-a-passkey) for more info.

## Определение TL

```
auth.passkeyLoginOptions#e2037789 options:DataJSON = auth.PasskeyLoginOptions;
---functions---
auth.initPasskeyLogin#518ad0b7 api_id:int api_hash:string = auth.PasskeyLoginOptions;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| api_id | [int](/type/int/) | Application identifier (see [App configuration](https://core.telegram.org/myapp)) |
| api_hash | [string](/type/string/) | Application identifier hash (see [App configuration](https://core.telegram.org/myapp)) |

## Результат

[auth.PasskeyLoginOptions](/type/auth.PasskeyLoginOptions/)

## Only users can use this method

## This method can be invoked over an unauthenticated connection »

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | API_ID_INVALID | API ID invalid. |
| 500 | AUTH_RESTART | Restart the authorization process. |

## Related pages

#### [Passkey login](https://core.telegram.org/api/passkeys)

Log in to Telegram instantly with a passkey using a PIN or biometrics instead of an SMS code.
