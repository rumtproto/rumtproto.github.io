---
title: "pageListOrderedItemBlocks (конструктор)"
original: "https://core.telegram.org/constructor/pageListOrderedItemBlocks"
section: ref
kind: constructor
layout: layout.njk
---

# pageListOrderedItemBlocks

*Конструктор из схемы TL.*

> Ordered list of [IV](https://instantview.telegram.org) blocks

## Определение TL

```
pageListOrderedItemBlocks#98dd8936 num:string blocks:Vector<PageBlock> = PageListOrderedItem;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| num | [string](/type/string/) | Number of element within ordered list |
| blocks | [Vector](https://core.telegram.org/type/Vector%20t)<[PageBlock](/type/PageBlock/)> | Item contents |

## Тип

[PageListOrderedItem](/type/PageListOrderedItem/)
