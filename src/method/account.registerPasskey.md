---
title: "account.registerPasskey (метод)"
original: "https://core.telegram.org/method/account.registerPasskey"
section: ref
kind: method
layout: layout.njk
---

# account.registerPasskey

*Метод из схемы TL.*

> Complete passkey registration for the current account, see [here »](https://core.telegram.org/api/passkeys#creating-a-passkey) for more info on the full flow.

## Определение TL

```
passkey#98613ebf flags:# id:string name:string date:int software_emoji_id:flags.0?long last_usage_date:flags.1?int = Passkey;
---functions---
account.registerPasskey#55b41fd6 credential:InputPasskeyCredential = Passkey;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| credential | [InputPasskeyCredential](/type/InputPasskeyCredential/) | Registration result. |

## Результат

[Passkey](/type/Passkey/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | CREDENTIAL_INVALID | The specified credential is invalid. |
| 400 | PASSKEY_ORIGIN_MISMATCH | Third-party clients currently don't support passkeys even when changing the origin. |

## Related pages

#### [Passkey login](https://core.telegram.org/api/passkeys)

Log in to Telegram instantly with a passkey using a PIN or biometrics instead of an SMS code.
