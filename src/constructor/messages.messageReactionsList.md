---
title: "messages.messageReactionsList"
original: "https://core.telegram.org/constructor/messages.messageReactionsList"
section: ref
kind: constructor
description: "Список пиров, отреагировавших на конкретное сообщение"
layout: layout.njk
---

# messages.messageReactionsList

Список пиров, отреагировавших на конкретное сообщение

```
messages.messageReactionsList#31bd492d flags:# count:int reactions:Vector<MessagePeerReaction> chats:Vector<Chat> users:Vector<User> next_offset:flags.0?string = messages.MessageReactionsList;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>count</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Общее число реакций, соответствующих запросу</td></tr><tr><td><strong>reactions</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/MessagePeerReaction">MessagePeerReaction</a>&gt;</td><td>Список пиров, отреагировавших на конкретное сообщение</td></tr><tr><td><strong>chats</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/Chat">Chat</a>&gt;</td><td>Упомянутые чаты</td></tr><tr><td><strong>users</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/User">User</a>&gt;</td><td>Упомянутые пользователи</td></tr><tr><td><strong>next_offset</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/string">string</a></td><td>[@term:next_offset] Если установлено, указывает следующее смещение, которое следует использовать для загрузки дополнительных результатов вызовом <a href="/method/messages.getMessageReactionsList">messages.getMessageReactionsList</a>.</td></tr></tbody></table>

### Тип

[messages.MessageReactionsList](/type/messages.MessageReactionsList/)

### Связанные страницы

#### [messages.getMessageReactionsList](/method/messages.getMessageReactionsList/)

Получить список [реакций на сообщение](/api/reactions/) вместе с отправителем каждой реакции.
