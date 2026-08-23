---
title: "updatePinnedChannelMessages (конструктор)"
original: "https://core.telegram.org/constructor/updatePinnedChannelMessages"
section: ref
kind: constructor
layout: layout.njk
---

# updatePinnedChannelMessages

*Конструктор из схемы TL.*

> Messages were pinned/unpinned in a [channel/supergroup](https://core.telegram.org/api/channel)

## Определение TL

```
updatePinnedChannelMessages#5bb98608 flags:# pinned:flags.0?true channel_id:long messages:Vector<int> pts:int pts_count:int = Update;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| pinned | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | Whether the messages were pinned or unpinned |
| channel_id | [long](/type/long/) | Channel ID |
| messages | [Vector](https://core.telegram.org/type/Vector%20t)<[int](/type/int/)> | Messages |
| pts | [int](/type/int/) | [Event count after generation](/api/updates/) |
| pts_count | [int](/type/int/) | [Number of events that were generated](/api/updates/) |

## Тип

[Update](/type/Update/)

## Related pages

#### [Working with Updates](/api/updates/)

How to subscribe to updates and handle them properly.

#### [Channels, supergroups, gigagroups and basic groups](https://core.telegram.org/api/channel)

How to handle channels, supergroups, gigagroups, basic groups, and what's the difference between them.
