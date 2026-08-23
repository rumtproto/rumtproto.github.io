---
title: "updateNewChannelMessage (конструктор)"
original: "https://core.telegram.org/constructor/updateNewChannelMessage"
section: ref
kind: constructor
layout: layout.njk
---

# updateNewChannelMessage

*Конструктор из схемы TL.*

> A new message was sent in a [channel/supergroup](https://core.telegram.org/api/channel)

## Определение TL

```
updateNewChannelMessage#62ba04d9 message:Message pts:int pts_count:int = Update;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| message | [Message](/type/Message/) | New message |
| pts | [int](/type/int/) | [Event count after generation](/api/updates/) |
| pts_count | [int](/type/int/) | [Number of events that were generated](/api/updates/) |

## Тип

[Update](/type/Update/)

## Related pages

#### [Working with Updates](/api/updates/)

How to subscribe to updates and handle them properly.

#### [Channels, supergroups, gigagroups and basic groups](https://core.telegram.org/api/channel)

How to handle channels, supergroups, gigagroups, basic groups, and what's the difference between them.
