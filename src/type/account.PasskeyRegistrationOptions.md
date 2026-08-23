---
title: "Account.PasskeyRegistrationOptions (тип)"
original: "https://core.telegram.org/type/account.PasskeyRegistrationOptions"
section: ref
kind: type
layout: layout.njk
---

# Account.PasskeyRegistrationOptions

*Тип из схемы TL.*

> Passkey registration options, see [here »](https://core.telegram.org/api/passkeys#creating-a-passkey) for more info on the full flow.

## Определение TL

```
account.passkeyRegistrationOptions#e16b5ce1 options:DataJSON = account.PasskeyRegistrationOptions;

---functions---

account.initPasskeyRegistration#429547e8 = account.PasskeyRegistrationOptions;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [account.passkeyRegistrationOptions](/constructor/account.passkeyRegistrationOptions/) | Passkey registration options, see [here »](https://core.telegram.org/api/passkeys#creating-a-passkey) for more info on the full flow. |

## Методы

| Method | Описание |
|---|---|
| [account.initPasskeyRegistration](/method/account.initPasskeyRegistration/) | Initialize passkey registration for the current account, see [here »](https://core.telegram.org/api/passkeys#creating-a-passkey) for more info on the full flow. |

## Related pages

#### [Passkey login](https://core.telegram.org/api/passkeys)

Log in to Telegram instantly with a passkey using a PIN or biometrics instead of an SMS code.
