---
title: "auth.passkeyLoginOptions (конструктор)"
original: "https://core.telegram.org/constructor/auth.passkeyLoginOptions"
section: ref
kind: constructor
layout: layout.njk
---

# auth.passkeyLoginOptions

*Конструктор из схемы TL.*

> Passkey login options, see [here »](https://core.telegram.org/api/passkeys#logging-in-with-a-passkey) for more info on the full flow.

## Определение TL

```
auth.passkeyLoginOptions#e2037789 options:DataJSON = auth.PasskeyLoginOptions;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| options | [DataJSON](/type/DataJSON/) | JSON-encoded object whose publicKey field contains a [PublicKeyCredentialRequestOptions](https://developer.mozilla.org/en-US/docs/Web/API/PublicKeyCredentialRequestOptions) object. |

## Тип

[auth.PasskeyLoginOptions](/type/auth.PasskeyLoginOptions/)

## Related pages

#### [Passkey login](https://core.telegram.org/api/passkeys)

Log in to Telegram instantly with a passkey using a PIN or biometrics instead of an SMS code.
