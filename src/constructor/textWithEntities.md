---
title: "textWithEntities (конструктор)"
original: "https://core.telegram.org/constructor/textWithEntities"
section: ref
kind: constructor
layout: layout.njk
---

# textWithEntities

*Конструктор из схемы TL.*

> Styled text with [message entities](https://core.telegram.org/api/entities)
> #### [End-to-end schema](/schema/end-to-end/)
> ```
> ===216===
> textWithEntities#751f3146 text:string entities:Vector<MessageEntity> = TextWithEntities;
> ```
> #### API schema

## Определение TL

```
textWithEntities#751f3146 text:string entities:Vector<MessageEntity> = TextWithEntities;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| text | [string](/type/string/) | Text |
| entities | [Vector](https://core.telegram.org/type/Vector%20t)<[MessageEntity](/type/MessageEntity/)> | [Message entities for styled text](https://core.telegram.org/api/entities) |

## Тип

[TextWithEntities](/type/TextWithEntities/)

## Related pages

#### [Styled text with message entities](https://core.telegram.org/api/entities)

How to create styled text with message entities
