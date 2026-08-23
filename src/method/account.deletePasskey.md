---
title: "account.deletePasskey (метод)"
original: "https://core.telegram.org/method/account.deletePasskey"
section: ref
kind: method
layout: layout.njk
---

# account.deletePasskey

*Метод из схемы TL.*

> Delete a passkey associated to the current account, see [here »](https://core.telegram.org/api/passkeys#delete-passkeys) for more info.

## Определение TL

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
account.deletePasskey#f5b5563f id:string = Bool;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| id | [string](/type/string/) | Identifier of the passkey to delete, taken from [passkey](/constructor/passkey/).id, usually obtained using [account.getPasskeys](/method/account.getPasskeys/). |

## Результат

[Bool](/type/Bool/)

## Only users can use this method

## Related pages

#### [passkey](/constructor/passkey/)

Human-readable info about a passkey associated to an account, returned when [creating a passkey »](https://core.telegram.org/api/passkeys#creating-a-passkey) or [listing passkeys »](https://core.telegram.org/api/passkeys#list-passkeys).

#### [account.getPasskeys](/method/account.getPasskeys/)

List the passkeys associated to the current account that can be used to log in, see [here »](https://core.telegram.org/api/passkeys#list-passkeys) for more info on passkeys.

#### [Passkey login](https://core.telegram.org/api/passkeys)

Log in to Telegram instantly with a passkey using a PIN or biometrics instead of an SMS code.
