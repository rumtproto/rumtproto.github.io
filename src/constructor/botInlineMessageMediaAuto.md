---
title: "botInlineMessageMediaAuto (конструктор)"
original: "https://core.telegram.org/constructor/botInlineMessageMediaAuto"
section: ref
kind: constructor
layout: layout.njk
---

# botInlineMessageMediaAuto

*Конструктор из схемы TL.*

> Send whatever media is attached to the [botInlineMediaResult](/constructor/botInlineMediaResult/)

## Определение TL

```
botInlineMessageMediaAuto#764cf810 flags:# invert_media:flags.3?true message:string entities:flags.1?Vector<MessageEntity> reply_markup:flags.2?ReplyMarkup = BotInlineMessage;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| invert_media | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).3?[true](/constructor/true/) | If set, any eventual webpage preview will be shown on top of the message instead of at the bottom. |
| message | [string](/type/string/) | Caption |
| entities | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[Vector](https://core.telegram.org/type/Vector%20t)<[MessageEntity](/type/MessageEntity/)> | [Message entities for styled text](https://core.telegram.org/api/entities) |
| reply_markup | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[ReplyMarkup](/type/ReplyMarkup/) | Inline keyboard |

## Тип

[BotInlineMessage](/type/BotInlineMessage/)

## Related pages

#### [Styled text with message entities](https://core.telegram.org/api/entities)

How to create styled text with message entities

#### [botInlineMediaResult](/constructor/botInlineMediaResult/)

Media result
