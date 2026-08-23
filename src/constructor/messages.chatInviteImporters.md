---
title: "messages.chatInviteImporters (конструктор)"
original: "https://core.telegram.org/constructor/messages.chatInviteImporters"
section: ref
kind: constructor
layout: layout.njk
---

# messages.chatInviteImporters

*Конструктор из схемы TL.*

> Info about the users that joined the chat using a specific chat invite

## Определение TL

```
messages.chatInviteImporters#81b6b00a count:int importers:Vector<ChatInviteImporter> users:Vector<User> = messages.ChatInviteImporters;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| count | [int](/type/int/) | Number of users that joined |
| importers | [Vector](https://core.telegram.org/type/Vector%20t)<[ChatInviteImporter](/type/ChatInviteImporter/)> | The users that joined |
| users | [Vector](https://core.telegram.org/type/Vector%20t)<[User](/type/User/)> | The users that joined |

## Тип

[messages.ChatInviteImporters](/type/messages.ChatInviteImporters/)
