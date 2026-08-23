---
title: "groupCallMessage (конструктор)"
original: "https://core.telegram.org/constructor/groupCallMessage"
section: ref
kind: constructor
layout: layout.njk
---

# groupCallMessage

*Конструктор из схемы TL.*

> Represents an [in-call message »](https://core.telegram.org/api/group-calls#in-call-messages), emoji reaction, paid live story comment or standalone paid live story donation.
> #### [End-to-end schema](/schema/end-to-end/)
> ```
> ===216===
> groupCallMessage#907ce88e random_id:long message:TextWithEntities = GroupCallMessage;
> ```
> #### API schema

## Определение TL

```
groupCallMessage#1a8afc7e flags:# from_admin:flags.1?true id:int from_id:Peer date:int message:TextWithEntities paid_message_stars:flags.0?long = GroupCallMessage;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| from_admin | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[true](/constructor/true/) | Whether the message was sent by a group call admin |
| id | [int](/type/int/) | Message ID |
| from_id | [Peer](/type/Peer/) | Displayed message author |
| date | [int](/type/int/) | Message date |
| message | [TextWithEntities](/type/TextWithEntities/) | Message text or emoji reaction; empty for standalone paid live story donations. Must be at most [group_call_message_length_limit »](https://core.telegram.org/api/config#group-call-message-length-limit) UTF-8 characters long. For paid chats, use [stars_groupcall_message_limits »](https://core.telegram.org/api/config#stars-groupcall-message-limits) to source limits according to the passed value of paid_message_stars, instead. |
| paid_message_stars | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[long](/type/long/) | Number of Telegram Stars donated with the message or standalone donation |

## Тип

[GroupCallMessage](/type/GroupCallMessage/)

## Related pages

#### [Client configuration](https://core.telegram.org/api/config)

The MTProto API has multiple configuration parameters that can be fetched with the appropriate methods.

#### [Group calls](https://core.telegram.org/api/group-calls)

How to start, join and manage group calls and video chats.
