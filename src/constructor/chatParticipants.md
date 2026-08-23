---
title: "chatParticipants (конструктор)"
original: "https://core.telegram.org/constructor/chatParticipants"
section: ref
kind: constructor
layout: layout.njk
---

# chatParticipants

*Конструктор из схемы TL.*

> Contains the full list of members of [basic groups »](https://core.telegram.org/api/channel#basic-groups); is **NOT** usable for supergroups/channels.

## Определение TL

```
chatParticipants#3cbc93f8 chat_id:long participants:Vector<ChatParticipant> version:int = ChatParticipants;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| chat_id | [long](/type/long/) | Group identifier |
| participants | [Vector](https://core.telegram.org/type/Vector%20t)<[ChatParticipant](/type/ChatParticipant/)> | List of group members |
| version | [int](/type/int/) | Group version number |

## Тип

[ChatParticipants](/type/ChatParticipants/)

## Related pages

#### [Channels, supergroups, gigagroups and basic groups](https://core.telegram.org/api/channel)

How to handle channels, supergroups, gigagroups, basic groups, and what's the difference between them.
