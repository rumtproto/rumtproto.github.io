---
title: "statsGraphAsync (конструктор)"
original: "https://core.telegram.org/constructor/statsGraphAsync"
section: ref
kind: constructor
layout: layout.njk
---

# statsGraphAsync

*Конструктор из схемы TL.*

> This [channel statistics graph](https://core.telegram.org/api/stats) must be generated asynchronously using [stats.loadAsyncGraph](/method/stats.loadAsyncGraph/) to reduce server load

## Определение TL

```
statsGraphAsync#4a27eb2d token:string = StatsGraph;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| token | [string](/type/string/) | Token to use for fetching the async graph |

## Тип

[StatsGraph](/type/StatsGraph/)

## Related pages

#### [Channel statistics](https://core.telegram.org/api/stats)

Telegram offers detailed channel statistics for channels and supergroups.

#### [stats.loadAsyncGraph](/method/stats.loadAsyncGraph/)

Load [channel statistics graph](https://core.telegram.org/api/stats) asynchronously
