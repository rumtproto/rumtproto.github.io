---
title: "Вход по QR-коду"
original: "https://core.telegram.org/api/qr-login"
section: api
description: "Процедура входа по QR-коду."
layout: layout.njk
---

# Вход по QR-коду

Процедура входа по [QR-коду](https://en.wikipedia.org/wiki/QR_code).

Соответствующая TL-схема:

```
auth.loginToken#629f1980 expires:int token:bytes = auth.LoginToken;
auth.loginTokenMigrateTo#68e9916 dc_id:int token:bytes = auth.LoginToken;
auth.loginTokenSuccess#390d5c5e authorization:auth.Authorization = auth.LoginToken;

updateLoginToken#564fe691 = Update;

authorization#ad01d61d flags:# current:flags.0?true official_app:flags.1?true password_pending:flags.2?true encrypted_requests_disabled:flags.3?true call_requests_disabled:flags.4?true unconfirmed:flags.5?true hash:long device_model:string platform:string system_version:string api_id:int app_name:string app_version:string date_created:int date_active:int ip:string country:string region:string = Authorization;

---functions---

auth.exportLoginToken#b7e085fe api_id:int api_hash:string except_ids:Vector<long> = auth.LoginToken;
auth.acceptLoginToken#e894ad4d token:bytes = Authorization;
auth.importLoginToken#95ac5ce4 token:bytes = auth.LoginToken;
```

### Экспорт токена входа

[@term:token] Прежде всего приложение, которое хочет войти в существующий аккаунт Telegram, обязано вызвать [auth.exportLoginToken](/method/auth.exportLoginToken/).  
Метод вернёт конструктор [auth.loginToken](/constructor/auth.loginToken/), содержащий двоичный токен входа `token` (одноразовый идентификатор попытки входа) и срок его действия — как правило, 30 секунд.

Приложение обязано закодировать токен `token` в [base64url](https://tools.ietf.org/html/rfc4648#section-5), встроить его в URL вида `tg://login?token=<base64url-encoded-token>` и показать пользователю в виде [QR-кода](https://en.wikipedia.org/wiki/QR_code).  
Когда срок действия текущего QR-кода истечёт, приложение обязано снова вызвать метод [auth.exportLoginToken](/method/auth.exportLoginToken/) и автоматически сгенерировать новый QR-код.

### Приём токена входа

Чтобы вход состоялся, уже авторизованное приложение Telegram обязано отсканировать QR-код и принять его вызовом [auth.acceptLoginToken](/method/auth.acceptLoginToken/).  
Прежде чем передать токен в метод, приложение обязано извлечь его из URI `tg://login` и [декодировать из base64url](https://tools.ietf.org/html/rfc4648#section-5).

Метод может вернуть следующие [ошибки](/api/errors/):

-   400 — `AUTH_TOKEN_INVALID`, `AUTH_TOKEN_INVALID1`, передан недействительный токен авторизации
-   400 — `AUTH_TOKEN_EXPIRED`, срок действия переданного токена авторизации истёк, и требуется заново отсканировать обновлённый QR-код
-   400 — `AUTH_TOKEN_ALREADY_ACCEPTED`, токен авторизации уже был использован

Метод вернёт объект [authorization](/constructor/authorization/) со сведениями о только что авторизованных приложении и сессии.

### Подтверждение (импорт) токена входа

После того как авторизованное приложение вызовет [auth.acceptLoginToken](/method/auth.acceptLoginToken/) и примет токен входа, приложение, которое пытается войти, получит обновление [updateLoginToken](/constructor/updateLoginToken/) — оно должно повлечь за собой **второй** вызов метода [auth.exportLoginToken](/method/auth.exportLoginToken/).

Этот второй вызов должен вернуть конструктор [auth.loginTokenSuccess](/constructor/auth.loginTokenSuccess/), означающий **успешный вход**, то есть открывающий дальнейшее авторизованное взаимодействие с API.

Если же дата-центры (DC) у двух приложений разные, вместо него возвращается [auth.loginTokenMigrateTo](/constructor/auth.loginTokenMigrateTo/); в ответ приложение, которое пытается войти, должно обратиться к указанному DC и вызвать там [auth.importLoginToken](/method/auth.importLoginToken/) с указанным токеном `token`.

Вот этот вызов и должен наконец вернуть конструктор [auth.loginTokenSuccess](/constructor/auth.loginTokenSuccess/).
