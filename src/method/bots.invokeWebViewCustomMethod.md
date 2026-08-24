---
title: "bots.invokeWebViewCustomMethod"
original: "https://core.telegram.org/method/bots.invokeWebViewCustomMethod"
section: ref
kind: method
description: "Отправить произвольный запрос от mini bot app, инициированный событием web\\_app\\_invoke\\_custom\\_method »."
layout: layout.njk
---

# bots.invokeWebViewCustomMethod

Отправить произвольный запрос от [mini bot app](/api/bots/webapps/), инициированный [событием web\_app\_invoke\_custom\_method »](/api/web-events/#web-app-invoke-custom-method).

Ответ следует отправлять с помощью события [custom\_method\_invoked](/api/bots/webapps/#custom-method-invoked); подробнее обо всём процессе [см. здесь »](/api/web-events/#web-app-invoke-custom-method).

```
dataJSON#7d748d04 data:string = DataJSON;
---functions---
bots.invokeWebViewCustomMethod#87fc5e7 bot:InputUser custom_method:string params:DataJSON = DataJSON;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>bot</strong></td><td style="text-align: center;"><a href="/type/InputUser">InputUser</a></td><td>Идентификатор бота, связанного с <a href="/api/bots/webapps">mini bot app</a></td></tr><tr><td><strong>custom_method</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Идентификатор пользовательского метода, который нужно вызвать</td></tr><tr><td><strong>params</strong></td><td style="text-align: center;"><a href="/type/DataJSON">DataJSON</a></td><td>Параметры метода</td></tr></tbody></table>

### Результат

[DataJSON](/type/DataJSON/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>BOT_INVALID</td><td>Это не бот.</td></tr><tr><td>400</td><td>DATA_JSON_INVALID</td><td>Указанные данные JSON недействительны.</td></tr><tr><td>400</td><td>METHOD_INVALID</td><td>Указанный метод недействителен.</td></tr></tbody></table>

### Связанные страницы

#### [Mini Apps в Telegram](/api/bots/webapps/)

Боты могут предлагать пользователям интерактивные веб-приложения на HTML5, полностью заменяющие любой сайт.

#### [Веб-события](/api/web-events/)

Как приложения Telegram взаимодействуют с веб-страницами
