---
title: "auth.loginToken (конструктор)"
original: "https://core.telegram.org/constructor/auth.loginToken"
section: ref
kind: constructor
layout: layout.njk
---

# auth.loginToken

*Конструктор из схемы TL.*

> Login token (for [QR code login](https://core.telegram.org/api/qr-login))

## Определение TL

```
auth.loginToken#629f1980 expires:int token:bytes = auth.LoginToken;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| expires | [int](/type/int/) | Expiration date of QR code |
| token | [bytes](/type/bytes/) | Token to render in QR code |

## Тип

[auth.LoginToken](/type/auth.LoginToken/)

## Related pages

#### [Login via QR code](https://core.telegram.org/api/qr-login)

QR code login flow
