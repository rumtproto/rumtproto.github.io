---
title: "updateReadChannelOutbox (конструктор)"
original: "https://core.telegram.org/constructor/updateReadChannelOutbox"
section: ref
kind: constructor
layout: layout.njk
---

# updateReadChannelOutbox

*Конструктор из схемы TL.*

> Outgoing messages in a [channel/supergroup](https://core.telegram.org/api/channel) were read

## Определение TL

```
updateReadChannelOutbox#b75f99a9 channel_id:long max_id:int = Update;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| channel_id | [long](/type/long/) | Channel/supergroup ID |
| max_id | [int](/type/int/) | Position up to which all outgoing messages are read. |

## Тип

[Update](/type/Update/)

## Related pages

#### [Channels, supergroups, gigagroups and basic groups](https://core.telegram.org/api/channel)

How to handle channels, supergroups, gigagroups, basic groups, and what's the difference between them.
