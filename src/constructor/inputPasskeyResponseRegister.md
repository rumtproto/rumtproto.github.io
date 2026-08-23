---
title: "inputPasskeyResponseRegister (конструктор)"
original: "https://core.telegram.org/constructor/inputPasskeyResponseRegister"
section: ref
kind: constructor
layout: layout.njk
---

# inputPasskeyResponseRegister

*Конструктор из схемы TL.*

> WebAuthn registration response used when registering a new passkey, see [here »](https://core.telegram.org/api/passkeys#creating-a-passkey) for more info on the full flow.
> Generated from the [AuthenticatorAttestationResponse](https://developer.mozilla.org/en-US/docs/Web/API/AuthenticatorAttestationResponse) object.

## Определение TL

```
inputPasskeyResponseRegister#3e63935c client_data:DataJSON attestation_data:bytes = InputPasskeyResponse;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| client_data | [DataJSON](/type/DataJSON/) | Base64url-decoded clientDataJSON field of an [AuthenticatorAttestationResponse](https://developer.mozilla.org/en-US/docs/Web/API/AuthenticatorAttestationResponse), wrapped in [dataJSON](/constructor/dataJSON/) |
| attestation_data | [bytes](/type/bytes/) | Base64url-decoded attestationObject field of an [AuthenticatorAttestationResponse](https://developer.mozilla.org/en-US/docs/Web/API/AuthenticatorAttestationResponse) |

## Тип

[InputPasskeyResponse](/type/InputPasskeyResponse/)

## Related pages

#### [dataJSON](/constructor/dataJSON/)

Represents a json-encoded object

#### [Passkey login](https://core.telegram.org/api/passkeys)

Log in to Telegram instantly with a passkey using a PIN or biometrics instead of an SMS code.
