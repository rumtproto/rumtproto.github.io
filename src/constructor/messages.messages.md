---
title: "messages.messages"
original: "https://core.telegram.org/constructor/messages.messages"
section: ref
kind: constructor
description: "Полный список сообщений со вспомогательными данными."
layout: layout.njk
---

# messages.messages

Полный список сообщений со вспомогательными данными.

```
messages.messages#1d73e7ea messages:Vector<Message> topics:Vector<ForumTopic> chats:Vector<Chat> users:Vector<User> = messages.Messages;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>messages</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/Message">Message</a>&gt;</td><td>Список сообщений</td></tr><tr><td><strong>topics</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/ForumTopic">ForumTopic</a>&gt;</td><td><a href="/api/forum#forum-topics">Темы форума</a>, которым принадлежат возвращённые сообщения.</td></tr><tr><td><strong>chats</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/Chat">Chat</a>&gt;</td><td>Список чатов, упомянутых в диалогах</td></tr><tr><td><strong>users</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/User">User</a>&gt;</td><td>Список пользователей, упомянутых в сообщениях и чатах</td></tr></tbody></table>

### Тип

[messages.Messages](/type/messages.Messages/)

### Связанные страницы

#### [Темы форума](/api/forum/)

Telegram позволяет создавать форумы с несколькими самостоятельными темами.
