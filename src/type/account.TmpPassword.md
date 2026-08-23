---
title: "Account.TmpPassword (тип)"
original: "https://core.telegram.org/type/account.TmpPassword"
section: ref
kind: type
layout: layout.njk
---

# Account.TmpPassword

*Тип из схемы TL.*

> Temporary password

## Определение TL

```
account.tmpPassword#db64fd34 tmp_password:bytes valid_until:int = account.TmpPassword;

---functions---

account.getTmpPassword#449e0b51 password:InputCheckPasswordSRP period:int = account.TmpPassword;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [account.tmpPassword](/constructor/account.tmpPassword/) | Temporary payment password |

## Методы

| Method | Описание |
|---|---|
| [account.getTmpPassword](/method/account.getTmpPassword/) | Get temporary payment password |
