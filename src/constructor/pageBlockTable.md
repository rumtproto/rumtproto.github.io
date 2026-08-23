---
title: "pageBlockTable (конструктор)"
original: "https://core.telegram.org/constructor/pageBlockTable"
section: ref
kind: constructor
layout: layout.njk
---

# pageBlockTable

*Конструктор из схемы TL.*

> Table

## Определение TL

```
pageBlockTable#bf4dea82 flags:# bordered:flags.0?true striped:flags.1?true title:RichText rows:Vector<PageTableRow> = PageBlock;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| bordered | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | Does the table have a visible border? |
| striped | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[true](/constructor/true/) | Is the table striped? |
| title | [RichText](/type/RichText/) | Title |
| rows | [Vector](https://core.telegram.org/type/Vector%20t)<[PageTableRow](/type/PageTableRow/)> | Table rows |

## Тип

[PageBlock](/type/PageBlock/)
