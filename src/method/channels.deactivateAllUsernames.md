---
title: "channels.deactivateAllUsernames"
original: "https://core.telegram.org/method/channels.deactivateAllUsernames"
section: ref
kind: method
description: "Отключить все купленные имена пользователя супергруппы или канала"
layout: layout.njk
---

# channels.deactivateAllUsernames

Отключить все купленные имена пользователя супергруппы или канала

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
channels.deactivateAllUsernames#a245dd3 channel:InputChannel = Bool;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>channel</strong></td><td style="text-align: center;"><a href="/type/InputChannel">InputChannel</a></td><td>Супергруппа или канал</td></tr></tbody></table>

### Результат

[Bool](/type/Bool/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>CHANNEL_INVALID</td><td>Указанный канал недействителен.</td></tr></tbody></table>
