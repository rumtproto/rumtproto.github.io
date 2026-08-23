---
title: "updateChannelAvailableMessages (конструктор)"
original: "https://core.telegram.org/constructor/updateChannelAvailableMessages"
section: ref
kind: constructor
layout: layout.njk
---

# updateChannelAvailableMessages

*Конструктор из схемы TL.*

> The history of a [channel/supergroup](https://core.telegram.org/api/channel) was hidden.

## Определение TL

```
updateChannelAvailableMessages#b23fc698 channel_id:long available_min_id:int = Update;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| channel_id | [long](/type/long/) | Channel/supergroup ID |
| available_min_id | [int](/type/int/) | Identifier of a maximum unavailable message in a channel due to hidden history. |

## Тип

[Update](/type/Update/)

## Related pages

#### [Channels, supergroups, gigagroups and basic groups](https://core.telegram.org/api/channel)

How to handle channels, supergroups, gigagroups, basic groups, and what's the difference between them.
