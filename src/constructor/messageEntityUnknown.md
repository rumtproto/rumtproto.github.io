---
title: "messageEntityUnknown (конструктор)"
original: "https://core.telegram.org/constructor/messageEntityUnknown"
section: ref
kind: constructor
layout: layout.njk
---

# messageEntityUnknown

*Конструктор из схемы TL.*

> Unknown message entity
> #### [End-to-end schema](/schema/end-to-end/)
> ```
> ===45===
> messageEntityUnknown#bb92ba95 offset:int length:int = MessageEntity;
> ```
> #### API schema

## Определение TL

```
messageEntityUnknown#bb92ba95 offset:int length:int = MessageEntity;
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
