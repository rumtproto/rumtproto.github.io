---
title: "connectedBot"
original: "https://core.telegram.org/constructor/connectedBot"
section: ref
kind: constructor
description: "Содержит информацию о подключённом бизнес-боте »."
layout: layout.njk
---

# connectedBot

Содержит информацию о [подключённом бизнес-боте »](/api/bots/connected-business-bots/).

```
connectedBot#cd64636c flags:# bot_id:long recipients:BusinessBotRecipients rights:BusinessBotRights = ConnectedBot;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>bot_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Идентификатор подключённого бота</td></tr><tr><td><strong>recipients</strong></td><td style="text-align: center;"><a href="/type/BusinessBotRecipients">BusinessBotRecipients</a></td><td>Задаёт личные чаты, из которых <a href="/api/bots/connected-business-bots">подключённый бизнес-бот »</a> может получать сообщения и с которыми может взаимодействовать.<br></td></tr><tr><td><strong>rights</strong></td><td style="text-align: center;"><a href="/type/BusinessBotRights">BusinessBotRights</a></td><td>Права бизнес-бота.</td></tr></tbody></table>

### Тип

[ConnectedBot](/type/ConnectedBot/)

### Связанные страницы

#### [Подключённые бизнес-боты](/api/bots/connected-business-bots/)

Пользователи могут подключать ботов Telegram, которые будут обрабатывать сообщения и отвечать на них от имени пользователя. Это позволяет легко встроить любые уже существующие инструменты и рабочие процессы или добавить ИИ-помощников, которые ведут их чаты.
