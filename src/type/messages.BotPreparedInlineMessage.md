---
title: "messages.BotPreparedInlineMessage"
original: "https://core.telegram.org/type/messages.BotPreparedInlineMessage"
section: ref
kind: type
description: "Представляет заранее подготовленное инлайн-сообщение, сохранённое ботом для отправки пользователю через веб-приложение »"
layout: layout.njk
---

# Messages.BotPreparedInlineMessage

Представляет [заранее подготовленное инлайн-сообщение, сохранённое ботом для отправки пользователю через веб-приложение »](https://core.telegram.org/api/bots/inline#21-using-a-prepared-inline-message)

```
messages.botPreparedInlineMessage#8ecf0511 id:string expire_date:int = messages.BotPreparedInlineMessage;

---functions---

messages.savePreparedInlineMessage#f21f7f2f flags:# result:InputBotInlineResult user_id:InputUser peer_types:flags.0?Vector<InlineQueryPeerType> = messages.BotPreparedInlineMessage;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/messages.botPreparedInlineMessage">messages.botPreparedInlineMessage</a></td><td>Представляет <a href="/api/bots/inline#21-using-a-prepared-inline-message">заранее подготовленное инлайн-сообщение, сохранённое ботом для отправки пользователю через веб-приложение »</a></td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/messages.savePreparedInlineMessage">messages.savePreparedInlineMessage</a></td><td>[@term:Mini App] Сохранить <a href="/api/bots/inline#21-using-a-prepared-inline-message">заранее подготовленное инлайн-сообщение</a> для отправки пользователем mini app через <a href="/api/web-events#web-app-send-prepared-message">событие web_app_send_prepared_message</a></td></tr></tbody></table>

### Связанные страницы

#### [Инлайн-запросы](/api/bots/inline/)

Пользователи могут взаимодействовать с вашим ботом через инлайн-запросы прямо из поля ввода текста в любом чате.
