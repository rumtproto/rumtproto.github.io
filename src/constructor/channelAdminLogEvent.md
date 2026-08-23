---
title: "channelAdminLogEvent (конструктор)"
original: "https://core.telegram.org/constructor/channelAdminLogEvent"
section: ref
kind: constructor
layout: layout.njk
---

# channelAdminLogEvent

*Конструктор из схемы TL.*

> Admin log event

## Определение TL

```
channelAdminLogEvent#1fad68cd id:long date:int user_id:long action:ChannelAdminLogEventAction = ChannelAdminLogEvent;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| id | [long](/type/long/) | Event ID |
| date | [int](/type/int/) | Date |
| user_id | [long](/type/long/) | User ID |
| action | [ChannelAdminLogEventAction](/type/ChannelAdminLogEventAction/) | Action |

## Тип

[ChannelAdminLogEvent](/type/ChannelAdminLogEvent/)
