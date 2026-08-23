---
title: "updateChannelWebPage (конструктор)"
original: "https://core.telegram.org/constructor/updateChannelWebPage"
section: ref
kind: constructor
layout: layout.njk
---

# updateChannelWebPage

*Конструктор из схемы TL.*

> A webpage preview of a link in a [channel/supergroup](https://core.telegram.org/api/channel) message was generated

## Определение TL

```
updateChannelWebPage#2f2ba99f channel_id:long webpage:WebPage pts:int pts_count:int = Update;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| channel_id | [long](/type/long/) | [Channel/supergroup](https://core.telegram.org/api/channel) ID |
| webpage | [WebPage](/type/WebPage/) | Generated webpage preview |
| pts | [int](/type/int/) | [Event count after generation](/api/updates/) |
| pts_count | [int](/type/int/) | [Number of events that were generated](/api/updates/) |

## Тип

[Update](/type/Update/)

## Related pages

#### [Channels, supergroups, gigagroups and basic groups](https://core.telegram.org/api/channel)

How to handle channels, supergroups, gigagroups, basic groups, and what's the difference between them.

#### [Working with Updates](/api/updates/)

How to subscribe to updates and handle them properly.
