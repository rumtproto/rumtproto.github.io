---
title: "account.toggleUsername (метод)"
original: "https://core.telegram.org/method/account.toggleUsername"
section: ref
kind: method
layout: layout.njk
---

# account.toggleUsername

*Метод из схемы TL.*

> Activate or deactivate a purchased [fragment.com](https://fragment.com) username associated to the currently logged-in user.

## Определение TL

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
account.toggleUsername#58d6b376 username:string active:Bool = Bool;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| username | [string](/type/string/) | Username |
| active | [Bool](/type/Bool/) | Whether to activate or deactivate it |

## Результат

[Bool](/type/Bool/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | USERNAMES_ACTIVE_TOO_MUCH | The maximum number of active usernames was reached. |
| 400 | USERNAME_INVALID | The provided username is not valid. |
| 400 | USERNAME_NOT_MODIFIED | The username was not modified. |
