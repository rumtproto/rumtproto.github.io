---
title: "account.passkeys (конструктор)"
original: "https://core.telegram.org/constructor/account.passkeys"
section: ref
kind: constructor
layout: layout.njk
---

# account.passkeys

*Конструктор из схемы TL.*

> List of [passkeys »](https://core.telegram.org/api/passkeys#list-passkeys) associated to the current account.

## Определение TL

```
account.passkeys#f8e0aa1c passkeys:Vector<Passkey> = account.Passkeys;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| passkeys | [Vector](https://core.telegram.org/type/Vector%20t)<[Passkey](/type/Passkey/)> | List of passkeys that can be used to log into the current account |

## Тип

[account.Passkeys](/type/account.Passkeys/)

## Related pages

#### [Passkey login](https://core.telegram.org/api/passkeys)

Log in to Telegram instantly with a passkey using a PIN or biometrics instead of an SMS code.
