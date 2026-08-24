---
title: "account.toggleUsername"
original: "https://core.telegram.org/method/account.toggleUsername"
section: ref
kind: method
description: "Активировать или деактивировать купленное на fragment.com имя пользователя, связанное с текущим авторизованным пользователем."
layout: layout.njk
---

# account.toggleUsername

Активировать или деактивировать купленное на [fragment.com](https://fragment.com) имя пользователя, связанное с текущим авторизованным пользователем.

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
account.toggleUsername#58d6b376 username:string active:Bool = Bool;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>username</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Имя пользователя</td></tr><tr><td><strong>active</strong></td><td style="text-align: center;"><a href="/type/Bool">Bool</a></td><td>Включить или отключить его</td></tr></tbody></table>

### Результат

[Bool](/type/Bool/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>USERNAMES_ACTIVE_TOO_MUCH</td><td>Достигнуто максимальное количество активных имён пользователя.</td></tr><tr><td>400</td><td>USERNAME_INVALID</td><td>Указанное имя пользователя недействительно.</td></tr><tr><td>400</td><td>USERNAME_NOT_MODIFIED</td><td>Имя пользователя не было изменено.</td></tr></tbody></table>
