---
title: "messages.getFullChat"
original: "https://core.telegram.org/method/messages.getFullChat"
section: ref
kind: method
description: "Получить полную информацию об обычной группе."
layout: layout.njk
---

# messages.getFullChat

Получить полную информацию об [обычной группе](/api/channel/#basic-groups).

```
messages.chatFull#e5d7d19c full_chat:ChatFull chats:Vector<Chat> users:Vector<User> = messages.ChatFull;
---functions---
messages.getFullChat#aeb00b34 chat_id:long = messages.ChatFull;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>chat_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Идентификатор <a href="/api/channel#basic-groups">обычной группы</a>.</td></tr></tbody></table>

### Результат

[messages.ChatFull](/type/messages.ChatFull/)

### Этот метод доступен и пользователям, и ботам

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>CHAT_ID_INVALID</td><td>Указанный идентификатор чата недействителен.</td></tr><tr><td>400</td><td>PEER_ID_INVALID</td><td>Указанный идентификатор пира недействителен.</td></tr></tbody></table>

### Связанные страницы

#### [Каналы, супергруппы, гигагруппы и обычные группы](/api/channel/)

Как работать с каналами, супергруппами, гигагруппами и обычными группами и чем они друг от друга отличаются.
