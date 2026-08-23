---
title: "searchResultPosition (конструктор)"
original: "https://core.telegram.org/constructor/searchResultPosition"
section: ref
kind: constructor
layout: layout.njk
---

# searchResultPosition

*Конструктор из схемы TL.*

> Information about a message in a specific position

## Определение TL

```
searchResultPosition#7f648b67 msg_id:int date:int offset:int = SearchResultsPosition;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| msg_id | [int](/type/int/) | Message ID |
| date | [int](/type/int/) | When was the message sent |
| offset | [int](/type/int/) | 0-based message position in the full list of suitable messages |

## Тип

[SearchResultsPosition](/type/SearchResultsPosition/)
