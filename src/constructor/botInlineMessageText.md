---
title: "botInlineMessageText (конструктор)"
original: "https://core.telegram.org/constructor/botInlineMessageText"
section: ref
kind: constructor
layout: layout.njk
---

# botInlineMessageText

*Конструктор из схемы TL.*

> Send a simple text message

## Определение TL

```
botInlineMessageText#8c7f65e2 flags:# no_webpage:flags.0?true invert_media:flags.3?true message:string entities:flags.1?Vector<MessageEntity> reply_markup:flags.2?ReplyMarkup = BotInlineMessage;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| no_webpage | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | Disable webpage preview |
| invert_media | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).3?[true](/constructor/true/) | If set, any eventual webpage preview will be shown on top of the message instead of at the bottom. |
| message | [string](/type/string/) | The message |
| entities | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[Vector](https://core.telegram.org/type/Vector%20t)<[MessageEntity](/type/MessageEntity/)> | [Message entities for styled text](https://core.telegram.org/api/entities) |
| reply_markup | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[ReplyMarkup](/type/ReplyMarkup/) | Inline keyboard |

## Тип

[BotInlineMessage](/type/BotInlineMessage/)

## Related pages

#### [Styled text with message entities](https://core.telegram.org/api/entities)

How to create styled text with message entities
