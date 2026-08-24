---
title: "messages.ChatFull"
original: "https://core.telegram.org/type/messages.ChatFull"
section: ref
kind: type
description: "Полная информация о канале, супергруппе, гигагруппе или обычной группе."
layout: layout.njk
---

# messages.ChatFull

Полная информация о [канале](/api/channel/#channels), [супергруппе](/api/channel/#supergroups), [гигагруппе](/api/channel/#gigagroups) или [обычной группе](/api/channel/#basic-groups).

```
messages.chatFull#e5d7d19c full_chat:ChatFull chats:Vector<Chat> users:Vector<User> = messages.ChatFull;

---functions---

messages.getFullChat#aeb00b34 chat_id:long = messages.ChatFull;

channels.getFullChannel#8736a09 channel:InputChannel = messages.ChatFull;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/messages.chatFull">messages.chatFull</a></td><td>Полная информация о <a href="/api/channel#channels">канале</a>, <a href="/api/channel#supergroups">супергруппе</a>, <a href="/api/channel#gigagroups">гигагруппе</a> или <a href="/api/channel#basic-groups">обычной группе</a>.</td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/messages.getFullChat">messages.getFullChat</a></td><td>Получить полную информацию об <a href="/api/channel#basic-groups">обычной группе</a>.</td></tr><tr><td><a href="/method/channels.getFullChannel">channels.getFullChannel</a></td><td>Получить полную информацию о <a href="/api/channel#supergroups">супергруппе</a>, <a href="/api/channel#gigagroups">гигагруппе</a> или <a href="/api/channel#channels">канале</a></td></tr></tbody></table>

### Связанные страницы

#### [Каналы, супергруппы, гигагруппы и обычные группы](/api/channel/)

Как работать с каналами, супергруппами, гигагруппами и обычными группами и чем они друг от друга отличаются.
