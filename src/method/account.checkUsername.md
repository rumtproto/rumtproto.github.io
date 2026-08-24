---
title: "account.checkUsername"
original: "https://core.telegram.org/method/account.checkUsername"
section: ref
kind: method
description: "Проверяет корректность имени пользователя и его доступность."
layout: layout.njk
---

# account.checkUsername

Проверяет корректность имени пользователя и его доступность.

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
account.checkUsername#2714d86c username:string = Bool;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>username</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>имя пользователя<br>Допустимые символы: A-z (без учёта регистра), 0-9 и подчёркивания.<br>Длина: 5–32 символа.</td></tr></tbody></table>

### Результат

[Bool](/type/Bool/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>USERNAME_INVALID</td><td>Указанное имя пользователя недействительно.</td></tr><tr><td>400</td><td>USERNAME_OCCUPIED</td><td>Указанное имя пользователя уже занято.</td></tr><tr><td>400</td><td>USERNAME_PURCHASE_AVAILABLE</td><td>Указанное имя пользователя можно приобрести на <a href="https://fragment.com">https://fragment.com</a>.</td></tr></tbody></table>
