---
title: "updateEditChannelMessage (конструктор)"
original: "https://core.telegram.org/constructor/updateEditChannelMessage"
section: ref
kind: constructor
layout: layout.njk
---

# updateEditChannelMessage

*Конструктор из схемы TL.*

> A message was edited in a [channel/supergroup](https://core.telegram.org/api/channel)

## Определение TL

```
updateEditChannelMessage#1b3f4df7 message:Message pts:int pts_count:int = Update;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| message | [Message](/type/Message/) | The new message |
| pts | [int](/type/int/) | [Event count after generation](/api/updates/) |
| pts_count | [int](/type/int/) | [Number of events that were generated](/api/updates/) |

## Тип

[Update](/type/Update/)

## Related pages

#### [Working with Updates](/api/updates/)

How to subscribe to updates and handle them properly.

#### [Channels, supergroups, gigagroups and basic groups](https://core.telegram.org/api/channel)

How to handle channels, supergroups, gigagroups, basic groups, and what's the difference between them.
