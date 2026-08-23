---
title: "botInlineMediaResult (конструктор)"
original: "https://core.telegram.org/constructor/botInlineMediaResult"
section: ref
kind: constructor
layout: layout.njk
---

# botInlineMediaResult

*Конструктор из схемы TL.*

> Media result

## Определение TL

```
botInlineMediaResult#17db940b flags:# id:string type:string photo:flags.0?Photo document:flags.1?Document title:flags.2?string description:flags.3?string send_message:BotInlineMessage = BotInlineResult;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| id | [string](/type/string/) | Result ID |
| type | [string](/type/string/) | Result type (see [bot API docs](https://core.telegram.org/bots/api#inlinequeryresult)) |
| photo | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[Photo](/type/Photo/) | If type is photo, the photo to send |
| document | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[Document](/type/Document/) | If type is document, the document to send |
| title | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[string](/type/string/) | Result title |
| description | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).3?[string](/type/string/) | Description |
| send_message | [BotInlineMessage](/type/BotInlineMessage/) | Depending on the type and on the [constructor](/type/BotInlineMessage/), contains the caption of the media or the content of the message to be sent instead of the media |

## Тип

[BotInlineResult](/type/BotInlineResult/)

## Related pages

#### [Telegram Bot API](https://core.telegram.org/bots/api)

#### [BotInlineMessage](/type/BotInlineMessage/)

Inline message
