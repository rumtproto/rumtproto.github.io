---
title: "statsGroupTopInviter (конструктор)"
original: "https://core.telegram.org/constructor/statsGroupTopInviter"
section: ref
kind: constructor
layout: layout.njk
---

# statsGroupTopInviter

*Конструктор из схемы TL.*

> Information about an active supergroup inviter

## Определение TL

```
statsGroupTopInviter#535f779d user_id:long invitations:int = StatsGroupTopInviter;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| user_id | [long](/type/long/) | User ID |
| invitations | [int](/type/int/) | Number of invitations for [statistics](https://core.telegram.org/api/stats) period in consideration |

## Тип

[StatsGroupTopInviter](/type/StatsGroupTopInviter/)

## Related pages

#### [Channel statistics](https://core.telegram.org/api/stats)

Telegram offers detailed channel statistics for channels and supergroups.
