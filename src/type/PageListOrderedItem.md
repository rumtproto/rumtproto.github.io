---
title: "PageListOrderedItem (тип)"
original: "https://core.telegram.org/type/PageListOrderedItem"
section: ref
kind: type
layout: layout.njk
---

# PageListOrderedItem

*Тип из схемы TL.*

> Represents an [instant view ordered list](https://instantview.telegram.org)

## Определение TL

```
pageListOrderedItemText#5e068047 num:string text:RichText = PageListOrderedItem;
pageListOrderedItemBlocks#98dd8936 num:string blocks:Vector<PageBlock> = PageListOrderedItem;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [pageListOrderedItemText](/constructor/pageListOrderedItemText/) | Ordered list of text items |
| [pageListOrderedItemBlocks](/constructor/pageListOrderedItemBlocks/) | Ordered list of [IV](https://instantview.telegram.org) blocks |
