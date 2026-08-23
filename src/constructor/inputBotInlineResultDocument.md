---
title: "inputBotInlineResultDocument (конструктор)"
original: "https://core.telegram.org/constructor/inputBotInlineResultDocument"
section: ref
kind: constructor
layout: layout.njk
---

# inputBotInlineResultDocument

*Конструктор из схемы TL.*

> Document (media of any type except for photos)

## Определение TL

```
inputBotInlineResultDocument#fff8fdc4 flags:# id:string type:string title:flags.1?string description:flags.2?string document:InputDocument send_message:InputBotInlineMessage = InputBotInlineResult;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| id | [string](/type/string/) | Result ID |
| type | [string](/type/string/) | Result type (see [bot API docs](https://core.telegram.org/bots/api#inlinequeryresult)) |
| title | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[string](/type/string/) | Result title |
| description | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[string](/type/string/) | Result description |
| document | [InputDocument](/type/InputDocument/) | Document to send |
| send_message | [InputBotInlineMessage](/type/InputBotInlineMessage/) | Message to send when the result is selected |

## Тип

[InputBotInlineResult](/type/InputBotInlineResult/)

## Related pages

#### [Telegram Bot API](https://core.telegram.org/bots/api)
