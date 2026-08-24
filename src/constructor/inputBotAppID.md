---
title: "inputBotAppID"
original: "https://core.telegram.org/constructor/inputBotAppID"
section: ref
kind: constructor
description: "Используется для получения информации о Mini App с прямой ссылкой по его идентификатору"
layout: layout.njk
---

# inputBotAppID

[@term:Mini App] Используется для получения информации о [Mini App с прямой ссылкой](/api/bots/webapps/#direct-link-mini-apps) по его идентификатору

```
inputBotAppID#a920bd7a id:long access_hash:long = InputBotApp;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Идентификатор <a href="/api/bots/webapps#direct-link-mini-apps">Mini App с прямой ссылкой</a>.</td></tr><tr><td><strong>access_hash</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>[@term:access_hash] Хеш доступа, полученный из конструктора <a href="/constructor/botApp">botApp</a>.</td></tr></tbody></table>

### Тип

[InputBotApp](/type/InputBotApp/)

### Связанные страницы

#### [Mini Apps в Telegram](/api/bots/webapps/)

Боты могут предлагать пользователям интерактивные веб-приложения на HTML5, полностью заменяющие любой сайт.

#### [botApp](/constructor/botApp/)

Содержит информацию о [Mini App с прямой ссылкой](/api/bots/webapps/#direct-link-mini-apps).
