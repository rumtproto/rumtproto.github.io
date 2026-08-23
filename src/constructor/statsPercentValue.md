---
title: "statsPercentValue (конструктор)"
original: "https://core.telegram.org/constructor/statsPercentValue"
section: ref
kind: constructor
layout: layout.njk
---

# statsPercentValue

*Конструктор из схемы TL.*

> [Channel statistics percentage](https://core.telegram.org/api/stats).  
> Compute the percentage simply by doing `part * total / 100`

## Определение TL

```
statsPercentValue#cbce2fe0 part:double total:double = StatsPercentValue;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| part | [double](/type/double/) | Partial value |
| total | [double](/type/double/) | Total value |

## Тип

[StatsPercentValue](/type/StatsPercentValue/)

## Related pages

#### [Channel statistics](https://core.telegram.org/api/stats)

Telegram offers detailed channel statistics for channels and supergroups.
