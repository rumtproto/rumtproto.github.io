---
title: "chat (конструктор)"
original: "https://core.telegram.org/constructor/chat"
section: ref
kind: constructor
layout: layout.njk
---

# chat

*Конструктор из схемы TL.*

> Info about a group.
> When updating the [local peer database](https://core.telegram.org/api/peers), all fields from the newly received constructor take priority over the old constructor cached locally (including by removing fields that aren't set in the new constructor).
> See [here »](https://github.com/tdlib/td/blob/077f71addad9db5d1a5692cc1255438793e75636/td/telegram/ChatManager.cpp#L5679) for an implementation of the logic to use when updating the [local chat peer database](https://core.telegram.org/api/peers).

## Определение TL

```
chat#41cbf256 flags:# creator:flags.0?true left:flags.2?true deactivated:flags.5?true call_active:flags.23?true call_not_empty:flags.24?true noforwards:flags.25?true id:long title:string photo:ChatPhoto participants_count:int date:int version:int migrated_to:flags.6?InputChannel admin_rights:flags.14?ChatAdminRights default_banned_rights:flags.18?ChatBannedRights = Chat;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| creator | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | Whether the current user is the creator of the group |
| left | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[true](/constructor/true/) | Whether the current user has left the group |
| deactivated | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).5?[true](/constructor/true/) | Whether the group was [migrated](https://core.telegram.org/api/channel) |
| call_active | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).23?[true](/constructor/true/) | Whether a group call is currently active |
| call_not_empty | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).24?[true](/constructor/true/) | Whether there's anyone in the group call |
| noforwards | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).25?[true](/constructor/true/) | Whether this group is [protected](https://telegram.org/blog/content-protection-delete-by-date-and-more), thus does not allow forwarding messages from it |
| id | [long](/type/long/) | ID of the group, see [here »](https://core.telegram.org/api/peers#peer-id) for more info and the available ID range. |
| title | [string](/type/string/) | Title |
| photo | [ChatPhoto](/type/ChatPhoto/) | Chat photo |
| participants_count | [int](/type/int/) | Participant count |
| date | [int](/type/int/) | Date of creation of the group |
| version | [int](/type/int/) | Used in basic groups to reorder updates and make sure that all of them were received. |
| migrated_to | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).6?[InputChannel](/type/InputChannel/) | Means this chat was [upgraded](https://core.telegram.org/api/channel) to a supergroup |
| admin_rights | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).14?[ChatAdminRights](/type/ChatAdminRights/) | [Admin rights](https://core.telegram.org/api/rights) of the user in the group |
| default_banned_rights | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).18?[ChatBannedRights](/type/ChatBannedRights/) | [Default banned rights](https://core.telegram.org/api/rights) of all users in the group |

## Тип

[Chat](/type/Chat/)

## Related pages

#### [Channels, supergroups, gigagroups and basic groups](https://core.telegram.org/api/channel)

How to handle channels, supergroups, gigagroups, basic groups, and what's the difference between them.

#### [Peer database](https://core.telegram.org/api/peers)

Many constructors in the API need to be stored in a local database upon reception and should only ever be updated reactively (passively) when received via updates or by other means (as specified in the documentation), to avoid overloading the server by continuously requesting changes for the same unchanged information.

#### [Admin, banned, default rights](https://core.telegram.org/api/rights)

How to handle admin permissions, granular bans and global permissions in channels, groups and supergroups.
