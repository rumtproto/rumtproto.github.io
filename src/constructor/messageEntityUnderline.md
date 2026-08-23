---
title: "messageEntityUnderline (конструктор)"
original: "https://core.telegram.org/constructor/messageEntityUnderline"
section: ref
kind: constructor
layout: layout.njk
---

# messageEntityUnderline

*Конструктор из схемы TL.*

> Message entity representing underlined text.
> #### [End-to-end schema](/schema/end-to-end/)
> ```
> ===101===
> messageEntityUnderline#9c4e7e8b offset:int length:int = MessageEntity;
> ```
> #### API schema

## Определение TL

```
messageEntityUnderline#9c4e7e8b offset:int length:int = MessageEntity;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| offset | [int](/type/int/) | Offset of message entity within message (in [UTF-16 code units](https://core.telegram.org/api/entities#entity-length)) |
| length | [int](/type/int/) | Length of message entity within message (in [UTF-16 code units](https://core.telegram.org/api/entities#entity-length)) |

## Тип

[MessageEntity](/type/MessageEntity/)

## Related pages

#### [Styled text with message entities](https://core.telegram.org/api/entities)

How to create styled text with message entities
