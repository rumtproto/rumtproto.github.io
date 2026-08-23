---
title: "messages.affectedMessages (конструктор)"
original: "https://core.telegram.org/constructor/messages.affectedMessages"
section: ref
kind: constructor
layout: layout.njk
---

# messages.affectedMessages

*Конструктор из схемы TL.*

> Events affected by operation

## Определение TL

```
messages.affectedMessages#84d19185 pts:int pts_count:int = messages.AffectedMessages;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| pts | [int](/type/int/) | [Event count after generation](/api/updates/) |
| pts_count | [int](/type/int/) | [Number of events that were generated](/api/updates/) |

## Тип

[messages.AffectedMessages](/type/messages.AffectedMessages/)

## Related pages

#### [Working with Updates](/api/updates/)

How to subscribe to updates and handle them properly.
