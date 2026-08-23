---
title: "auth.LoginToken (тип)"
original: "https://core.telegram.org/type/auth.LoginToken"
section: ref
kind: type
layout: layout.njk
---

# auth.LoginToken

*Тип из схемы TL.*

> Login token (for QR code login)

## Определение TL

```
auth.loginToken#629f1980 expires:int token:bytes = auth.LoginToken;
auth.loginTokenMigrateTo#68e9916 dc_id:int token:bytes = auth.LoginToken;
auth.loginTokenSuccess#390d5c5e authorization:auth.Authorization = auth.LoginToken;

---functions---

auth.exportLoginToken#b7e085fe api_id:int api_hash:string except_ids:Vector<long> = auth.LoginToken;
auth.importLoginToken#95ac5ce4 token:bytes = auth.LoginToken;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [auth.loginToken](/constructor/auth.loginToken/) | Login token (for [QR code login](https://core.telegram.org/api/qr-login)) |
| [auth.loginTokenMigrateTo](/constructor/auth.loginTokenMigrateTo/) | Repeat the query to the specified DC |
| [auth.loginTokenSuccess](/constructor/auth.loginTokenSuccess/) | Login via token (QR code) succeeded! |

## Методы

| Method | Описание |
|---|---|
| [auth.exportLoginToken](/method/auth.exportLoginToken/) | Generate a login token, for [login via QR code](https://core.telegram.org/api/qr-login). The generated login token should be encoded using base64url, then shown as a tg://login?token=base64encodedtoken [deep link »](https://core.telegram.org/api/links#qr-code-login-links) in the QR code. For more info, see [login via QR code](https://core.telegram.org/api/qr-login). |
| [auth.importLoginToken](/method/auth.importLoginToken/) | Login using a redirected login token, generated in case of DC mismatch during [QR code login](https://core.telegram.org/api/qr-login). For more info, see [login via QR code](https://core.telegram.org/api/qr-login). |
