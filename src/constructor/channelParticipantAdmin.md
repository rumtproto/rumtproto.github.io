---
title: "channelParticipantAdmin (конструктор)"
original: "https://core.telegram.org/constructor/channelParticipantAdmin"
section: ref
kind: constructor
layout: layout.njk
---

# channelParticipantAdmin

*Конструктор из схемы TL.*

> Admin

## Определение TL

```
channelParticipantAdmin#34c3bb53 flags:# can_edit:flags.0?true self:flags.1?true user_id:long inviter_id:flags.1?long promoted_by:long date:int admin_rights:ChatAdminRights rank:flags.2?string = ChannelParticipant;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| can_edit | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | Can this admin promote other admins with the same permissions? |
| self | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[true](/constructor/true/) | Is this the current user |
| user_id | [long](/type/long/) | Admin user ID |
| inviter_id | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[long](/type/long/) | User that invited the admin to the channel/group |
| promoted_by | [long](/type/long/) | User that promoted the user to admin |
| date | [int](/type/int/) | When did the user join |
| admin_rights | [ChatAdminRights](/type/ChatAdminRights/) | Admin [rights](https://core.telegram.org/api/rights) |
| rank | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[string](/type/string/) | The participant's [tag »](https://core.telegram.org/api/rank), defaults to "Admin" if not set. |

## Тип

[ChannelParticipant](/type/ChannelParticipant/)

## Related pages

#### [Admin, banned, default rights](https://core.telegram.org/api/rights)

How to handle admin permissions, granular bans and global permissions in channels, groups and supergroups.

#### [Group participant tags](https://core.telegram.org/api/rank)

Members in group chats (both basic groups and supergroups) can add a tag next to their name — to show their role at work, what they study in school, and more.
