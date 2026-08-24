---
title: "messages.setBotGuestChatResult"
original: "https://core.telegram.org/method/messages.setBotGuestChatResult"
section: ref
kind: method
description: "Боты могут использовать этот метод, чтобы ответить на запрос гостевого режима », полученный через обновление updateBotGuestChatQuery, передав сообщение для публикации в чате в…"
layout: layout.njk
---

# messages.setBotGuestChatResult

Боты могут использовать этот метод, чтобы ответить на запрос [гостевого режима »](/api/bots/guest-mode/), полученный через обновление [updateBotGuestChatQuery](/constructor/updateBotGuestChatQuery/), передав сообщение для публикации в чате в качестве гостя; подробнее [см. здесь »](/api/bots/guest-mode/#handling-guest-queries-bot-side).

```
 Method schema is available as of layer 225. Switch »
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>query_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Идентификатор запроса из поля <a href="/constructor/updateBotGuestChatQuery">updateBotGuestChatQuery</a>.<code>query_id</code></td></tr><tr><td><strong>result</strong></td><td style="text-align: center;"><a href="/type/InputBotInlineResult">InputBotInlineResult</a></td><td>Результат, который следует отправить в ответ на запрос</td></tr></tbody></table>

### Результат

[InputBotInlineMessageID](/type/InputBotInlineMessageID/)

### Этот метод доступен только ботам

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>403</td><td>USER_BOT_INVALID</td><td>При вызове этого метода пользовательские аккаунты обязаны передавать параметр метода <code>bot</code>. Если такого параметра у метода нет, метод могут вызывать только аккаунты ботов.</td></tr><tr><td>400</td><td>USER_BOT_REQUIRED</td><td>Этот метод может вызывать только бот.</td></tr></tbody></table>

### Связанные страницы

#### [updateBotGuestChatQuery](/constructor/updateBotGuestChatQuery/)

Отправляется [гостевым ботам »](/api/bots/guest-mode/), когда пользователь вызывает бота в чате как гостя. Боту следует ответить вызовом [messages.setBotGuestChatResult](/method/messages.setBotGuestChatResult/), подробнее см. [здесь »](/api/bots/guest-mode/#handling-guest-queries-bot-side).

#### [Гостевой режим для ботов](/api/bots/guest-mode/)

Гостевых ботов можно вызывать по имени пользователя из **любого** несекретного личного чата, группы и супергруппы (кроме групп и супергрупп с включённой [защитой контента »](/api/content-protection/#for-groups-and-channels)); они публикуют свои результаты прямо в чат, даже если не состоят в нём.
