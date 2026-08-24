---
title: "auth.loginToken"
original: "https://core.telegram.org/constructor/auth.loginToken"
section: ref
kind: constructor
description: "Токен входа (для входа по QR-коду)"
layout: layout.njk
---

# auth.loginToken

Токен входа (для [входа по QR-коду](/api/qr-login/))

```
auth.loginToken#629f1980 expires:int token:bytes = auth.LoginToken;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>expires</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Срок действия QR-кода</td></tr><tr><td><strong>token</strong></td><td style="text-align: center;"><a href="/type/bytes">bytes</a></td><td>Токен для отображения в QR-коде</td></tr></tbody></table>

### Тип

[auth.LoginToken](/type/auth.LoginToken/)

### Связанные страницы

#### [Вход по QR-коду](/api/qr-login/)

Вход по QR-коду
