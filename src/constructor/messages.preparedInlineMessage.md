---
title: "messages.preparedInlineMessage"
original: "https://core.telegram.org/constructor/messages.preparedInlineMessage"
section: ref
kind: constructor
description: "Представляет заранее подготовленное инлайн-сообщение, полученное через mini app бота, которое можно отправить в некоторые чаты »"
layout: layout.njk
---

# messages.preparedInlineMessage

[@term:Mini App] Представляет [заранее подготовленное инлайн-сообщение, полученное через mini app бота, которое можно отправить в некоторые чаты »](https://core.telegram.org/api/bots/inline#21-using-a-prepared-inline-message)

```
messages.preparedInlineMessage#ff57708d query_id:long result:BotInlineResult peer_types:Vector<InlineQueryPeerType> cache_time:int users:Vector<User> = messages.PreparedInlineMessage;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>query_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td><code>query_id</code>, который следует передать в <a href="/method/messages.sendInlineBotResult">messages.sendInlineBotResult</a></td></tr><tr><td><strong>result</strong></td><td style="text-align: center;"><a href="/type/BotInlineResult">BotInlineResult</a></td><td>Содержимое сообщения, которое будет показано в предварительном просмотре</td></tr><tr><td><strong>peer_types</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/InlineQueryPeerType">InlineQueryPeerType</a>&gt;</td><td>Типы чатов, в которые можно отправить это сообщение</td></tr><tr><td><strong>cache_time</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Время кеширования результатов</td></tr><tr><td><strong>users</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/User">User</a>&gt;</td><td>Пользователи, упомянутые в результатах</td></tr></tbody></table>

### Тип

[messages.PreparedInlineMessage](/type/messages.PreparedInlineMessage/)

### Связанные страницы

#### [messages.sendInlineBotResult](/method/messages.sendInlineBotResult/)

Отправить результат, полученный с помощью [messages.getInlineBotResults](/method/messages.getInlineBotResults/).

#### [Инлайн-запросы](/api/bots/inline/)

Пользователи могут взаимодействовать с вашим ботом через инлайн-запросы прямо из поля ввода текста в любом чате.
