---
title: "account.authorizations (конструктор)"
original: "https://core.telegram.org/constructor/account.authorizations"
section: ref
kind: constructor
layout: layout.njk
---

# account.authorizations

*Конструктор из схемы TL.*

> Logged-in sessions

## Определение TL

```
account.authorizations#4bff8ea0 authorization_ttl_days:int authorizations:Vector<Authorization> = account.Authorizations;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| authorization_ttl_days | [int](/type/int/) | Time-to-live of session |
| authorizations | [Vector](https://core.telegram.org/type/Vector%20t)<[Authorization](/type/Authorization/)> | Logged-in sessions |

## Тип

[account.Authorizations](/type/account.Authorizations/)
