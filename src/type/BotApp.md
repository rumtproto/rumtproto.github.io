---
title: "BotApp"
original: "https://core.telegram.org/type/BotApp"
section: ref
kind: type
description: "Содержит информацию о Mini App с прямой ссылкой."
layout: layout.njk
---

# BotApp

[@term:Mini App] Содержит информацию о [Mini App с прямой ссылкой](/api/bots/webapps/#direct-link-mini-apps).

```
botAppNotModified#5da674b7 = BotApp;
botApp#95fcd1d6 flags:# id:long access_hash:long short_name:string title:string description:string photo:Photo document:flags.0?Document hash:long = BotApp;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/botAppNotModified">botAppNotModified</a></td><td>Сведения о приложении бота не изменились.</td></tr><tr><td><a href="/constructor/botApp">botApp</a></td><td>Содержит информацию о <a href="/api/bots/webapps#direct-link-mini-apps">Mini App с прямой ссылкой</a>.</td></tr></tbody></table>

### Связанные страницы

#### [Mini Apps в Telegram](/api/bots/webapps/)

Боты могут предлагать пользователям интерактивные веб-приложения на HTML5, полностью заменяющие любой сайт.
