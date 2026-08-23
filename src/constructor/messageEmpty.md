---
title: "messageEmpty (конструктор)"
original: "https://core.telegram.org/constructor/messageEmpty"
section: ref
kind: constructor
layout: layout.njk
---

# messageEmpty

*Конструктор из схемы TL.*

> Empty constructor, non-existent message.

## Определение TL

```
messageEmpty#90a6ca84 flags:# id:int peer_id:flags.0?Peer = Message;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| id | [int](/type/int/) | Message identifier |
| peer_id | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[Peer](/type/Peer/) | Peer ID, the chat where this message was sent |

## Тип

[Message](/type/Message/)
