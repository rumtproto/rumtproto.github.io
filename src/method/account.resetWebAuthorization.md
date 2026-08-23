---
title: "account.resetWebAuthorization (метод)"
original: "https://core.telegram.org/method/account.resetWebAuthorization"
section: ref
kind: method
layout: layout.njk
---

# account.resetWebAuthorization

*Метод из схемы TL.*

> Log out an active web [telegram login](https://core.telegram.org/widgets/login) session

## Определение TL

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
account.resetWebAuthorization#2d01b9ef hash:long = Bool;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| hash | [long](/type/long/) | [Session](/constructor/webAuthorization/) hash |

## Результат

[Bool](/type/Bool/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | HASH_INVALID | The provided hash is invalid. |

## Related pages

#### [webAuthorization](/constructor/webAuthorization/)

Represents a bot logged in using the [Telegram login widget](https://core.telegram.org/widgets/login)

#### [Telegram Login Widget](https://core.telegram.org/widgets/login)
