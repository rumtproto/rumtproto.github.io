---
title: "messageEntityCashtag (конструктор)"
original: "https://core.telegram.org/constructor/messageEntityCashtag"
section: ref
kind: constructor
layout: layout.njk
---

# messageEntityCashtag

*Конструктор из схемы TL.*

> Message entity representing a **$cashtag**.

## Определение TL

```
messageEntityCashtag#4c4e743f offset:int length:int = MessageEntity;
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
