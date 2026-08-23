---
title: "Auth.PasskeyLoginOptions (тип)"
original: "https://core.telegram.org/type/auth.PasskeyLoginOptions"
section: ref
kind: type
layout: layout.njk
---

# Auth.PasskeyLoginOptions

*Тип из схемы TL.*

> Passkey login options, see [here »](https://core.telegram.org/api/passkeys#logging-in-with-a-passkey) for more info on the full flow.

## Определение TL

```
auth.passkeyLoginOptions#e2037789 options:DataJSON = auth.PasskeyLoginOptions;

---functions---

auth.initPasskeyLogin#518ad0b7 api_id:int api_hash:string = auth.PasskeyLoginOptions;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [auth.passkeyLoginOptions](/constructor/auth.passkeyLoginOptions/) | Passkey login options, see [here »](https://core.telegram.org/api/passkeys#logging-in-with-a-passkey) for more info on the full flow. |

## Методы

| Method | Описание |
|---|---|
| [auth.initPasskeyLogin](/method/auth.initPasskeyLogin/) | Initialize login with a passkey over an unauthenticated connection, see [here »](https://core.telegram.org/api/passkeys#logging-in-with-a-passkey) for more info. |

## Related pages

#### [Passkey login](https://core.telegram.org/api/passkeys)

Log in to Telegram instantly with a passkey using a PIN or biometrics instead of an SMS code.
