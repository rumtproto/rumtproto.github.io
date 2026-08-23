---
title: "updateChatParticipant (конструктор)"
original: "https://core.telegram.org/constructor/updateChatParticipant"
section: ref
kind: constructor
layout: layout.njk
---

# updateChatParticipant

*Конструктор из схемы TL.*

> A user has joined or left a specific [basic group »](https://core.telegram.org/api/channel#basic-groups): this update can only be received by bots, see [here »](https://core.telegram.org/api/peers#basic-group-updates) for the user version of this update.

## Определение TL

```
updateChatParticipant#d087663a flags:# chat_id:long date:int actor_id:long user_id:long prev_participant:flags.0?ChatParticipant new_participant:flags.1?ChatParticipant invite:flags.2?ExportedChatInvite qts:int = Update;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| chat_id | [long](/type/long/) | [Chat](https://core.telegram.org/api/channel) ID |
| date | [int](/type/int/) | When did this event occur |
| actor_id | [long](/type/long/) | User that triggered the change (inviter, admin that kicked the user, or the even the user_id itself) |
| user_id | [long](/type/long/) | User that was affected by the change |
| prev_participant | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[ChatParticipant](/type/ChatParticipant/) | Previous participant info (empty if this participant just joined) |
| new_participant | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[ChatParticipant](/type/ChatParticipant/) | New participant info (empty if this participant just left) |
| invite | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[ExportedChatInvite](/type/ExportedChatInvite/) | The invite that was used to join the group |
| qts | [int](/type/int/) | New qts value, see [updates »](/api/updates/) for more info. |

## Тип

[Update](/type/Update/)

## Related pages

#### [Channels, supergroups, gigagroups and basic groups](https://core.telegram.org/api/channel)

How to handle channels, supergroups, gigagroups, basic groups, and what's the difference between them.

#### [Working with Updates](/api/updates/)

How to subscribe to updates and handle them properly.

#### [Peer database](https://core.telegram.org/api/peers)

Many constructors in the API need to be stored in a local database upon reception and should only ever be updated reactively (passively) when received via updates or by other means (as specified in the documentation), to avoid overloading the server by continuously requesting changes for the same unchanged information.
