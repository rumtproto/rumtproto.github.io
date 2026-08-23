---
title: "updateChannelUserTyping (конструктор)"
original: "https://core.telegram.org/constructor/updateChannelUserTyping"
section: ref
kind: constructor
layout: layout.njk
---

# updateChannelUserTyping

*Конструктор из схемы TL.*

> A user is typing in a [supergroup, channel](https://core.telegram.org/api/channel) or [message thread](https://core.telegram.org/api/threads)

## Определение TL

```
updateChannelUserTyping#8c88c923 flags:# channel_id:long top_msg_id:flags.0?int from_id:Peer action:SendMessageAction = Update;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| channel_id | [long](/type/long/) | Channel ID |
| top_msg_id | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[int](/type/int/) | [Thread ID](https://core.telegram.org/api/threads) |
| from_id | [Peer](/type/Peer/) | The peer that is typing |
| action | [SendMessageAction](/type/SendMessageAction/) | Whether the user is typing, sending a media or doing something else |

## Тип

[Update](/type/Update/)

## Related pages

#### [Message threads](https://core.telegram.org/api/threads)

Telegram allows commenting on a channel post or on a generic supergroup message, thanks to message threads.

#### [Channels, supergroups, gigagroups and basic groups](https://core.telegram.org/api/channel)

How to handle channels, supergroups, gigagroups, basic groups, and what's the difference between them.
