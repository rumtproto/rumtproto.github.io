---
title: "Authorization"
original: "https://core.telegram.org/type/Authorization"
section: ref
kind: type
description: "Представляет активную сессию"
layout: layout.njk
---

# Authorization

Представляет активную сессию

```
authorization#ad01d61d flags:# current:flags.0?true official_app:flags.1?true password_pending:flags.2?true encrypted_requests_disabled:flags.3?true call_requests_disabled:flags.4?true unconfirmed:flags.5?true hash:long device_model:string platform:string system_version:string api_id:int app_name:string app_version:string date_created:int date_active:int ip:string country:string region:string = Authorization;

---functions---

auth.acceptLoginToken#e894ad4d token:bytes = Authorization;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/authorization">authorization</a></td><td>Активная сессия</td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/auth.acceptLoginToken">auth.acceptLoginToken</a></td><td>Принять токен входа по QR-коду, выполнив вход в приложении, которое его сгенерировало.<br><br>Возвращает информацию о новой сессии.<br><br>Подробнее см. <a href="/api/qr-login">вход по QR-коду</a>.</td></tr></tbody></table>
