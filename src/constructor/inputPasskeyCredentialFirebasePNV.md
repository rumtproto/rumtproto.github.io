---
title: "inputPasskeyCredentialFirebasePNV (конструктор)"
original: "https://core.telegram.org/constructor/inputPasskeyCredentialFirebasePNV"
section: ref
kind: constructor
layout: layout.njk
---

# inputPasskeyCredentialFirebasePNV

*Конструктор из схемы TL.*

> Alternative [passkey](https://core.telegram.org/api/passkeys) credential that proves ownership of the account's phone number through a Firebase Phone Number Verification (PNV) token, used on official apps where a full WebAuthn [public-key passkey](/constructor/inputPasskeyCredentialPublicKey/) cannot be created, in a way similar to [Firebase SMS authentication »](/api/auth/).

## Определение TL

```
inputPasskeyCredentialFirebasePNV#5b1ccb28 pnv_token:string = InputPasskeyCredential;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| pnv_token | [string](/type/string/) | Firebase Phone Number Verification token attesting that the user controls the phone number associated with the account. |

## Тип

[InputPasskeyCredential](/type/InputPasskeyCredential/)

## Related pages

#### [Passkey login](https://core.telegram.org/api/passkeys)

Log in to Telegram instantly with a passkey using a PIN or biometrics instead of an SMS code.

#### [inputPasskeyCredentialPublicKey](/constructor/inputPasskeyCredentialPublicKey/)

Public-key passkey credential used both for registration and for login, see [creating a passkey »](https://core.telegram.org/api/passkeys#creating-a-passkey) and [logging in with a passkey »](https://core.telegram.org/api/passkeys#logging-in-with-a-passkey) for the full flows.

#### [User Authorization](/api/auth/)

How to register a user's phone to start using the API.
