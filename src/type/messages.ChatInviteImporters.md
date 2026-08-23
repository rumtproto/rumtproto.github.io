---
title: "messages.ChatInviteImporters (тип)"
original: "https://core.telegram.org/type/messages.ChatInviteImporters"
section: ref
kind: type
layout: layout.njk
---

# messages.ChatInviteImporters

*Тип из схемы TL.*

> List of users that imported a chat invitation link.

## Определение TL

```
messages.chatInviteImporters#81b6b00a count:int importers:Vector<ChatInviteImporter> users:Vector<User> = messages.ChatInviteImporters;

---functions---

messages.getChatInviteImporters#df04dd4e flags:# requested:flags.0?true subscription_expired:flags.3?true peer:InputPeer link:flags.1?string q:flags.2?string offset_date:int offset_user:InputUser limit:int = messages.ChatInviteImporters;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [messages.chatInviteImporters](/constructor/messages.chatInviteImporters/) | Info about the users that joined the chat using a specific chat invite |

## Методы

| Method | Описание |
|---|---|
| [messages.getChatInviteImporters](/method/messages.getChatInviteImporters/) | Get info about the users that joined the chat using a specific chat invite |
