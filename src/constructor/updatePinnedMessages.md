---
title: "updatePinnedMessages (конструктор)"
original: "https://core.telegram.org/constructor/updatePinnedMessages"
section: ref
kind: constructor
layout: layout.njk
---

# updatePinnedMessages

*Конструктор из схемы TL.*

> Some messages were pinned in a chat

## Определение TL

```
updatePinnedMessages#ed85eab5 flags:# pinned:flags.0?true peer:Peer messages:Vector<int> pts:int pts_count:int = Update;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| pinned | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | Whether the messages were pinned or unpinned |
| peer | [Peer](/type/Peer/) | Peer |
| messages | [Vector](https://core.telegram.org/type/Vector%20t)<[int](/type/int/)> | Message IDs |
| pts | [int](/type/int/) | [Event count after generation](/api/updates/) |
| pts_count | [int](/type/int/) | [Number of events that were generated](/api/updates/) |

## Тип

[Update](/type/Update/)

## Related pages

#### [Working with Updates](/api/updates/)

How to subscribe to updates and handle them properly.
