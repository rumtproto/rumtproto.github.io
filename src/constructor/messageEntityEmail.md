---
title: "messageEntityEmail (конструктор)"
original: "https://core.telegram.org/constructor/messageEntityEmail"
section: ref
kind: constructor
layout: layout.njk
---

# messageEntityEmail

*Конструктор из схемы TL.*

> Message entity representing an [email@example.com](mailto:email@example.com).
> #### [End-to-end schema](/schema/end-to-end/)
> ```
> ===45===
> messageEntityEmail#64e475c2 offset:int length:int = MessageEntity;
> ```
> #### API schema

## Определение TL

```
messageEntityEmail#64e475c2 offset:int length:int = MessageEntity;
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
