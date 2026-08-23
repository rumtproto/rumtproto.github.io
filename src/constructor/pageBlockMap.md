---
title: "pageBlockMap (конструктор)"
original: "https://core.telegram.org/constructor/pageBlockMap"
section: ref
kind: constructor
layout: layout.njk
---

# pageBlockMap

*Конструктор из схемы TL.*

> A map

## Определение TL

```
pageBlockMap#a44f3ef6 geo:GeoPoint zoom:int w:int h:int caption:PageCaption = PageBlock;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| geo | [GeoPoint](/type/GeoPoint/) | Location of the map center |
| zoom | [int](/type/int/) | Map zoom level; 13-20 |
| w | [int](/type/int/) | Map width in pixels before applying scale; 16-102 |
| h | [int](/type/int/) | Map height in pixels before applying scale; 16-1024 |
| caption | [PageCaption](/type/PageCaption/) | Caption |

## Тип

[PageBlock](/type/PageBlock/)
