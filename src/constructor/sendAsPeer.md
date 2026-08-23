---
title: "sendAsPeer (конструктор)"
original: "https://core.telegram.org/constructor/sendAsPeer"
section: ref
kind: constructor
layout: layout.njk
---

# sendAsPeer

*Конструктор из схемы TL.*

> Indicates a peer that can be used to send messages

## Определение TL

```
sendAsPeer#b81c7034 flags:# premium_required:flags.0?true peer:Peer = SendAsPeer;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| premium_required | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | Whether a Telegram Premium account is required to send messages as this peer |
| peer | [Peer](/type/Peer/) | Peer |

## Тип

[SendAsPeer](/type/SendAsPeer/)
