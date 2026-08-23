---
title: "InputPasskeyCredential (тип)"
original: "https://core.telegram.org/type/InputPasskeyCredential"
section: ref
kind: type
layout: layout.njk
---

# InputPasskeyCredential

*Тип из схемы TL.*

> Credential used to register a [passkey »](https://core.telegram.org/api/passkeys) or to log in with one.

## Определение TL

```
inputPasskeyCredentialPublicKey#3c27b78f id:string raw_id:string response:InputPasskeyResponse = InputPasskeyCredential;
inputPasskeyCredentialFirebasePNV#5b1ccb28 pnv_token:string = InputPasskeyCredential;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [inputPasskeyCredentialPublicKey](/constructor/inputPasskeyCredentialPublicKey/) | Public-key passkey credential used both for registration and for login, see [creating a passkey »](https://core.telegram.org/api/passkeys#creating-a-passkey) and [logging in with a passkey »](https://core.telegram.org/api/passkeys#logging-in-with-a-passkey) for the full flows. |
| [inputPasskeyCredentialFirebasePNV](/constructor/inputPasskeyCredentialFirebasePNV/) | Alternative [passkey](https://core.telegram.org/api/passkeys) credential that proves ownership of the account's phone number through a Firebase Phone Number Verification (PNV) token, used on official apps where a full WebAuthn [public-key passkey](/constructor/inputPasskeyCredentialPublicKey/) cannot be created, in a way similar to [Firebase SMS authentication »](/api/auth/). |

## Related pages

#### [Passkey login](https://core.telegram.org/api/passkeys)

Log in to Telegram instantly with a passkey using a PIN or biometrics instead of an SMS code.
