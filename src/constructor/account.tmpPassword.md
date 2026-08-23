---
title: "account.tmpPassword (конструктор)"
original: "https://core.telegram.org/constructor/account.tmpPassword"
section: ref
kind: constructor
layout: layout.njk
---

# account.tmpPassword

*Конструктор из схемы TL.*

> Temporary payment password

## Определение TL

```
account.tmpPassword#db64fd34 tmp_password:bytes valid_until:int = account.TmpPassword;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| tmp_password | [bytes](/type/bytes/) | Temporary password |
| valid_until | [int](/type/int/) | Validity period |

## Тип

[account.TmpPassword](/type/account.TmpPassword/)
