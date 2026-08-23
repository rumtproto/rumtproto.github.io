---
title: "messageEntityCode (конструктор)"
original: "https://core.telegram.org/constructor/messageEntityCode"
section: ref
kind: constructor
layout: layout.njk
---

# messageEntityCode

*Конструктор из схемы TL.*

> Message entity representing a `codeblock`.
> #### [End-to-end schema](/schema/end-to-end/)
> ```
> ===45===
> messageEntityCode#28a20571 offset:int length:int = MessageEntity;
> ```
> #### API schema

## Определение TL

```
messageEntityCode#28a20571 offset:int length:int = MessageEntity;
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
