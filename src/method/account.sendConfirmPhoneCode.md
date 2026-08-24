---
title: "account.sendConfirmPhoneCode"
original: "https://core.telegram.org/method/account.sendConfirmPhoneCode"
section: ref
kind: method
description: "Отправить код подтверждения для отмены удаления аккаунта; подробнее см. здесь »"
layout: layout.njk
---

# account.sendConfirmPhoneCode

Отправить код подтверждения для отмены удаления аккаунта; подробнее [см. здесь »](/api/account-deletion/)

```
auth.sentCode#5e002502 flags:# type:auth.SentCodeType phone_code_hash:string next_type:flags.1?auth.CodeType timeout:flags.2?int = auth.SentCode;
auth.sentCodeSuccess#2390fe44 authorization:auth.Authorization = auth.SentCode;
auth.sentCodePaymentRequired#e0955a3c store_product:string phone_code_hash:string support_email_address:string support_email_subject:string currency:string amount:long = auth.SentCode;
---functions---
account.sendConfirmPhoneCode#1b3faa88 hash:string settings:CodeSettings = auth.SentCode;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>hash</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>[@term:hash] Хеш из сервисного уведомления; подробнее <a href="/api/account-deletion">см. здесь »</a></td></tr><tr><td><strong>settings</strong></td><td style="text-align: center;"><a href="/type/CodeSettings">CodeSettings</a></td><td>Настройки кода подтверждения</td></tr></tbody></table>

### Результат

[auth.SentCode](/type/auth.SentCode/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>HASH_INVALID</td><td>Указанный хеш недействителен.</td></tr></tbody></table>

### Связанные страницы

#### [Удаление аккаунта](/api/account-deletion/)

Как сбросить аккаунт, если пароль двухфакторной аутентификации забыт.
