---
title: "updateWebPage (конструктор)"
original: "https://core.telegram.org/constructor/updateWebPage"
section: ref
kind: constructor
layout: layout.njk
---

# updateWebPage

*Конструктор из схемы TL.*

> An [instant view](https://instantview.telegram.org) webpage preview was generated

## Определение TL

```
updateWebPage#7f891213 webpage:WebPage pts:int pts_count:int = Update;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| webpage | [WebPage](/type/WebPage/) | Webpage preview |
| pts | [int](/type/int/) | [Event count after generation](/api/updates/) |
| pts_count | [int](/type/int/) | [Number of events that were generated](/api/updates/) |

## Тип

[Update](/type/Update/)

## Related pages

#### [Working with Updates](/api/updates/)

How to subscribe to updates and handle them properly.
