---
title: "messageEntityPre (конструктор)"
original: "https://core.telegram.org/constructor/messageEntityPre"
section: ref
kind: constructor
layout: layout.njk
---

# messageEntityPre

*Конструктор из схемы TL.*

> Message entity representing a preformatted `codeblock`, allowing the user to specify a programming language for the codeblock.
> #### [End-to-end schema](/schema/end-to-end/)
> ```
> ===45===
> messageEntityPre#73924be0 offset:int length:int language:string = MessageEntity;
> ```
> #### API schema

## Определение TL

```
messageEntityPre#73924be0 offset:int length:int language:string = MessageEntity;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| offset | [int](/type/int/) | Offset of message entity within message (in [UTF-16 code units](https://core.telegram.org/api/entities#entity-length)) |
| length | [int](/type/int/) | Length of message entity within message (in [UTF-16 code units](https://core.telegram.org/api/entities#entity-length)) |
| language | [string](/type/string/) | Programming language of the code |

## Тип

[MessageEntity](/type/MessageEntity/)

## Related pages

#### [Styled text with message entities](https://core.telegram.org/api/entities)

How to create styled text with message entities
