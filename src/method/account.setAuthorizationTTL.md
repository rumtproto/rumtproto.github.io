---
title: "account.setAuthorizationTTL (метод)"
original: "https://core.telegram.org/method/account.setAuthorizationTTL"
section: ref
kind: method
layout: layout.njk
---

# account.setAuthorizationTTL

*Метод из схемы TL.*

> Set time-to-live of current session

## Определение TL

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
account.setAuthorizationTTL#bf899aa0 authorization_ttl_days:int = Bool;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| authorization_ttl_days | [int](/type/int/) | Time-to-live of current session in days |

## Результат

[Bool](/type/Bool/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 406 | FRESH_RESET_AUTHORISATION_FORBIDDEN | You can't logout other sessions if less than 24 hours have passed since you logged on the current session. |
| 400 | TTL_DAYS_INVALID | The provided TTL is invalid. |
