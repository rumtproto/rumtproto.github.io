---
title: "messages.BotApp"
original: "https://core.telegram.org/type/messages.BotApp"
section: ref
kind: type
description: "Содержит информацию о Mini App с прямой ссылкой"
layout: layout.njk
---

# messages.BotApp

[@term:Mini App] Содержит информацию о [Mini App с прямой ссылкой](/api/bots/webapps/#direct-link-mini-apps)

```
messages.botApp#eb50adf5 flags:# inactive:flags.0?true request_write_access:flags.1?true has_settings:flags.2?true app:BotApp = messages.BotApp;

---functions---

messages.getBotApp#34fdc5c3 app:InputBotApp hash:long = messages.BotApp;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/messages.botApp">messages.botApp</a></td><td>Содержит информацию о <a href="/api/bots/webapps#direct-link-mini-apps">Mini App с прямой ссылкой</a></td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/messages.getBotApp">messages.getBotApp</a></td><td>Получить сведения о <a href="/api/bots/webapps#direct-link-mini-apps">Mini App с прямой ссылкой</a></td></tr></tbody></table>

### Связанные страницы

#### [Mini Apps в Telegram](/api/bots/webapps/)

Боты могут предлагать пользователям интерактивные веб-приложения на HTML5, полностью заменяющие любой сайт.
