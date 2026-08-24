---
title: "messages.chatFull"
original: "https://core.telegram.org/constructor/messages.chatFull"
section: ref
kind: constructor
description: "Полная информация о канале, супергруппе, гигагруппе или обычной группе."
layout: layout.njk
---

# messages.chatFull

Полная информация о [канале](/api/channel/#channels), [супергруппе](/api/channel/#supergroups), [гигагруппе](/api/channel/#gigagroups) или [обычной группе](/api/channel/#basic-groups).

```
messages.chatFull#e5d7d19c full_chat:ChatFull chats:Vector<Chat> users:Vector<User> = messages.ChatFull;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>full_chat</strong></td><td style="text-align: center;"><a href="/type/ChatFull">ChatFull</a></td><td>Полная информация</td></tr><tr><td><strong>chats</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/Chat">Chat</a>&gt;</td><td>Упомянутые чаты</td></tr><tr><td><strong>users</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/User">User</a>&gt;</td><td>Упомянутые пользователи</td></tr></tbody></table>

### Тип

[messages.ChatFull](/type/messages.ChatFull/)

### Связанные страницы

#### [Каналы, супергруппы, гигагруппы и обычные группы](/api/channel/)

Как работать с каналами, супергруппами, гигагруппами и обычными группами и чем они друг от друга отличаются.
