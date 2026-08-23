---
title: "updateMessagePoll (конструктор)"
original: "https://core.telegram.org/constructor/updateMessagePoll"
section: ref
kind: constructor
layout: layout.njk
---

# updateMessagePoll

*Конструктор из схемы TL.*

> The results of a poll have changed

## Определение TL

```
updateMessagePoll#aca1657b flags:# poll_id:long poll:flags.0?Poll results:PollResults = Update;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| peer | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[Peer](/type/Peer/) | Peer of the message containing the poll |
| msg_id | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[int](/type/int/) | Message ID of the poll |
| top_msg_id | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[int](/type/int/) | If the poll is in a forum topic, the ID of the top message of the topic |
| poll_id | [long](/type/long/) | Poll ID |
| poll | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[Poll](/type/Poll/) | If the server knows the client hasn't cached this poll yet, the poll itself |
| results | [PollResults](/type/PollResults/) | New poll results |

## Тип

[Update](/type/Update/)
