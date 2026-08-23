---
title: "chatParticipantsForbidden (конструктор)"
original: "https://core.telegram.org/constructor/chatParticipantsForbidden"
section: ref
kind: constructor
layout: layout.njk
---

# chatParticipantsForbidden

*Конструктор из схемы TL.*

> The full list of members of [basic groups »](https://core.telegram.org/api/channel#basic-groups) is not available to you, because you were banned.

## Определение TL

```
chatParticipantsForbidden#8763d3e1 flags:# chat_id:long self_participant:flags.0?ChatParticipant = ChatParticipants;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| chat_id | [long](/type/long/) | Group ID |
| self_participant | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[ChatParticipant](/type/ChatParticipant/) | Info about the group membership of the current user |

## Тип

[ChatParticipants](/type/ChatParticipants/)

## Related pages

#### [Channels, supergroups, gigagroups and basic groups](https://core.telegram.org/api/channel)

How to handle channels, supergroups, gigagroups, basic groups, and what's the difference between them.
