---
title: "Passkey (тип)"
original: "https://core.telegram.org/type/Passkey"
section: ref
kind: type
layout: layout.njk
---

# Passkey

*Тип из схемы TL.*

> Human-readable info about a passkey associated to an account, returned when [creating a passkey »](https://core.telegram.org/api/passkeys#creating-a-passkey) or [listing passkeys »](https://core.telegram.org/api/passkeys#list-passkeys).

## Определение TL

```
passkey#98613ebf flags:# id:string name:string date:int software_emoji_id:flags.0?long last_usage_date:flags.1?int = Passkey;

---functions---

account.registerPasskey#55b41fd6 credential:InputPasskeyCredential = Passkey;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [passkey](/constructor/passkey/) | Human-readable info about a passkey associated to an account, returned when [creating a passkey »](https://core.telegram.org/api/passkeys#creating-a-passkey) or [listing passkeys »](https://core.telegram.org/api/passkeys#list-passkeys). |

## Методы

| Method | Описание |
|---|---|
| [account.registerPasskey](/method/account.registerPasskey/) | Complete passkey registration for the current account, see [here »](https://core.telegram.org/api/passkeys#creating-a-passkey) for more info on the full flow. |

## Related pages

#### [Passkey login](https://core.telegram.org/api/passkeys)

Log in to Telegram instantly with a passkey using a PIN or biometrics instead of an SMS code.
