---
title: "help.userInfo (конструктор)"
original: "https://core.telegram.org/constructor/help.userInfo"
section: ref
kind: constructor
layout: layout.njk
---

# help.userInfo

*Конструктор из схемы TL.*

> Internal use

## Определение TL

```
help.userInfo#1eb3758 message:string entities:Vector<MessageEntity> author:string date:int = help.UserInfo;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| message | [string](/type/string/) | Info |
| entities | [Vector](https://core.telegram.org/type/Vector%20t)<[MessageEntity](/type/MessageEntity/)> | [Message entities for styled text](https://core.telegram.org/api/entities) |
| author | [string](/type/string/) | Author |
| date | [int](/type/int/) | Date |

## Тип

[help.UserInfo](/type/help.UserInfo/)

## Related pages

#### [Styled text with message entities](https://core.telegram.org/api/entities)

How to create styled text with message entities
