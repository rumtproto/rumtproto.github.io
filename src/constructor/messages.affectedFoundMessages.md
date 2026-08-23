---
title: "messages.affectedFoundMessages (конструктор)"
original: "https://core.telegram.org/constructor/messages.affectedFoundMessages"
section: ref
kind: constructor
layout: layout.njk
---

# messages.affectedFoundMessages

*Конструктор из схемы TL.*

> Messages found and affected by changes

## Определение TL

```
messages.affectedFoundMessages#ef8d3e6c pts:int pts_count:int offset:int messages:Vector<int> = messages.AffectedFoundMessages;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| pts | [int](/type/int/) | [Event count after generation](/api/updates/) |
| pts_count | [int](/type/int/) | [Number of events that were generated](/api/updates/) |
| offset | [int](/type/int/) | If bigger than zero, the request must be repeated to remove more messages |
| messages | [Vector](https://core.telegram.org/type/Vector%20t)<[int](/type/int/)> | Affected message IDs |

## Тип

[messages.AffectedFoundMessages](/type/messages.AffectedFoundMessages/)

## Related pages

#### [Working with Updates](/api/updates/)

How to subscribe to updates and handle them properly.
