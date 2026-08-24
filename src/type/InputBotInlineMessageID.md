---
title: "InputBotInlineMessageID"
original: "https://core.telegram.org/type/InputBotInlineMessageID"
section: ref
kind: type
description: "Представляет отправленное инлайн-сообщение с точки зрения бота"
layout: layout.njk
---

# InputBotInlineMessageID

Представляет отправленное инлайн-сообщение с точки зрения бота

```
inputBotInlineMessageID#890c3d89 dc_id:int id:long access_hash:long = InputBotInlineMessageID;
inputBotInlineMessageID64#b6d915d7 dc_id:int owner_id:long id:int access_hash:long = InputBotInlineMessageID;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/inputBotInlineMessageID">inputBotInlineMessageID</a></td><td>Представляет отправленное инлайн-сообщение с точки зрения бота (устаревший конструктор)</td></tr><tr><td><a href="/constructor/inputBotInlineMessageID64">inputBotInlineMessageID64</a></td><td>Представляет отправленное инлайн-сообщение с точки зрения бота</td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/messages.setBotGuestChatResult">messages.setBotGuestChatResult</a></td><td>Боты могут использовать этот метод, чтобы ответить на запрос <a href="/api/bots/guest-mode">гостевого режима »</a>, полученный через обновление <a href="/constructor/updateBotGuestChatQuery">updateBotGuestChatQuery</a>, передав сообщение для публикации в чате в качестве гостя; подробнее <a href="/api/bots/guest-mode#handling-guest-queries-bot-side">см. здесь »</a>.</td></tr></tbody></table>
