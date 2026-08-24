---
title: "messages.getPreparedInlineMessage"
original: "https://core.telegram.org/method/messages.getPreparedInlineMessage"
section: ref
kind: method
description: "Получить заранее подготовленное инлайн-сообщение, созданное mini app: вызывается при обработке событий web\\_app\\_send\\_prepared\\_message"
layout: layout.njk
---

# messages.getPreparedInlineMessage

[@term:Mini App] Получить [заранее подготовленное инлайн-сообщение](https://core.telegram.org/api/bots/inline#21-using-a-prepared-inline-message), созданное [mini app](/api/bots/webapps/): вызывается при обработке [событий web\_app\_send\_prepared\_message](/api/web-events/#web-app-send-prepared-message)

```
messages.preparedInlineMessage#ff57708d query_id:long result:BotInlineResult peer_types:Vector<InlineQueryPeerType> cache_time:int users:Vector<User> = messages.PreparedInlineMessage;
---functions---
messages.getPreparedInlineMessage#857ebdb8 bot:InputUser id:string = messages.PreparedInlineMessage;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>bot</strong></td><td style="text-align: center;"><a href="/type/InputUser">InputUser</a></td><td>Бот, которому принадлежит mini app, отправивший <a href="/api/web-events#web-app-send-prepared-message">событие web_app_send_prepared_message</a></td></tr><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td><code>id</code> из <a href="/api/web-events#web-app-send-prepared-message">события web_app_send_prepared_message</a></td></tr></tbody></table>

### Результат

[messages.PreparedInlineMessage](/type/messages.PreparedInlineMessage/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>ID_EXPIRED</td><td>Срок действия переданного идентификатора заранее подготовленного инлайн-сообщения истёк.</td></tr><tr><td>400</td><td>ID_INVALID</td><td>Переданный идентификатор недействителен.</td></tr></tbody></table>

### Связанные страницы

#### [Веб-события](/api/web-events/)

Как приложения Telegram взаимодействуют с веб-страницами

#### [Инлайн-запросы](/api/bots/inline/)

Пользователи могут взаимодействовать с вашим ботом через инлайн-запросы прямо из поля ввода текста в любом чате.

#### [Mini Apps в Telegram](/api/bots/webapps/)

Боты могут предлагать пользователям интерактивные веб-приложения на HTML5, полностью заменяющие любой сайт.
