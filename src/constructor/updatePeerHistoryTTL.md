---
title: "updatePeerHistoryTTL (конструктор)"
original: "https://core.telegram.org/constructor/updatePeerHistoryTTL"
section: ref
kind: constructor
layout: layout.njk
---

# updatePeerHistoryTTL

*Конструктор из схемы TL.*

> The Time-To-Live for messages sent by the current user in a specific chat has changed

## Определение TL

```
updatePeerHistoryTTL#bb9bb9a5 flags:# peer:Peer ttl_period:flags.0?int = Update;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| peer | [Peer](/type/Peer/) | The chat |
| ttl_period | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[int](/type/int/) | The new Time-To-Live |

## Тип

[Update](/type/Update/)
