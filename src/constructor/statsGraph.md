---
title: "statsGraph (конструктор)"
original: "https://core.telegram.org/constructor/statsGraph"
section: ref
kind: constructor
layout: layout.njk
---

# statsGraph

*Конструктор из схемы TL.*

> [Channel statistics graph](https://core.telegram.org/api/stats)

## Определение TL

```
statsGraph#8ea464b6 flags:# json:DataJSON zoom_token:flags.0?string = StatsGraph;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| json | [DataJSON](/type/DataJSON/) | Statistics data |
| zoom_token | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[string](/type/string/) | Zoom token |

## Тип

[StatsGraph](/type/StatsGraph/)

## Related pages

#### [Channel statistics](https://core.telegram.org/api/stats)

Telegram offers detailed channel statistics for channels and supergroups.
