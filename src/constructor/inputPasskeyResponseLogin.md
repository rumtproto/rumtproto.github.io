---
title: "inputPasskeyResponseLogin (конструктор)"
original: "https://core.telegram.org/constructor/inputPasskeyResponseLogin"
section: ref
kind: constructor
layout: layout.njk
---

# inputPasskeyResponseLogin

*Конструктор из схемы TL.*

> WebAuthn authentication response used when logging in with a passkey, see [here »](https://core.telegram.org/api/passkeys#logging-in-with-a-passkey) for more info on the full flow.
> Generated from the [AuthenticatorAssertionResponse](https://developer.mozilla.org/en-US/docs/Web/API/AuthenticatorAssertionResponse) object.

## Определение TL

```
inputPasskeyResponseLogin#c31fc14a client_data:DataJSON authenticator_data:bytes signature:bytes user_handle:string = InputPasskeyResponse;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| client_data | [DataJSON](/type/DataJSON/) | Base64url-decoded clientDataJSON field of an [AuthenticatorAssertionResponse](https://developer.mozilla.org/en-US/docs/Web/API/AuthenticatorAssertionResponse), wrapped in [dataJSON](/constructor/dataJSON/) |
| authenticator_data | [bytes](/type/bytes/) | Base64url-decoded authenticatorData field of an [AuthenticatorAssertionResponse](https://developer.mozilla.org/en-US/docs/Web/API/AuthenticatorAssertionResponse) |
| signature | [bytes](/type/bytes/) | Base64url-decoded signature field of an [AuthenticatorAssertionResponse](https://developer.mozilla.org/en-US/docs/Web/API/AuthenticatorAssertionResponse) |
| user_handle | [string](/type/string/) | Base64url-decoded userHandle field of an [AuthenticatorAssertionResponse](https://developer.mozilla.org/en-US/docs/Web/API/AuthenticatorAssertionResponse). The user handle specified by the server is in <dc_id>:<user_id> format. |

## Тип

[InputPasskeyResponse](/type/InputPasskeyResponse/)

## Related pages

#### [dataJSON](/constructor/dataJSON/)

Represents a json-encoded object

#### [Passkey login](https://core.telegram.org/api/passkeys)

Log in to Telegram instantly with a passkey using a PIN or biometrics instead of an SMS code.
