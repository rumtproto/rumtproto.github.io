---
title: "inputPasskeyCredentialPublicKey (конструктор)"
original: "https://core.telegram.org/constructor/inputPasskeyCredentialPublicKey"
section: ref
kind: constructor
layout: layout.njk
---

# inputPasskeyCredentialPublicKey

*Конструктор из схемы TL.*

> Public-key passkey credential used both for registration and for login, see [creating a passkey »](https://core.telegram.org/api/passkeys#creating-a-passkey) and [logging in with a passkey »](https://core.telegram.org/api/passkeys#logging-in-with-a-passkey) for the full flows.

## Определение TL

```
inputPasskeyCredentialPublicKey#3c27b78f id:string raw_id:string response:InputPasskeyResponse = InputPasskeyCredential;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| id | [string](/type/string/) | id field of a [PublicKeyCredential](https://developer.mozilla.org/en-US/docs/Web/API/PublicKeyCredential), passed as-is without base64url-decoding when using the JSON representation |
| raw_id | [string](/type/string/) | rawId field of a [PublicKeyCredential](https://developer.mozilla.org/en-US/docs/Web/API/PublicKeyCredential), passed as-is without base64url-decoding when using the JSON representation |
| response | [InputPasskeyResponse](/type/InputPasskeyResponse/) | Registration or login response. |

## Тип

[InputPasskeyCredential](/type/InputPasskeyCredential/)

## Related pages

#### [Passkey login](https://core.telegram.org/api/passkeys)

Log in to Telegram instantly with a passkey using a PIN or biometrics instead of an SMS code.
