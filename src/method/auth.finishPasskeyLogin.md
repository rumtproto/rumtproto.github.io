---
title: "auth.finishPasskeyLogin (метод)"
original: "https://core.telegram.org/method/auth.finishPasskeyLogin"
section: ref
kind: method
layout: layout.njk
---

# auth.finishPasskeyLogin

*Метод из схемы TL.*

> Complete login with a passkey over an unauthenticated connection, see [here »](https://core.telegram.org/api/passkeys#logging-in-with-a-passkey) for more info.
> Must be sent to the user's native DC, as specified by the `user_handle` (`dcId:userId`) returned in the passkey assertion, see [here »](https://core.telegram.org/api/passkeys#logging-in-with-a-passkey) for the full flow.

## Определение TL

```
auth.authorization#2ea2c0d4 flags:# setup_password_required:flags.1?true otherwise_relogin_days:flags.1?int tmp_sessions:flags.0?int future_auth_token:flags.2?bytes user:User = auth.Authorization;
auth.authorizationSignUpRequired#44747e9a flags:# terms_of_service:flags.0?help.TermsOfService = auth.Authorization;
---functions---
auth.finishPasskeyLogin#9857ad07 flags:# credential:InputPasskeyCredential from_dc_id:flags.0?int from_auth_key_id:flags.0?long = auth.Authorization;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| credential | [InputPasskeyCredential](/type/InputPasskeyCredential/) | Passkey assertion result. |
| from_dc_id | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[int](/type/int/) | DC ID used for the initial [auth.initPasskeyLogin](/method/auth.initPasskeyLogin/) request; set only if the user's DC is different from the DC used for the initial [auth.initPasskeyLogin](/method/auth.initPasskeyLogin/). |
| from_auth_key_id | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[long](/type/long/) | Auth key ID for the connection to from_dc_id (use the permanent auth key ID if PFS is enabled); set only if the user's DC is different from the DC used for the initial [auth.initPasskeyLogin](/method/auth.initPasskeyLogin/). |

## Результат

[auth.Authorization](/type/auth.Authorization/)

## Only users can use this method

## This method can be invoked over an unauthenticated connection »

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 500 | AUTH_RESTART | Restart the authorization process. |
| 400 | CREDENTIAL_INVALID | The specified credential is invalid. |
| 400 | PASSKEY_ORIGIN_MISMATCH | Third-party clients currently don't support passkeys even when changing the origin. |

## Related pages

#### [auth.initPasskeyLogin](/method/auth.initPasskeyLogin/)

Initialize login with a passkey over an unauthenticated connection, see [here »](https://core.telegram.org/api/passkeys#logging-in-with-a-passkey) for more info.

#### [Passkey login](https://core.telegram.org/api/passkeys)

Log in to Telegram instantly with a passkey using a PIN or biometrics instead of an SMS code.
