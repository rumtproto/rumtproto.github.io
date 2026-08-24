---
title: "bots.toggleUsername"
original: "https://core.telegram.org/method/bots.toggleUsername"
section: ref
kind: method
description: "Активировать или деактивировать купленное на fragment.com имя пользователя, связанное с принадлежащим нам ботом."
layout: layout.njk
---

# bots.toggleUsername

Активировать или деактивировать купленное на [fragment.com](https://fragment.com) имя пользователя, связанное с принадлежащим нам ботом.

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
bots.toggleUsername#53ca973 bot:InputUser username:string active:Bool = Bool;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>bot</strong></td><td style="text-align: center;"><a href="/type/InputUser">InputUser</a></td><td>Бот</td></tr><tr><td><strong>username</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Имя пользователя</td></tr><tr><td><strong>active</strong></td><td style="text-align: center;"><a href="/type/Bool">Bool</a></td><td>Включить или отключить его</td></tr></tbody></table>

### Результат

[Bool](/type/Bool/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>BOT_INVALID</td><td>Это не бот.</td></tr><tr><td>400</td><td>USERNAME_NOT_MODIFIED</td><td>Имя пользователя не было изменено.</td></tr></tbody></table>
