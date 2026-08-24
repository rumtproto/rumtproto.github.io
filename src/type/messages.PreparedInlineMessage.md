---
title: "messages.PreparedInlineMessage"
original: "https://core.telegram.org/type/messages.PreparedInlineMessage"
section: ref
kind: type
description: "Представляет заранее подготовленное инлайн-сообщение, полученное через mini app бота, которое можно отправить в некоторые чаты »"
layout: layout.njk
---

# Messages.PreparedInlineMessage

[@term:Mini App] Представляет [заранее подготовленное инлайн-сообщение, полученное через mini app бота, которое можно отправить в некоторые чаты »](https://core.telegram.org/api/bots/inline#21-using-a-prepared-inline-message)

```
messages.preparedInlineMessage#ff57708d query_id:long result:BotInlineResult peer_types:Vector<InlineQueryPeerType> cache_time:int users:Vector<User> = messages.PreparedInlineMessage;

---functions---

messages.getPreparedInlineMessage#857ebdb8 bot:InputUser id:string = messages.PreparedInlineMessage;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/messages.preparedInlineMessage">messages.preparedInlineMessage</a></td><td>Представляет <a href="/api/bots/inline#21-using-a-prepared-inline-message">заранее подготовленное инлайн-сообщение, полученное через mini app бота, которое можно отправить в некоторые чаты »</a></td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/messages.getPreparedInlineMessage">messages.getPreparedInlineMessage</a></td><td>Получить <a href="/api/bots/inline#21-using-a-prepared-inline-message">заранее подготовленное инлайн-сообщение</a>, созданное <a href="/api/bots/webapps">mini app</a>: вызывается при обработке <a href="/api/web-events#web-app-send-prepared-message">событий web_app_send_prepared_message</a></td></tr></tbody></table>

### Связанные страницы

#### [Инлайн-запросы](/api/bots/inline/)

Пользователи могут взаимодействовать с вашим ботом через инлайн-запросы прямо из поля ввода текста в любом чате.
