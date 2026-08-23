---
title: "account.passkeyRegistrationOptions (конструктор)"
original: "https://core.telegram.org/constructor/account.passkeyRegistrationOptions"
section: ref
kind: constructor
layout: layout.njk
---

# account.passkeyRegistrationOptions

*Конструктор из схемы TL.*

> Passkey registration options, see [here »](https://core.telegram.org/api/passkeys#creating-a-passkey) for more info on the full flow.

## Определение TL

```
account.passkeyRegistrationOptions#e16b5ce1 options:DataJSON = account.PasskeyRegistrationOptions;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| options | [DataJSON](/type/DataJSON/) | JSON-encoded object whose publicKey field contains a [PublicKeyCredentialCreationOptions](https://developer.mozilla.org/en-US/docs/Web/API/PublicKeyCredentialCreationOptions) object. |

## Тип

[account.PasskeyRegistrationOptions](/type/account.PasskeyRegistrationOptions/)

## Related pages

#### [Passkey login](https://core.telegram.org/api/passkeys)

Log in to Telegram instantly with a passkey using a PIN or biometrics instead of an SMS code.
