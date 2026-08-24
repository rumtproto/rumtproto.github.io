---
title: "bots.reorderUsernames"
original: "https://core.telegram.org/method/bots.reorderUsernames"
section: ref
kind: method
description: "Изменить порядок имён пользователя, связанных с принадлежащим нам ботом."
layout: layout.njk
---

# bots.reorderUsernames

Изменить порядок имён пользователя, связанных с принадлежащим нам ботом.

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
bots.reorderUsernames#9709b1c2 bot:InputUser order:Vector<string> = Bool;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>bot</strong></td><td style="text-align: center;"><a href="/type/InputUser">InputUser</a></td><td>Бот</td></tr><tr><td><strong>order</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/string">string</a>&gt;</td><td>Новый порядок активных имён пользователя. Должны быть указаны все активные имена пользователя.</td></tr></tbody></table>

### Результат

[Bool](/type/Bool/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>BOT_INVALID</td><td>Это не бот.</td></tr><tr><td>400</td><td>USERNAME_NOT_MODIFIED</td><td>Имя пользователя не было изменено.</td></tr></tbody></table>
