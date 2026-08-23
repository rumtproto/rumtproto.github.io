---
title: "StatsGraph (тип)"
original: "https://core.telegram.org/type/StatsGraph"
section: ref
kind: type
layout: layout.njk
---

# StatsGraph

*Тип из схемы TL.*

> Channel statistics graph

## Определение TL

```
statsGraphAsync#4a27eb2d token:string = StatsGraph;
statsGraphError#bedc9822 error:string = StatsGraph;
statsGraph#8ea464b6 flags:# json:DataJSON zoom_token:flags.0?string = StatsGraph;

---functions---

stats.loadAsyncGraph#621d5fa0 flags:# token:string x:flags.0?long = StatsGraph;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [statsGraphAsync](/constructor/statsGraphAsync/) | This [channel statistics graph](https://core.telegram.org/api/stats) must be generated asynchronously using [stats.loadAsyncGraph](/method/stats.loadAsyncGraph/) to reduce server load |
| [statsGraphError](/constructor/statsGraphError/) | An error occurred while generating the [statistics graph](https://core.telegram.org/api/stats) |
| [statsGraph](/constructor/statsGraph/) | [Channel statistics graph](https://core.telegram.org/api/stats) |

## Методы

| Method | Описание |
|---|---|
| [stats.loadAsyncGraph](/method/stats.loadAsyncGraph/) | Load [channel statistics graph](https://core.telegram.org/api/stats) asynchronously |
