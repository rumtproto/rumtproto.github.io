---
title: "account.setAccountTTL (метод)"
original: "https://core.telegram.org/method/account.setAccountTTL"
section: ref
kind: method
layout: layout.njk
---

# account.setAccountTTL

*Метод из схемы TL.*

> Set account self-destruction period

## Определение TL

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
account.setAccountTTL#2442485e ttl:AccountDaysTTL = Bool;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| ttl | [AccountDaysTTL](/type/AccountDaysTTL/) | Time to live in days |

## Результат

[Bool](/type/Bool/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | TTL_DAYS_INVALID | The provided TTL is invalid. |
