---
title: "help.appUpdate (конструктор)"
original: "https://core.telegram.org/constructor/help.appUpdate"
section: ref
kind: constructor
layout: layout.njk
---

# help.appUpdate

*Конструктор из схемы TL.*

> An update is available for the application.

## Определение TL

```
help.appUpdate#ccbbce30 flags:# can_not_skip:flags.0?true id:int version:string text:string entities:Vector<MessageEntity> document:flags.1?Document url:flags.2?string sticker:flags.3?Document = help.AppUpdate;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| can_not_skip | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | Unskippable, the new info must be shown to the user (with a popup or something else) |
| id | [int](/type/int/) | Update ID |
| version | [string](/type/string/) | New version name |
| text | [string](/type/string/) | Text description of the update |
| entities | [Vector](https://core.telegram.org/type/Vector%20t)<[MessageEntity](/type/MessageEntity/)> | [Message entities for styled text](https://core.telegram.org/api/entities) |
| document | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[Document](/type/Document/) | Application binary |
| url | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[string](/type/string/) | Application download URL |
| sticker | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).3?[Document](/type/Document/) | Associated sticker |

## Тип

[help.AppUpdate](/type/help.AppUpdate/)

## Related pages

#### [Styled text with message entities](https://core.telegram.org/api/entities)

How to create styled text with message entities
