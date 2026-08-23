---
title: "messages.searchResultsPositions (конструктор)"
original: "https://core.telegram.org/constructor/messages.searchResultsPositions"
section: ref
kind: constructor
layout: layout.njk
---

# messages.searchResultsPositions

*Конструктор из схемы TL.*

> Information about sparse positions of messages

## Определение TL

```
messages.searchResultsPositions#53b22baf count:int positions:Vector<SearchResultsPosition> = messages.SearchResultsPositions;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| count | [int](/type/int/) | Total number of found messages |
| positions | [Vector](https://core.telegram.org/type/Vector%20t)<[SearchResultsPosition](/type/SearchResultsPosition/)> | List of message positions |

## Тип

[messages.SearchResultsPositions](/type/messages.SearchResultsPositions/)
