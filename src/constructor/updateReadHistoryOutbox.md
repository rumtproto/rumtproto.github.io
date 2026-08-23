---
title: "updateReadHistoryOutbox (конструктор)"
original: "https://core.telegram.org/constructor/updateReadHistoryOutbox"
section: ref
kind: constructor
layout: layout.njk
---

# updateReadHistoryOutbox

*Конструктор из схемы TL.*

> Outgoing messages were read

## Определение TL

```
updateReadHistoryOutbox#2f2f21bf peer:Peer max_id:int pts:int pts_count:int = Update;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| peer | [Peer](/type/Peer/) | Peer |
| max_id | [int](/type/int/) | Maximum ID of read outgoing messages |
| pts | [int](/type/int/) | [Event count after generation](/api/updates/) |
| pts_count | [int](/type/int/) | [Number of events that were generated](/api/updates/) |

## Тип

[Update](/type/Update/)

## Related pages

#### [Working with Updates](/api/updates/)

How to subscribe to updates and handle them properly.
