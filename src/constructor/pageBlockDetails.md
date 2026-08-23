---
title: "pageBlockDetails (конструктор)"
original: "https://core.telegram.org/constructor/pageBlockDetails"
section: ref
kind: constructor
layout: layout.njk
---

# pageBlockDetails

*Конструктор из схемы TL.*

> A collapsible details block

## Определение TL

```
pageBlockDetails#76768bed flags:# open:flags.0?true blocks:Vector<PageBlock> title:RichText = PageBlock;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| open | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | Whether the block is open by default |
| blocks | [Vector](https://core.telegram.org/type/Vector%20t)<[PageBlock](/type/PageBlock/)> | Block contents |
| title | [RichText](/type/RichText/) | Always visible heading for the block |

## Тип

[PageBlock](/type/PageBlock/)
