---
title: "updateBotBusinessConnect"
original: "https://core.telegram.org/constructor/updateBotBusinessConnect"
section: ref
kind: constructor
description: "Подключение или отключение бизнес-бота, а также изменение настроек подключения отправляет боту обновление updateBotBusinessConnect с новыми настройками и идентификатором…"
layout: layout.njk
---

# updateBotBusinessConnect

Подключение или отключение [бизнес-бота](/api/bots/connected-business-bots/), а также изменение настроек подключения отправляет боту обновление [updateBotBusinessConnect](/constructor/updateBotBusinessConnect/) с новыми настройками и идентификатором `connection_id`, который бот будет использовать, чтобы обрабатывать обновления от пользователя и отправлять сообщения от его имени.

```
updateBotBusinessConnect#8ae5c97a connection:BotBusinessConnection qts:int = Update;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>connection</strong></td><td style="text-align: center;"><a href="/type/BotBusinessConnection">BotBusinessConnection</a></td><td>Настройки бизнес-подключения</td></tr><tr><td><strong>qts</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>[@term:qts] Новое значение <strong>qts</strong>, подробнее см. <a href="/api/updates">обновления »</a>.</td></tr></tbody></table>

### Тип

[Update](/type/Update/)

### Связанные страницы

#### [Работа с обновлениями](/api/updates/)

Как подписаться на обновления и правильно их обрабатывать.

#### [Подключённые бизнес-боты](/api/bots/connected-business-bots/)

Пользователи могут подключать ботов Telegram, которые будут обрабатывать сообщения и отвечать на них от имени пользователя. Это позволяет легко встроить любые уже существующие инструменты и рабочие процессы или добавить ИИ-помощников, которые ведут их чаты.

#### [updateBotBusinessConnect](/constructor/updateBotBusinessConnect/)

Подключение или отключение [бизнес-бота](/api/bots/connected-business-bots/), а также изменение настроек подключения отправляет боту обновление [updateBotBusinessConnect](/constructor/updateBotBusinessConnect/) с новыми настройками и идентификатором `connection_id`, который бот будет использовать, чтобы обрабатывать обновления от пользователя и отправлять сообщения от его имени.
