---
title: "help.setBotUpdatesStatus"
original: "https://core.telegram.org/method/help.setBotUpdatesStatus"
section: ref
kind: method
description: "Сообщает серверу количество необработанных обновлений бота, если они долго не обрабатывались; только для ботов"
layout: layout.njk
---

# help.setBotUpdatesStatus

Сообщает серверу количество необработанных обновлений бота, если они долго не обрабатывались; только для ботов

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
help.setBotUpdatesStatus#ec22cfcd pending_updates_count:int message:string = Bool;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>pending_updates_count</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Количество ожидающих обновлений</td></tr><tr><td><strong>message</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Сообщение об ошибке, если оно есть</td></tr></tbody></table>

### Результат

[Bool](/type/Bool/)

### Этот метод доступен только ботам

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>USER_BOT_REQUIRED</td><td>Этот метод может вызывать только бот.</td></tr></tbody></table>
