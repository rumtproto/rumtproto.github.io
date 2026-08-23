---
title: "pageTableCell (конструктор)"
original: "https://core.telegram.org/constructor/pageTableCell"
section: ref
kind: constructor
layout: layout.njk
---

# pageTableCell

*Конструктор из схемы TL.*

> Table cell

## Определение TL

```
pageTableCell#34566b6a flags:# header:flags.0?true align_center:flags.3?true align_right:flags.4?true valign_middle:flags.5?true valign_bottom:flags.6?true text:flags.7?RichText colspan:flags.1?int rowspan:flags.2?int = PageTableCell;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| header | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | Is this element part of the column header |
| align_center | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).3?[true](/constructor/true/) | Horizontally centered block |
| align_right | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).4?[true](/constructor/true/) | Right-aligned block |
| valign_middle | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).5?[true](/constructor/true/) | Vertically centered block |
| valign_bottom | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).6?[true](/constructor/true/) | Block vertically-aligned to the bottom |
| text | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).7?[RichText](/type/RichText/) | Content |
| colspan | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[int](/type/int/) | For how many columns should this cell extend |
| rowspan | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[int](/type/int/) | For how many rows should this cell extend |

## Тип

[PageTableCell](/type/PageTableCell/)
