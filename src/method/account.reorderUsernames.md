---
title: "account.reorderUsernames (метод)"
original: "https://core.telegram.org/method/account.reorderUsernames"
section: ref
kind: method
layout: layout.njk
---

# account.reorderUsernames

*Метод из схемы TL.*

> Reorder usernames associated with the currently logged-in user.

## Определение TL

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
account.reorderUsernames#ef500eab order:Vector<string> = Bool;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| order | [Vector](https://core.telegram.org/type/Vector%20t)<[string](/type/string/)> | The new order for active usernames. All active usernames must be specified. |

## Результат

[Bool](/type/Bool/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | ORDER_INVALID | The specified username order is invalid. |
| 400 | USERNAME_NOT_MODIFIED | The username was not modified. |
