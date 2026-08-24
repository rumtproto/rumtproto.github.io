---
title: "auth.reportMissingCode"
original: "https://core.telegram.org/method/auth.reportMissingCode"
section: ref
kind: method
description: "Только для официальных приложений: сообщает, что SMS с кодом авторизации не было доставлено."
layout: layout.njk
---

# auth.reportMissingCode

Только для официальных приложений: сообщает, что SMS с кодом авторизации не было доставлено.

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
auth.reportMissingCode#cb9deff6 phone_number:string phone_code_hash:string mnc:string = Bool;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>phone_number</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Номер телефона, на который должен был прийти код</td></tr><tr><td><strong>phone_code_hash</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Хеш телефонного кода, полученный от <a href="/method/auth.sendCode">auth.sendCode</a></td></tr><tr><td><strong>mnc</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td><a href="https://en.wikipedia.org/wiki/Mobile_country_code">MNC</a> текущего оператора связи.</td></tr></tbody></table>

### Результат

[Bool](/type/Bool/)

### Этот метод доступен только пользователям

### Этот метод можно вызывать по [неавторизованному соединению »](/api/auth/)

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>PHONE_NUMBER_INVALID</td><td>Недействительный номер телефона.</td></tr></tbody></table>

### Связанные страницы

#### [auth.sendCode](/method/auth.sendCode/)

Отправить код подтверждения для входа
