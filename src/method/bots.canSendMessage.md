---
title: "bots.canSendMessage"
original: "https://core.telegram.org/method/bots.canSendMessage"
section: ref
kind: method
description: "Проверить, может ли указанный бот отправлять нам сообщения"
layout: layout.njk
---

# bots.canSendMessage

Проверить, может ли указанный бот отправлять нам сообщения

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
bots.canSendMessage#1359f4e6 bot:InputUser = Bool;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>bot</strong></td><td style="text-align: center;"><a href="/type/InputUser">InputUser</a></td><td>Бот</td></tr></tbody></table>

### Результат

[Bool](/type/Bool/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>BOT_INVALID</td><td>Это не бот.</td></tr></tbody></table>
