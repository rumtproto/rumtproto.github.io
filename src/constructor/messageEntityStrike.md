---
title: "messageEntityStrike (конструктор)"
original: "https://core.telegram.org/constructor/messageEntityStrike"
section: ref
kind: constructor
layout: layout.njk
---

# messageEntityStrike

*Конструктор из схемы TL.*

> Message entity representing strikethrough text.
> #### [End-to-end schema](/schema/end-to-end/)
> ```
> ===101===
> messageEntityStrike#bf0693d4 offset:int length:int = MessageEntity;
> ```
> #### API schema

## Определение TL

```
messageEntityStrike#bf0693d4 offset:int length:int = MessageEntity;
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
