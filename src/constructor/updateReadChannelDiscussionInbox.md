---
title: "updateReadChannelDiscussionInbox (конструктор)"
original: "https://core.telegram.org/constructor/updateReadChannelDiscussionInbox"
section: ref
kind: constructor
layout: layout.njk
---

# updateReadChannelDiscussionInbox

*Конструктор из схемы TL.*

> Incoming comments in a [discussion thread](https://core.telegram.org/api/threads) were marked as read

## Определение TL

```
updateReadChannelDiscussionInbox#d6b19546 flags:# channel_id:long top_msg_id:int read_max_id:int broadcast_id:flags.0?long broadcast_post:flags.0?int = Update;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| channel_id | [long](/type/long/) | [Discussion group ID](https://core.telegram.org/api/channel) |
| top_msg_id | [int](/type/int/) | ID of the group message that started the [thread](https://core.telegram.org/api/threads) (message in linked discussion group) |
| read_max_id | [int](/type/int/) | Message ID of latest read incoming message for this [thread](https://core.telegram.org/api/threads) |
| broadcast_id | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[long](/type/long/) | If set, contains the ID of the [channel](https://core.telegram.org/api/channel) that contains the post that started the [comment thread](https://core.telegram.org/api/threads) in the discussion group (channel_id) |
| broadcast_post | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[int](/type/int/) | If set, contains the ID of the channel post that started the [comment thread](https://core.telegram.org/api/threads) |

## Тип

[Update](/type/Update/)

## Related pages

#### [Channels, supergroups, gigagroups and basic groups](https://core.telegram.org/api/channel)

How to handle channels, supergroups, gigagroups, basic groups, and what's the difference between them.

#### [Message threads](https://core.telegram.org/api/threads)

Telegram allows commenting on a channel post or on a generic supergroup message, thanks to message threads.
