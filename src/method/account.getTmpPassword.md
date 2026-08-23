---
title: "account.getTmpPassword (метод)"
original: "https://core.telegram.org/method/account.getTmpPassword"
section: ref
kind: method
layout: layout.njk
---

# account.getTmpPassword

*Метод из схемы TL.*

> Get temporary payment password

## Определение TL

```
account.tmpPassword#db64fd34 tmp_password:bytes valid_until:int = account.TmpPassword;
---functions---
account.getTmpPassword#449e0b51 password:InputCheckPasswordSRP period:int = account.TmpPassword;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| password | [InputCheckPasswordSRP](/type/InputCheckPasswordSRP/) | SRP password parameters |
| period | [int](/type/int/) | Time during which the temporary password will be valid, in seconds; should be between 60 and 86400 |

## Результат

[account.TmpPassword](/type/account.TmpPassword/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | PASSWORD_HASH_INVALID | The provided password hash is invalid. |
| 400 | SRP_A_INVALID | The specified inputCheckPasswordSRP.A value is invalid. |
| 400 | TMP_PASSWORD_DISABLED | The temporary password is disabled. |
