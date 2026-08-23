---
title: "help.deepLinkInfo (конструктор)"
original: "https://core.telegram.org/constructor/help.deepLinkInfo"
section: ref
kind: constructor
layout: layout.njk
---

# help.deepLinkInfo

*Конструктор из схемы TL.*

> Deep link info, see [the here for more details](https://core.telegram.org/api/links#unsupported-links)

## Определение TL

```
help.deepLinkInfo#6a4ee832 flags:# update_app:flags.0?true message:string entities:flags.1?Vector<MessageEntity> = help.DeepLinkInfo;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| update_app | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | An update of the app is required to parse this link |
| message | [string](/type/string/) | Message to show to the user |
| entities | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[Vector](https://core.telegram.org/type/Vector%20t)<[MessageEntity](/type/MessageEntity/)> | [Message entities for styled text](https://core.telegram.org/api/entities) |

## Тип

[help.DeepLinkInfo](/type/help.DeepLinkInfo/)

## Related pages

#### [Styled text with message entities](https://core.telegram.org/api/entities)

How to create styled text with message entities

#### [Deep links](https://core.telegram.org/api/links)

Telegram clients must handle special tg:// and t.me deep links encountered in messages, link entities and in other apps by registering OS handlers.
