---
title: "inputBotAppShortName"
original: "https://core.telegram.org/constructor/inputBotAppShortName"
section: ref
kind: constructor
description: "Используется для получения информации о Mini App с прямой ссылкой по его короткому имени"
layout: layout.njk
---

# inputBotAppShortName

[@term:Mini App] Используется для получения информации о [Mini App с прямой ссылкой](/api/bots/webapps/#direct-link-mini-apps) по его короткому имени

```
inputBotAppShortName#908c0407 bot_id:InputUser short_name:string = InputBotApp;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>bot_id</strong></td><td style="text-align: center;"><a href="/type/InputUser">InputUser</a></td><td>Идентификатор бота, которому принадлежит mini app</td></tr><tr><td><strong>short_name</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>[@term:short_name] Краткое имя, полученное из <a href="/api/links#direct-mini-app-links">прямой глубокой ссылки на Mini App</a></td></tr></tbody></table>

### Тип

[InputBotApp](/type/InputBotApp/)

### Связанные страницы

#### [Глубокие ссылки](/api/links/)

Клиенты Telegram обязаны обрабатывать особые глубокие ссылки tg:// и t.me, встречающиеся в сообщениях, сущностях-ссылках и в других приложениях, регистрируя обработчики в операционной системе.

#### [Mini Apps в Telegram](/api/bots/webapps/)

Боты могут предлагать пользователям интерактивные веб-приложения на HTML5, полностью заменяющие любой сайт.
