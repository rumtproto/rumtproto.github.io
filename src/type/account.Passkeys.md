---
title: "Account.Passkeys (тип)"
original: "https://core.telegram.org/type/account.Passkeys"
section: ref
kind: type
layout: layout.njk
---

# Account.Passkeys

*Тип из схемы TL.*

> List of [passkeys »](https://core.telegram.org/api/passkeys#list-passkeys) associated to the current account.

## Определение TL

```
account.passkeys#f8e0aa1c passkeys:Vector<Passkey> = account.Passkeys;

---functions---

account.getPasskeys#ea1f0c52 = account.Passkeys;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [account.passkeys](/constructor/account.passkeys/) | List of [passkeys »](https://core.telegram.org/api/passkeys#list-passkeys) associated to the current account. |

## Методы

| Method | Описание |
|---|---|
| [account.getPasskeys](/method/account.getPasskeys/) | List the passkeys associated to the current account that can be used to log in, see [here »](https://core.telegram.org/api/passkeys#list-passkeys) for more info on passkeys. |

## Related pages

#### [Passkey login](https://core.telegram.org/api/passkeys)

Log in to Telegram instantly with a passkey using a PIN or biometrics instead of an SMS code.
