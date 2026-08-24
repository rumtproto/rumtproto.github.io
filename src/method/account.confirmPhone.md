---
title: "account.confirmPhone"
original: "https://core.telegram.org/method/account.confirmPhone"
section: ref
kind: method
description: "Подтвердить номер телефона, чтобы отменить удаление аккаунта; подробнее см. здесь »"
layout: layout.njk
---

# account.confirmPhone

Подтвердить номер телефона, чтобы отменить удаление аккаунта; подробнее [см. здесь »](/api/account-deletion/)

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
account.confirmPhone#5f2178c3 phone_code_hash:string phone_code:string = Bool;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>phone_code_hash</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Хеш телефонного кода, подробнее <a href="/api/account-deletion">см. здесь »</a></td></tr><tr><td><strong>phone_code</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>SMS-код, подробнее <a href="/api/account-deletion">см. здесь »</a></td></tr></tbody></table>

### Результат

[Bool](/type/Bool/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>CODE_HASH_INVALID</td><td>Недействительный хеш кода.</td></tr><tr><td>400</td><td>PHONE_CODE_EMPTY</td><td>Отсутствует phone_code.</td></tr></tbody></table>

### Связанные страницы

#### [Удаление аккаунта](/api/account-deletion/)

Как сбросить аккаунт, если пароль двухфакторной аутентификации забыт.
