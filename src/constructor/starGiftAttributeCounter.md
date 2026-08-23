---
title: "starGiftAttributeCounter (конструктор)"
original: "https://core.telegram.org/constructor/starGiftAttributeCounter"
section: ref
kind: constructor
layout: layout.njk
---

# starGiftAttributeCounter

*Конструктор из схемы TL.*

> Indicates the total number of gifts that have the specified attribute.

## Определение TL

```
starGiftAttributeCounter#2eb1b658 attribute:StarGiftAttributeId count:int = StarGiftAttributeCounter;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| attribute | [StarGiftAttributeId](/type/StarGiftAttributeId/) | The attribute (just the ID, without the attribute itself). |
| count | [int](/type/int/) | Total number of gifts with this attribute. |

## Тип

[StarGiftAttributeCounter](/type/StarGiftAttributeCounter/)
