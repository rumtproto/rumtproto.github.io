---
title: "updateBotGuestChatQuery"
original: "https://core.telegram.org/constructor/updateBotGuestChatQuery"
section: ref
kind: constructor
description: "Отправляется гостевым ботам », когда пользователь вызывает бота в чате как гостя. Боту следует ответить вызовом messages.setBotGuestChatResult, подробнее см. здесь »."
layout: layout.njk
---

# updateBotGuestChatQuery

Отправляется [гостевым ботам »](/api/bots/guest-mode/), когда пользователь вызывает бота в чате как гостя. Боту следует ответить вызовом [messages.setBotGuestChatResult](/method/messages.setBotGuestChatResult/), подробнее см. [здесь »](/api/bots/guest-mode/#handling-guest-queries-bot-side).

```
Constructor schema is available as of layer 225. Switch »
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>query_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Идентификатор запроса, который следует передать в <a href="/method/messages.setBotGuestChatResult">messages.setBotGuestChatResult</a> при ответе</td></tr><tr><td><strong>message</strong></td><td style="text-align: center;"><a href="/type/Message">Message</a></td><td>Сообщение, вызвавшее запрос</td></tr><tr><td><strong>reference_messages</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/Message">Message</a>&gt;</td><td>Дополнительные контекстные сообщения, на которые ссылается вызвавшее срабатывание сообщение (например, сообщения, на которые был дан ответ)</td></tr><tr><td><strong>qts</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>[@term:qts] <a href="/api/updates">Постоянная метка времени</a> (<code>qts</code>) обновления, используется ботами для получения обновлений этого типа</td></tr></tbody></table>

### Тип

[Update](/type/Update/)

### Связанные страницы

#### [messages.setBotGuestChatResult](/method/messages.setBotGuestChatResult/)

Боты могут использовать этот метод, чтобы ответить на запрос [гостевого режима »](/api/bots/guest-mode/), полученный через обновление [updateBotGuestChatQuery](/constructor/updateBotGuestChatQuery/), передав сообщение для публикации в чате в качестве гостя; подробнее [см. здесь »](/api/bots/guest-mode/#handling-guest-queries-bot-side).

#### [Работа с обновлениями](/api/updates/)

Как подписаться на обновления и правильно их обрабатывать.

#### [Гостевой режим для ботов](/api/bots/guest-mode/)

Гостевых ботов можно вызывать по имени пользователя из **любого** несекретного личного чата, группы и супергруппы (кроме групп и супергрупп с включённой [защитой контента »](/api/content-protection/#for-groups-and-channels)); они публикуют свои результаты прямо в чат, даже если не состоят в нём.
