---
title: "bots.sendCustomRequest"
original: "https://core.telegram.org/method/bots.sendCustomRequest"
section: ref
kind: method
description: "Отправляет произвольный запрос; только для ботов"
layout: layout.njk
---

# bots.sendCustomRequest

Отправляет произвольный запрос; только для ботов

```
dataJSON#7d748d04 data:string = DataJSON;
---functions---
bots.sendCustomRequest#aa2769ed custom_method:string params:DataJSON = DataJSON;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>custom_method</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Имя метода</td></tr><tr><td><strong>params</strong></td><td style="text-align: center;"><a href="/type/DataJSON">DataJSON</a></td><td>Сериализованные в JSON параметры метода</td></tr></tbody></table>

### Результат

[DataJSON](/type/DataJSON/)

### Этот метод доступен только ботам

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>DATA_JSON_INVALID</td><td>Указанные данные JSON недействительны.</td></tr><tr><td>400</td><td>METHOD_INVALID</td><td>Указанный метод недействителен.</td></tr><tr><td>400</td><td>USER_BOT_REQUIRED</td><td>Этот метод может вызывать только бот.</td></tr></tbody></table>
