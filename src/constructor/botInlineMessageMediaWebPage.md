---
title: "botInlineMessageMediaWebPage (конструктор)"
original: "https://core.telegram.org/constructor/botInlineMessageMediaWebPage"
section: ref
kind: constructor
layout: layout.njk
---

# botInlineMessageMediaWebPage

*Конструктор из схемы TL.*

> Specifies options that must be used to generate the link preview for the message, or even a standalone link preview without an attached message.

## Определение TL

```
botInlineMessageMediaWebPage#809ad9a6 flags:# invert_media:flags.3?true force_large_media:flags.4?true force_small_media:flags.5?true manual:flags.7?true safe:flags.8?true message:string entities:flags.1?Vector<MessageEntity> url:string reply_markup:flags.2?ReplyMarkup = BotInlineMessage;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| invert_media | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).3?[true](/constructor/true/) | If set, any eventual webpage preview will be shown on top of the message instead of at the bottom. |
| force_large_media | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).4?[true](/constructor/true/) | If set, specifies that a large media preview should be used. |
| force_small_media | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).5?[true](/constructor/true/) | If set, specifies that a small media preview should be used. |
| manual | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).7?[true](/constructor/true/) | If set, indicates that the URL used for the webpage preview was specified manually using [inputMediaWebPage](/constructor/inputMediaWebPage/), and may not be related to any of the URLs specified in the message. |
| safe | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).8?[true](/constructor/true/) | If set, the link can be opened directly without user confirmation. |
| message | [string](/type/string/) | The message, can be empty. |
| entities | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[Vector](https://core.telegram.org/type/Vector%20t)<[MessageEntity](/type/MessageEntity/)> | [Message entities for styled text](https://core.telegram.org/api/entities) |
| url | [string](/type/string/) | The URL to use for the link preview. |
| reply_markup | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[ReplyMarkup](/type/ReplyMarkup/) | Reply markup for sending bot buttons |

## Тип

[BotInlineMessage](/type/BotInlineMessage/)

## Related pages

#### [inputMediaWebPage](/constructor/inputMediaWebPage/)

Specifies options that will be used to generate the link preview for the caption, or even a standalone link preview without an attached message.

#### [Styled text with message entities](https://core.telegram.org/api/entities)

How to create styled text with message entities
