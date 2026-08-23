---
title: "pageBlockList (конструктор)"
original: "https://core.telegram.org/constructor/pageBlockList"
section: ref
kind: constructor
layout: layout.njk
---

# pageBlockList

*Конструктор из схемы TL.*

> Unordered list of IV blocks

## Определение TL

```
pageBlockList#e4e88011 items:Vector<PageListItem> = PageBlock;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| items | [Vector](https://core.telegram.org/type/Vector%20t)<[PageListItem](/type/PageListItem/)> | List of blocks in an IV page |

## Тип

[PageBlock](/type/PageBlock/)
