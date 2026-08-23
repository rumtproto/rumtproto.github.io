---
title: "account.confirmPhone (метод)"
original: "https://core.telegram.org/method/account.confirmPhone"
section: ref
kind: method
layout: layout.njk
---

# account.confirmPhone

*Метод из схемы TL.*

> Confirm a phone number to cancel account deletion, for more info [click here »](https://core.telegram.org/api/account-deletion)

## Определение TL

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
account.confirmPhone#5f2178c3 phone_code_hash:string phone_code:string = Bool;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| phone_code_hash | [string](/type/string/) | Phone code hash, for more info [click here »](https://core.telegram.org/api/account-deletion) |
| phone_code | [string](/type/string/) | SMS code, for more info [click here »](https://core.telegram.org/api/account-deletion) |

## Результат

[Bool](/type/Bool/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | CODE_HASH_INVALID | Code hash invalid. |
| 400 | PHONE_CODE_EMPTY | phone_code is missing. |

## Related pages

#### [Account deletion](https://core.telegram.org/api/account-deletion)

How to reset an account if the 2FA password was forgotten.
