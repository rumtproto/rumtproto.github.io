---
title: "botBusinessConnection"
original: "https://core.telegram.org/constructor/botBusinessConnection"
section: ref
kind: constructor
description: "Содержит информацию о бизнес-подключении бота."
layout: layout.njk
---

# botBusinessConnection

Содержит информацию о [бизнес-подключении бота](/api/bots/connected-business-bots/).

```
botBusinessConnection#8f34b2f5 flags:# disabled:flags.1?true connection_id:string user_id:long dc_id:int date:int rights:flags.2?BusinessBotRights = BotBusinessConnection;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>disabled</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/constructor/true">true</a></td><td>Отключено ли сейчас это бизнес-подключение</td></tr><tr><td><strong>connection_id</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Идентификатор бизнес-подключения, используемый для распознавания сообщений, приходящих через это подключение, и для ответа на них, как описано <a href="/api/bots/connected-business-bots">здесь »</a>.</td></tr><tr><td><strong>user_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Идентификатор пользователя, с которым бот связан через это подключение.</td></tr><tr><td><strong>dc_id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Идентификатор дата-центра, в который следует отправлять запросы, обёрнутые в <a href="/method/invokeWithBusinessConnection">invokeWithBusinessConnection</a>, как описано <a href="/api/bots/connected-business-bots">здесь »</a>.</td></tr><tr><td><strong>date</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Когда было создано подключение.</td></tr><tr><td><strong>rights</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/type/BusinessBotRights">BusinessBotRights</a></td><td>Права бизнес-бота.</td></tr></tbody></table>

### Тип

[BotBusinessConnection](/type/BotBusinessConnection/)

### Связанные страницы

#### [Подключённые бизнес-боты](/api/bots/connected-business-bots/)

Пользователи могут подключать ботов Telegram, которые будут обрабатывать сообщения и отвечать на них от имени пользователя. Это позволяет легко встроить любые уже существующие инструменты и рабочие процессы или добавить ИИ-помощников, которые ведут их чаты.

#### [invokeWithBusinessConnection](/method/invokeWithBusinessConnection/)

Вызвать метод через [подключение Telegram Business Bot; подробнее, включая список методов, которые можно обернуть в этот конструктор, см. здесь »](/api/bots/connected-business-bots/).

Всегда отправляйте запросы, обёрнутые в `invokeWithBusinessConnection`, в дата-центр с идентификатором, указанным в поле `dc_id` используемого [botBusinessConnection](/constructor/botBusinessConnection/).
