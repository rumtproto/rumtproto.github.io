---
title: "chatParticipantCreator (конструктор)"
original: "https://core.telegram.org/constructor/chatParticipantCreator"
section: ref
kind: constructor
layout: layout.njk
---

# chatParticipantCreator

*Конструктор из схемы TL.*

> Represents the creator of the [basic group »](https://core.telegram.org/api/channel#basic-groups)

## Определение TL

```
chatParticipantCreator#e1f867b8 flags:# user_id:long rank:flags.0?string = ChatParticipant;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| user_id | [long](/type/long/) | ID of the user that created the group |
| rank | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[string](/type/string/) | The participant's [tag »](https://core.telegram.org/api/rank). |

## Тип

[ChatParticipant](/type/ChatParticipant/)

## Related pages

#### [Group participant tags](https://core.telegram.org/api/rank)

Members in group chats (both basic groups and supergroups) can add a tag next to their name — to show their role at work, what they study in school, and more.

#### [Channels, supergroups, gigagroups and basic groups](https://core.telegram.org/api/channel)

How to handle channels, supergroups, gigagroups, basic groups, and what's the difference between them.
