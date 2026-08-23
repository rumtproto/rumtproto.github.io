---
title: "updateChannelParticipant (конструктор)"
original: "https://core.telegram.org/constructor/updateChannelParticipant"
section: ref
kind: constructor
layout: layout.njk
---

# updateChannelParticipant

*Конструктор из схемы TL.*

> A participant has left, joined, was banned or admined in a [channel or supergroup](https://core.telegram.org/api/channel).

## Определение TL

```
updateChannelParticipant#985d3abb flags:# via_chatlist:flags.3?true channel_id:long date:int actor_id:long user_id:long prev_participant:flags.0?ChannelParticipant new_participant:flags.1?ChannelParticipant invite:flags.2?ExportedChatInvite qts:int = Update;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| via_chatlist | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).3?[true](/constructor/true/) | Whether the participant joined using a [chat folder deep link »](https://core.telegram.org/api/links#chat-folder-links). |
| channel_id | [long](/type/long/) | Channel ID |
| date | [int](/type/int/) | Date of the event |
| actor_id | [long](/type/long/) | User that triggered the change (inviter, admin that kicked the user, or the even the user_id itself) |
| user_id | [long](/type/long/) | User that was affected by the change |
| prev_participant | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[ChannelParticipant](/type/ChannelParticipant/) | Previous participant status |
| new_participant | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[ChannelParticipant](/type/ChannelParticipant/) | New participant status |
| invite | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[ExportedChatInvite](/type/ExportedChatInvite/) | Chat invite used to join the [channel/supergroup](https://core.telegram.org/api/channel) |
| qts | [int](/type/int/) | New qts value, see [updates »](/api/updates/) for more info. |

## Тип

[Update](/type/Update/)

## Related pages

#### [Deep links](https://core.telegram.org/api/links)

Telegram clients must handle special tg:// and t.me deep links encountered in messages, link entities and in other apps by registering OS handlers.

#### [Channels, supergroups, gigagroups and basic groups](https://core.telegram.org/api/channel)

How to handle channels, supergroups, gigagroups, basic groups, and what's the difference between them.

#### [Working with Updates](/api/updates/)

How to subscribe to updates and handle them properly.
