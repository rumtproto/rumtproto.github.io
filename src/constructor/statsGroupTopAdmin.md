---
title: "statsGroupTopAdmin (конструктор)"
original: "https://core.telegram.org/constructor/statsGroupTopAdmin"
section: ref
kind: constructor
layout: layout.njk
---

# statsGroupTopAdmin

*Конструктор из схемы TL.*

> Information about an active admin in a supergroup

## Определение TL

```
statsGroupTopAdmin#d7584c87 user_id:long deleted:int kicked:int banned:int = StatsGroupTopAdmin;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| user_id | [long](/type/long/) | User ID |
| deleted | [int](/type/int/) | Number of deleted messages for [statistics](https://core.telegram.org/api/stats) period in consideration |
| kicked | [int](/type/int/) | Number of kicked users for [statistics](https://core.telegram.org/api/stats) period in consideration |
| banned | [int](/type/int/) | Number of banned users for [statistics](https://core.telegram.org/api/stats) period in consideration |

## Тип

[StatsGroupTopAdmin](/type/StatsGroupTopAdmin/)

## Related pages

#### [Channel statistics](https://core.telegram.org/api/stats)

Telegram offers detailed channel statistics for channels and supergroups.
