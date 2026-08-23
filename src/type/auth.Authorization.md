---
title: "auth.Authorization (тип)"
original: "https://core.telegram.org/type/auth.Authorization"
section: ref
kind: type
layout: layout.njk
---

# auth.Authorization

*Тип из схемы TL.*

> Object contains info on user authorization.

## Определение TL

```
auth.authorization#2ea2c0d4 flags:# setup_password_required:flags.1?true otherwise_relogin_days:flags.1?int tmp_sessions:flags.0?int future_auth_token:flags.2?bytes user:User = auth.Authorization;
auth.authorizationSignUpRequired#44747e9a flags:# terms_of_service:flags.0?help.TermsOfService = auth.Authorization;

---functions---

auth.signUp#aac7b717 flags:# no_joined_notifications:flags.0?true phone_number:string phone_code_hash:string first_name:string last_name:string = auth.Authorization;
auth.signIn#8d52a951 flags:# phone_number:string phone_code_hash:string phone_code:flags.0?string email_verification:flags.1?EmailVerification = auth.Authorization;
auth.importAuthorization#a57a7dad id:long bytes:bytes = auth.Authorization;
auth.importBotAuthorization#67a3ff2c flags:int api_id:int api_hash:string bot_auth_token:string = auth.Authorization;
auth.checkPassword#d18b4d16 password:InputCheckPasswordSRP = auth.Authorization;
auth.recoverPassword#37096c70 flags:# code:string new_settings:flags.0?account.PasswordInputSettings = auth.Authorization;
auth.importWebTokenAuthorization#2db873a9 api_id:int api_hash:string web_auth_token:string = auth.Authorization;
auth.finishPasskeyLogin#9857ad07 flags:# credential:InputPasskeyCredential from_dc_id:flags.0?int from_auth_key_id:flags.0?long = auth.Authorization;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [auth.authorization](/constructor/auth.authorization/) | Contains user authorization info. |
| [auth.authorizationSignUpRequired](/constructor/auth.authorizationSignUpRequired/) | An account with this phone number doesn't exist on telegram: the user has to [enter basic information and sign up](/api/auth/) |

## Методы

| Method | Описание |
|---|---|
| [auth.signUp](/method/auth.signUp/) | Registers a validated phone number in the system. |
| [auth.signIn](/method/auth.signIn/) | Signs in a user with a validated phone number. |
| [auth.importAuthorization](/method/auth.importAuthorization/) | Logs in a user using a key transmitted from his native data-center. |
| [auth.importBotAuthorization](/method/auth.importBotAuthorization/) | Login as a bot |
| [auth.checkPassword](/method/auth.checkPassword/) | Try logging to an account protected by a [2FA password](/api/srp/). |
| [auth.recoverPassword](/method/auth.recoverPassword/) | Reset the [2FA password](/api/srp/) using the recovery code sent using [auth.requestPasswordRecovery](/method/auth.requestPasswordRecovery/). |
| [auth.importWebTokenAuthorization](/method/auth.importWebTokenAuthorization/) | Login by importing an authorization token |
| [auth.finishPasskeyLogin](/method/auth.finishPasskeyLogin/) | Complete login with a passkey over an unauthenticated connection, see [here »](https://core.telegram.org/api/passkeys#logging-in-with-a-passkey) for more info. Must be sent to the user's native DC, as specified by the user_handle (dcId:userId) returned in the passkey assertion, see [here »](https://core.telegram.org/api/passkeys#logging-in-with-a-passkey) for the full flow. |
