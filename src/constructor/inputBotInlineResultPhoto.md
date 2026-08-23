---
title: "inputBotInlineResultPhoto (конструктор)"
original: "https://core.telegram.org/constructor/inputBotInlineResultPhoto"
section: ref
kind: constructor
layout: layout.njk
---

# inputBotInlineResultPhoto

*Конструктор из схемы TL.*

> Photo

## Определение TL

```
inputBotInlineResultPhoto#a8d864a7 id:string type:string photo:InputPhoto send_message:InputBotInlineMessage = InputBotInlineResult;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| id | [string](/type/string/) | Result ID |
| type | [string](/type/string/) | Result type (see [bot API docs](https://core.telegram.org/bots/api#inlinequeryresult)) |
| photo | [InputPhoto](/type/InputPhoto/) | Photo to send |
| send_message | [InputBotInlineMessage](/type/InputBotInlineMessage/) | Message to send when the result is selected |

## Тип

[InputBotInlineResult](/type/InputBotInlineResult/)

## Related pages

#### [Telegram Bot API](https://core.telegram.org/bots/api)
