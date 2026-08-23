---
title: "help.termsOfService (конструктор)"
original: "https://core.telegram.org/constructor/help.termsOfService"
section: ref
kind: constructor
layout: layout.njk
---

# help.termsOfService

*Конструктор из схемы TL.*

> Info about the latest telegram Terms Of Service

## Определение TL

```
help.termsOfService#780a0310 flags:# popup:flags.0?true id:DataJSON text:string entities:Vector<MessageEntity> min_age_confirm:flags.1?int = help.TermsOfService;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| popup | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | Whether a prompt must be showed to the user, in order to accept the new terms. |
| id | [DataJSON](/type/DataJSON/) | ID of the new terms |
| text | [string](/type/string/) | Text of the new terms |
| entities | [Vector](https://core.telegram.org/type/Vector%20t)<[MessageEntity](/type/MessageEntity/)> | [Message entities for styled text](https://core.telegram.org/api/entities) |
| min_age_confirm | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[int](/type/int/) | Minimum age required to sign up to telegram, the user must confirm that they is older than the minimum age. |

## Тип

[help.TermsOfService](/type/help.TermsOfService/)

## Related pages

#### [Styled text with message entities](https://core.telegram.org/api/entities)

How to create styled text with message entities
