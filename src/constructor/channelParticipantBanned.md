---
title: "channelParticipantBanned (конструктор)"
original: "https://core.telegram.org/constructor/channelParticipantBanned"
section: ref
kind: constructor
layout: layout.njk
---

# channelParticipantBanned

*Конструктор из схемы TL.*

> Banned/kicked user

## Определение TL

```
channelParticipantBanned#d5f0ad91 flags:# left:flags.0?true peer:Peer kicked_by:long date:int banned_rights:ChatBannedRights rank:flags.2?string = ChannelParticipant;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| left | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | Whether the user has left the group |
| peer | [Peer](/type/Peer/) | The banned peer |
| kicked_by | [long](/type/long/) | User was kicked by the specified admin |
| date | [int](/type/int/) | When did the user join the group |
| banned_rights | [ChatBannedRights](/type/ChatBannedRights/) | Banned [rights](https://core.telegram.org/api/rights) |
| rank | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[string](/type/string/) | The participant's [tag »](https://core.telegram.org/api/rank). |

## Тип

[ChannelParticipant](/type/ChannelParticipant/)

## Related pages

#### [Admin, banned, default rights](https://core.telegram.org/api/rights)

How to handle admin permissions, granular bans and global permissions in channels, groups and supergroups.

#### [Group participant tags](https://core.telegram.org/api/rank)

Members in group chats (both basic groups and supergroups) can add a tag next to their name — to show their role at work, what they study in school, and more.
