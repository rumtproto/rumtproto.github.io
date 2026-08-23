---
title: "auth.loginTokenMigrateTo (конструктор)"
original: "https://core.telegram.org/constructor/auth.loginTokenMigrateTo"
section: ref
kind: constructor
layout: layout.njk
---

# auth.loginTokenMigrateTo

*Конструктор из схемы TL.*

> Repeat the query to the specified DC

## Определение TL

```
auth.loginTokenMigrateTo#68e9916 dc_id:int token:bytes = auth.LoginToken;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| dc_id | [int](/type/int/) | DC ID |
| token | [bytes](/type/bytes/) | Token to use for login |

## Тип

[auth.LoginToken](/type/auth.LoginToken/)
