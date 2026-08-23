---
title: "account.checkUsername (метод)"
original: "https://core.telegram.org/method/account.checkUsername"
section: ref
kind: method
layout: layout.njk
---

# account.checkUsername

*Метод из схемы TL.*

> Validates a username and checks availability.

## Определение TL

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
account.checkUsername#2714d86c username:string = Bool;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| username | [string](/type/string/) | username Accepted characters: A-z (case-insensitive), 0-9 and underscores. Length: 5-32 characters. |

## Результат

[Bool](/type/Bool/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | USERNAME_INVALID | The provided username is not valid. |
| 400 | USERNAME_OCCUPIED | The provided username is already occupied. |
| 400 | USERNAME_PURCHASE_AVAILABLE | The specified username can be purchased on [https://fragment.com](https://fragment.com). |
