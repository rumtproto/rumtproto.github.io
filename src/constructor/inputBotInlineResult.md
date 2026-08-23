---
title: "inputBotInlineResult (конструктор)"
original: "https://core.telegram.org/constructor/inputBotInlineResult"
section: ref
kind: constructor
layout: layout.njk
---

# inputBotInlineResult

*Конструктор из схемы TL.*

> An inline bot result

## Определение TL

```
inputBotInlineResult#88bf9319 flags:# id:string type:string title:flags.1?string description:flags.2?string url:flags.3?string thumb:flags.4?InputWebDocument content:flags.5?InputWebDocument send_message:InputBotInlineMessage = InputBotInlineResult;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| id | [string](/type/string/) | ID of result |
| type | [string](/type/string/) | Result type (see [bot API docs](https://core.telegram.org/bots/api#inlinequeryresult)) |
| title | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[string](/type/string/) | Result title |
| description | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[string](/type/string/) | Result description |
| url | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).3?[string](/type/string/) | URL of result |
| thumb | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).4?[InputWebDocument](/type/InputWebDocument/) | Thumbnail for result |
| content | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).5?[InputWebDocument](/type/InputWebDocument/) | Result contents |
| send_message | [InputBotInlineMessage](/type/InputBotInlineMessage/) | Message to send when the result is selected |

## Тип

[InputBotInlineResult](/type/InputBotInlineResult/)

## Related pages

#### [Telegram Bot API](https://core.telegram.org/bots/api)
