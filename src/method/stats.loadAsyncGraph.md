---
title: "stats.loadAsyncGraph (метод)"
original: "https://core.telegram.org/method/stats.loadAsyncGraph"
section: ref
kind: method
layout: layout.njk
---

# stats.loadAsyncGraph

*Метод из схемы TL.*

> Load [channel statistics graph](https://core.telegram.org/api/stats) asynchronously

## Определение TL

```
statsGraphAsync#4a27eb2d token:string = StatsGraph;
statsGraphError#bedc9822 error:string = StatsGraph;
statsGraph#8ea464b6 flags:# json:DataJSON zoom_token:flags.0?string = StatsGraph;
---functions---
stats.loadAsyncGraph#621d5fa0 flags:# token:string x:flags.0?long = StatsGraph;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| token | [string](/type/string/) | Graph token from [statsGraphAsync](/constructor/statsGraphAsync/) constructor |
| x | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[long](/type/long/) | Zoom value, if required |

## Результат

[StatsGraph](/type/StatsGraph/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | GRAPH_EXPIRED_RELOAD | This graph has expired, please obtain a new graph token. |
| 400 | GRAPH_INVALID_RELOAD | Invalid graph token provided, please reload the stats and provide the updated token. |
| 400 | GRAPH_OUTDATED_RELOAD | The graph is outdated, please get a new async token using stats.getBroadcastStats. |

## Related pages

#### [statsGraphAsync](/constructor/statsGraphAsync/)

This [channel statistics graph](https://core.telegram.org/api/stats) must be generated asynchronously using [stats.loadAsyncGraph](/method/stats.loadAsyncGraph/) to reduce server load

#### [Channel statistics](https://core.telegram.org/api/stats)

Telegram offers detailed channel statistics for channels and supergroups.
