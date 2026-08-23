---
title: "account.resetPasswordRequestedWait (конструктор)"
original: "https://core.telegram.org/constructor/account.resetPasswordRequestedWait"
section: ref
kind: constructor
layout: layout.njk
---

# account.resetPasswordRequestedWait

*Конструктор из схемы TL.*

> You successfully requested a password reset, please wait until the specified date before finalizing the reset.

## Определение TL

```
account.resetPasswordRequestedWait#e9effc7d until_date:int = account.ResetPasswordResult;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| until_date | [int](/type/int/) | Wait until this date before finalizing the reset. |

## Тип

[account.ResetPasswordResult](/type/account.ResetPasswordResult/)
