---
title: "bots.answerWebhookJSONQuery"
original: "https://core.telegram.org/method/bots.answerWebhookJSONQuery"
section: ref
kind: method
description: "Отвечает на пользовательский запрос; только для ботов"
layout: layout.njk
---

# bots.answerWebhookJSONQuery

Отвечает на пользовательский запрос; только для ботов

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
bots.answerWebhookJSONQuery#e6213f4d query_id:long data:DataJSON = Bool;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>query_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Идентификатор пользовательского запроса</td></tr><tr><td><strong>data</strong></td><td style="text-align: center;"><a href="/type/DataJSON">DataJSON</a></td><td>Сериализованный в JSON ответ на запрос</td></tr></tbody></table>

### Результат

[Bool](/type/Bool/)

### Этот метод доступен только ботам

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>DATA_JSON_INVALID</td><td>Указанные данные JSON недействительны.</td></tr><tr><td>400</td><td>QUERY_ID_INVALID</td><td>Указанный идентификатор запроса недействителен.</td></tr><tr><td>400</td><td>USER_BOT_REQUIRED</td><td>Этот метод может вызывать только бот.</td></tr></tbody></table>
