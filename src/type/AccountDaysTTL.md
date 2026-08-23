---
title: "AccountDaysTTL (тип)"
original: "https://core.telegram.org/type/AccountDaysTTL"
section: ref
kind: type
layout: layout.njk
---

# AccountDaysTTL

*Тип из схемы TL.*

> Time-to-live of current account

## Определение TL

```
accountDaysTTL#b8d0afdf days:int = AccountDaysTTL;

---functions---

account.getAccountTTL#8fc711d = AccountDaysTTL;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [accountDaysTTL](/constructor/accountDaysTTL/) | Time to live in days of the current account |

## Методы

| Method | Описание |
|---|---|
| [account.getAccountTTL](/method/account.getAccountTTL/) | Get days to live of account |
