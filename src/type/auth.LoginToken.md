---
title: "auth.LoginToken"
original: "https://core.telegram.org/type/auth.LoginToken"
section: ref
kind: type
description: "Токен входа (для входа по QR-коду)"
layout: layout.njk
---

# auth.LoginToken

Токен входа (для входа по QR-коду)

```
auth.loginToken#629f1980 expires:int token:bytes = auth.LoginToken;
auth.loginTokenMigrateTo#68e9916 dc_id:int token:bytes = auth.LoginToken;
auth.loginTokenSuccess#390d5c5e authorization:auth.Authorization = auth.LoginToken;

---functions---

auth.exportLoginToken#b7e085fe api_id:int api_hash:string except_ids:Vector<long> = auth.LoginToken;
auth.importLoginToken#95ac5ce4 token:bytes = auth.LoginToken;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/auth.loginToken">auth.loginToken</a></td><td>Токен входа (для <a href="/api/qr-login">входа по QR-коду</a>)</td></tr><tr><td><a href="/constructor/auth.loginTokenMigrateTo">auth.loginTokenMigrateTo</a></td><td>Повторить запрос к указанному дата-центру</td></tr><tr><td><a href="/constructor/auth.loginTokenSuccess">auth.loginTokenSuccess</a></td><td>Вход по токену (QR-коду) выполнен успешно!</td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/auth.exportLoginToken">auth.exportLoginToken</a></td><td>Сгенерировать токен входа для <a href="/api/qr-login">входа по QR-коду</a>.<br>Сгенерированный токен входа следует закодировать в base64url и показать в QR-коде в виде <code>tg://login?token=base64encodedtoken</code> — <a href="/api/links#qr-code-login-links">глубокой ссылки »</a>.<br><br>Подробнее см. <a href="/api/qr-login">вход по QR-коду</a>.</td></tr><tr><td><a href="/method/auth.importLoginToken">auth.importLoginToken</a></td><td>Вход с использованием перенаправленного токена входа, который формируется при несовпадении DC во время <a href="/api/qr-login">входа по QR-коду</a>.<br><br>Подробнее см. <a href="/api/qr-login">вход по QR-коду</a>.</td></tr></tbody></table>
