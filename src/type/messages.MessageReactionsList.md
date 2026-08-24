---
title: "messages.MessageReactionsList"
original: "https://core.telegram.org/type/messages.MessageReactionsList"
section: ref
kind: type
description: "Список пиров, отреагировавших на конкретное сообщение"
layout: layout.njk
---

# messages.MessageReactionsList

Список пиров, отреагировавших на конкретное сообщение

```
messages.messageReactionsList#31bd492d flags:# count:int reactions:Vector<MessagePeerReaction> chats:Vector<Chat> users:Vector<User> next_offset:flags.0?string = messages.MessageReactionsList;

---functions---

messages.getMessageReactionsList#461b3f48 flags:# peer:InputPeer id:int reaction:flags.0?Reaction offset:flags.1?string limit:int = messages.MessageReactionsList;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/messages.messageReactionsList">messages.messageReactionsList</a></td><td>Список пиров, отреагировавших на конкретное сообщение</td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/messages.getMessageReactionsList">messages.getMessageReactionsList</a></td><td>Получить список <a href="/api/reactions">реакций на сообщение</a> вместе с отправителем каждой реакции.</td></tr></tbody></table>
