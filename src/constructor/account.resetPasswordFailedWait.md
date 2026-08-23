---
title: "account.resetPasswordFailedWait (конструктор)"
original: "https://core.telegram.org/constructor/account.resetPasswordFailedWait"
section: ref
kind: constructor
layout: layout.njk
---

# account.resetPasswordFailedWait

*Конструктор из схемы TL.*

> You recently requested a password reset that was canceled, please wait until the specified date before requesting another reset.

## Определение TL

```
account.resetPasswordFailedWait#e3779861 retry_date:int = account.ResetPasswordResult;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| retry_date | [int](/type/int/) | Wait until this date before requesting another reset. |

## Тип

[account.ResetPasswordResult](/type/account.ResetPasswordResult/)
