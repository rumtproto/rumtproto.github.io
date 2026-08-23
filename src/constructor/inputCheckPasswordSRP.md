---
title: "inputCheckPasswordSRP (конструктор)"
original: "https://core.telegram.org/constructor/inputCheckPasswordSRP"
section: ref
kind: constructor
layout: layout.njk
---

# inputCheckPasswordSRP

*Конструктор из схемы TL.*

> Constructor for checking the validity of a 2FA SRP password (see [SRP](/api/srp/))

## Определение TL

```
inputCheckPasswordSRP#d27ff082 srp_id:long A:bytes M1:bytes = InputCheckPasswordSRP;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| srp_id | [long](/type/long/) | [SRP ID](/api/srp/) |
| A | [bytes](/type/bytes/) | A parameter (see [SRP](/api/srp/)) |
| M1 | [bytes](/type/bytes/) | M1 parameter (see [SRP](/api/srp/)) |

## Тип

[InputCheckPasswordSRP](/type/InputCheckPasswordSRP/)

## Related pages

#### [Two-factor authentication](/api/srp/)

How to login to a user's account if they have enabled 2FA, how to change password.
