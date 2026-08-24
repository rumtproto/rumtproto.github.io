---
title: "InputBotApp"
original: "https://core.telegram.org/type/InputBotApp"
section: ref
kind: type
description: "Используется для получения информации о Mini App с прямой ссылкой"
layout: layout.njk
---

# InputBotApp

[@term:Mini App] Используется для получения информации о [Mini App с прямой ссылкой](/api/bots/webapps/#direct-link-mini-apps)

```
inputBotAppID#a920bd7a id:long access_hash:long = InputBotApp;
inputBotAppShortName#908c0407 bot_id:InputUser short_name:string = InputBotApp;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/inputBotAppID">inputBotAppID</a></td><td>Используется для получения информации о <a href="/api/bots/webapps#direct-link-mini-apps">Mini App с прямой ссылкой</a> по его идентификатору</td></tr><tr><td><a href="/constructor/inputBotAppShortName">inputBotAppShortName</a></td><td>Используется для получения информации о <a href="/api/bots/webapps#direct-link-mini-apps">Mini App с прямой ссылкой</a> по его короткому имени</td></tr></tbody></table>

### Связанные страницы

#### [Mini Apps в Telegram](/api/bots/webapps/)

Боты могут предлагать пользователям интерактивные веб-приложения на HTML5, полностью заменяющие любой сайт.
