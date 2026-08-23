---
title: "account.resetAuthorization (метод)"
original: "https://core.telegram.org/method/account.resetAuthorization"
section: ref
kind: method
layout: layout.njk
---

# account.resetAuthorization

*Метод из схемы TL.*

> Log out an active [authorized session](/api/auth/) by its hash

## Определение TL

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
account.resetAuthorization#df77f3bc hash:long = Bool;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| hash | [long](/type/long/) | Session hash |

## Результат

[Bool](/type/Bool/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 406 | FRESH_RESET_AUTHORISATION_FORBIDDEN | You can't logout other sessions if less than 24 hours have passed since you logged on the current session. |
| 400 | HASH_INVALID | The provided hash is invalid. |

## Related pages

#### [User Authorization](/api/auth/)

How to register a user's phone to start using the API.
