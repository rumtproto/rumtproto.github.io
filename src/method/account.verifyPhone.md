---
title: "account.verifyPhone"
original: "https://core.telegram.org/method/account.verifyPhone"
section: ref
kind: method
description: "Подтвердить номер телефона для passport в Telegram."
layout: layout.njk
---

# account.verifyPhone

Подтвердить номер телефона для [passport](https://core.telegram.org/passport) в Telegram.

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
account.verifyPhone#4dd3a7f6 phone_number:string phone_code_hash:string phone_code:string = Bool;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>phone_number</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Номер телефона</td></tr><tr><td><strong>phone_code_hash</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Хеш телефонного кода, полученный при вызове <a href="/method/account.sendVerifyPhoneCode">account.sendVerifyPhoneCode</a></td></tr><tr><td><strong>phone_code</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Код, полученный после вызова <a href="/method/account.sendVerifyPhoneCode">account.sendVerifyPhoneCode</a></td></tr></tbody></table>

### Результат

[Bool](/type/Bool/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>PHONE_CODE_EMPTY</td><td>Отсутствует phone_code.</td></tr><tr><td>400</td><td>PHONE_CODE_EXPIRED</td><td>Срок действия указанного вами кода подтверждения истёк.</td></tr><tr><td>400</td><td>PHONE_NUMBER_INVALID</td><td>Недействительный номер телефона.</td></tr></tbody></table>

### Связанные страницы

#### [account.sendVerifyPhoneCode](/method/account.sendVerifyPhoneCode/)

Отправить код подтверждения по телефону для Telegram [Passport](https://core.telegram.org/passport).

#### [Telegram Passport: руководство](https://core.telegram.org/passport)

Telegram Passport — единый способ авторизации для сервисов, которым нужна идентификация личности.
