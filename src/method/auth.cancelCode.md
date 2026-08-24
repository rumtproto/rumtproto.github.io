---
title: "auth.cancelCode"
original: "https://core.telegram.org/method/auth.cancelCode"
section: ref
kind: method
description: "Отменить код подтверждения входа"
layout: layout.njk
---

# auth.cancelCode

Отменить код подтверждения входа

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
auth.cancelCode#1f040578 phone_number:string phone_code_hash:string = Bool;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>phone_number</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Номер телефона</td></tr><tr><td><strong>phone_code_hash</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Хеш телефонного кода из <a href="/method/auth.sendCode">auth.sendCode</a></td></tr></tbody></table>

### Результат

[Bool](/type/Bool/)

### Этот метод доступен только пользователям

### Этот метод можно вызывать по [неавторизованному соединению »](/api/auth/)

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>PHONE_CODE_EXPIRED</td><td>Срок действия указанного вами кода подтверждения истёк.</td></tr><tr><td>406</td><td>PHONE_NUMBER_INVALID</td><td>Недействительный номер телефона.</td></tr></tbody></table>

### Связанные страницы

#### [auth.sendCode](/method/auth.sendCode/)

Отправить код подтверждения для входа
