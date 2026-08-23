---
title: "ChatParticipants (тип)"
original: "https://core.telegram.org/type/ChatParticipants"
section: ref
kind: type
layout: layout.njk
---

# ChatParticipants

*Тип из схемы TL.*

> Contains the full list of members of [basic groups »](https://core.telegram.org/api/channel#basic-groups); is **NOT** usable for supergroups/channels.

## Определение TL

```
chatParticipantsForbidden#8763d3e1 flags:# chat_id:long self_participant:flags.0?ChatParticipant = ChatParticipants;
chatParticipants#3cbc93f8 chat_id:long participants:Vector<ChatParticipant> version:int = ChatParticipants;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [chatParticipantsForbidden](/constructor/chatParticipantsForbidden/) | The full list of members of [basic groups »](https://core.telegram.org/api/channel#basic-groups) is not available to you, because you were banned. |
| [chatParticipants](/constructor/chatParticipants/) | Contains the full list of members of [basic groups »](https://core.telegram.org/api/channel#basic-groups); is NOT usable for supergroups/channels. |

## Related pages

#### [Channels, supergroups, gigagroups and basic groups](https://core.telegram.org/api/channel)

How to handle channels, supergroups, gigagroups, basic groups, and what's the difference between them.
