---
title: "channelParticipantCreator (конструктор)"
original: "https://core.telegram.org/constructor/channelParticipantCreator"
section: ref
kind: constructor
layout: layout.njk
---

# channelParticipantCreator

*Конструктор из схемы TL.*

> Channel/supergroup creator

## Определение TL

```
channelParticipantCreator#2fe601d3 flags:# user_id:long admin_rights:ChatAdminRights rank:flags.0?string = ChannelParticipant;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| user_id | [long](/type/long/) | User ID |
| admin_rights | [ChatAdminRights](/type/ChatAdminRights/) | Creator admin rights |
| rank | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[string](/type/string/) | The participant's [tag »](https://core.telegram.org/api/rank), defaults to "Owner" if not set. |

## Тип

[ChannelParticipant](/type/ChannelParticipant/)

## Related pages

#### [Group participant tags](https://core.telegram.org/api/rank)

Members in group chats (both basic groups and supergroups) can add a tag next to their name — to show their role at work, what they study in school, and more.
