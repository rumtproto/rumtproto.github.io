---
title: "messageEntityBlockquote (конструктор)"
original: "https://core.telegram.org/constructor/messageEntityBlockquote"
section: ref
kind: constructor
layout: layout.njk
---

# messageEntityBlockquote

*Конструктор из схемы TL.*

> Message entity representing a block quote.
> #### [End-to-end schema](/schema/end-to-end/)
> ```
> ===101===
> messageEntityBlockquote#020df5d0 offset:int length:int = MessageEntity;
> ```
> #### API schema

## Определение TL

```
messageEntityBlockquote#f1ccaaac flags:# collapsed:flags.0?true offset:int length:int = MessageEntity;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| collapsed | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | Whether the quote is collapsed by default. |
| offset | [int](/type/int/) | Offset of message entity within message (in [UTF-16 code units](https://core.telegram.org/api/entities#entity-length)) |
| length | [int](/type/int/) | Length of message entity within message (in [UTF-16 code units](https://core.telegram.org/api/entities#entity-length)) |

## Тип

[MessageEntity](/type/MessageEntity/)

## Related pages

#### [Styled text with message entities](https://core.telegram.org/api/entities)

How to create styled text with message entities
