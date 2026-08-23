---
title: "botInlineResult (конструктор)"
original: "https://core.telegram.org/constructor/botInlineResult"
section: ref
kind: constructor
layout: layout.njk
---

# botInlineResult

*Конструктор из схемы TL.*

> Generic result

## Определение TL

```
botInlineResult#11965f3a flags:# id:string type:string title:flags.1?string description:flags.2?string url:flags.3?string thumb:flags.4?WebDocument content:flags.5?WebDocument send_message:BotInlineMessage = BotInlineResult;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| id | [string](/type/string/) | Result ID |
| type | [string](/type/string/) | Result type (see [bot API docs](https://core.telegram.org/bots/api#inlinequeryresult)) |
| title | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[string](/type/string/) | Result title |
| description | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[string](/type/string/) | Result description |
| url | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).3?[string](/type/string/) | URL of article or webpage |
| thumb | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).4?[WebDocument](/type/WebDocument/) | Thumbnail for the result |
| content | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).5?[WebDocument](/type/WebDocument/) | Content of the result |
| send_message | [BotInlineMessage](/type/BotInlineMessage/) | Message to send |

## Тип

[BotInlineResult](/type/BotInlineResult/)

## Related pages

#### [Telegram Bot API](https://core.telegram.org/bots/api)
