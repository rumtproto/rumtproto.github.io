---
title: "updateDeleteChannelMessages (конструктор)"
original: "https://core.telegram.org/constructor/updateDeleteChannelMessages"
section: ref
kind: constructor
layout: layout.njk
---

# updateDeleteChannelMessages

*Конструктор из схемы TL.*

> Some messages in a [supergroup/channel](https://core.telegram.org/api/channel) were deleted

## Определение TL

```
updateDeleteChannelMessages#c32d5b12 channel_id:long messages:Vector<int> pts:int pts_count:int = Update;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| channel_id | [long](/type/long/) | Channel ID |
| messages | [Vector](https://core.telegram.org/type/Vector%20t)<[int](/type/int/)> | IDs of messages that were deleted |
| pts | [int](/type/int/) | [Event count after generation](/api/updates/) |
| pts_count | [int](/type/int/) | [Number of events that were generated](/api/updates/) |

## Тип

[Update](/type/Update/)

## Related pages

#### [Working with Updates](/api/updates/)

How to subscribe to updates and handle them properly.

#### [Channels, supergroups, gigagroups and basic groups](https://core.telegram.org/api/channel)

How to handle channels, supergroups, gigagroups, basic groups, and what's the difference between them.
