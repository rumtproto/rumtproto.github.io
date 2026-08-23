---
title: "Account.Authorizations (тип)"
original: "https://core.telegram.org/type/account.Authorizations"
section: ref
kind: type
layout: layout.njk
---

# Account.Authorizations

*Тип из схемы TL.*

> Logged-in sessions

## Определение TL

```
account.authorizations#4bff8ea0 authorization_ttl_days:int authorizations:Vector<Authorization> = account.Authorizations;

---functions---

account.getAuthorizations#e320c158 = account.Authorizations;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [account.authorizations](/constructor/account.authorizations/) | Logged-in sessions |

## Методы

| Method | Описание |
|---|---|
| [account.getAuthorizations](/method/account.getAuthorizations/) | Get logged-in sessions |
