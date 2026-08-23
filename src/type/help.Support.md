---
title: "help.Support (тип)"
original: "https://core.telegram.org/type/help.Support"
section: ref
kind: type
layout: layout.njk
---

# help.Support

*Тип из схемы TL.*

> Info about the support user, relevant to the current user.

## Определение TL

```
help.support#17c6b5f6 phone_number:string user:User = help.Support;

---functions---

help.getSupport#9cdf08cd = help.Support;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [help.support](/constructor/help.support/) | Info on support user. |

## Методы

| Method | Описание |
|---|---|
| [help.getSupport](/method/help.getSupport/) | Returns the support user for the "ask a question" feature. |
