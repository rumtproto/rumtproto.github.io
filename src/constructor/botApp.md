---
title: "botApp"
original: "https://core.telegram.org/constructor/botApp"
section: ref
kind: constructor
description: "Содержит информацию о Mini App с прямой ссылкой."
layout: layout.njk
---

# botApp

[@term:Mini App] Содержит информацию о [Mini App с прямой ссылкой](/api/bots/webapps/#direct-link-mini-apps).

```
botApp#95fcd1d6 flags:# id:long access_hash:long short_name:string title:string description:string photo:Photo document:flags.0?Document hash:long = BotApp;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>идентификатор mini app бота</td></tr><tr><td><strong>access_hash</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>[@term:access_hash] хеш доступа mini app бота</td></tr><tr><td><strong>short_name</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>[@term:short_name] краткое имя mini app бота, используемое для формирования <a href="/api/links#direct-mini-app-links">глубоких ссылок Direct Mini App</a>.</td></tr><tr><td><strong>title</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>название mini app бота.</td></tr><tr><td><strong>description</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>описание mini app бота.</td></tr><tr><td><strong>photo</strong></td><td style="text-align: center;"><a href="/type/Photo">Photo</a></td><td>фотография mini app бота.</td></tr><tr><td><strong>document</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/Document">Document</a></td><td>анимация mini app бота.</td></tr><tr><td><strong>hash</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Хеш, который нужно передать в <a href="/method/messages.getBotApp">messages.getBotApp</a>, чтобы не запрашивать сведения о приложении бота повторно, если они не изменились.</td></tr></tbody></table>

### Тип

[BotApp](/type/BotApp/)

### Связанные страницы

#### [Глубокие ссылки](/api/links/)

Клиенты Telegram обязаны обрабатывать особые глубокие ссылки tg:// и t.me, встречающиеся в сообщениях, сущностях-ссылках и в других приложениях, регистрируя обработчики в операционной системе.

#### [messages.getBotApp](/method/messages.getBotApp/)

Получить сведения о [Mini App с прямой ссылкой](/api/bots/webapps/#direct-link-mini-apps)

#### [Mini Apps в Telegram](/api/bots/webapps/)

Боты могут предлагать пользователям интерактивные веб-приложения на HTML5, полностью заменяющие любой сайт.
