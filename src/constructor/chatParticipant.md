---
title: "chatParticipant (конструктор)"
original: "https://core.telegram.org/constructor/chatParticipant"
section: ref
kind: constructor
layout: layout.njk
---

# chatParticipant

*Конструктор из схемы TL.*

> [Basic group](https://core.telegram.org/api/channel#basic-groups) member (not usable by supergroups).

## Определение TL

```
chatParticipant#38e79fde flags:# user_id:long inviter_id:long date:int rank:flags.0?string = ChatParticipant;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| user_id | [long](/type/long/) | Member user ID |
| inviter_id | [long](/type/long/) | ID of the user that added the member to the group |
| date | [int](/type/int/) | Date added to the group |
| rank | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[string](/type/string/) | The participant's [tag »](https://core.telegram.org/api/rank). |

## Тип

[ChatParticipant](/type/ChatParticipant/)

## Related pages

#### [Group participant tags](https://core.telegram.org/api/rank)

Members in group chats (both basic groups and supergroups) can add a tag next to their name — to show their role at work, what they study in school, and more.

#### [Channels, supergroups, gigagroups and basic groups](https://core.telegram.org/api/channel)

How to handle channels, supergroups, gigagroups, basic groups, and what's the difference between them.
