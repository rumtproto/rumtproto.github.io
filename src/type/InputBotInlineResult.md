---
title: "InputBotInlineResult (тип)"
original: "https://core.telegram.org/type/InputBotInlineResult"
section: ref
kind: type
layout: layout.njk
---

# InputBotInlineResult

*Тип из схемы TL.*

> Inline bot result

## Определение TL

```
inputBotInlineResult#88bf9319 flags:# id:string type:string title:flags.1?string description:flags.2?string url:flags.3?string thumb:flags.4?InputWebDocument content:flags.5?InputWebDocument send_message:InputBotInlineMessage = InputBotInlineResult;
inputBotInlineResultPhoto#a8d864a7 id:string type:string photo:InputPhoto send_message:InputBotInlineMessage = InputBotInlineResult;
inputBotInlineResultDocument#fff8fdc4 flags:# id:string type:string title:flags.1?string description:flags.2?string document:InputDocument send_message:InputBotInlineMessage = InputBotInlineResult;
inputBotInlineResultGame#4fa417f2 id:string short_name:string send_message:InputBotInlineMessage = InputBotInlineResult;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [inputBotInlineResult](/constructor/inputBotInlineResult/) | An inline bot result |
| [inputBotInlineResultPhoto](/constructor/inputBotInlineResultPhoto/) | Photo |
| [inputBotInlineResultDocument](/constructor/inputBotInlineResultDocument/) | Document (media of any type except for photos) |
| [inputBotInlineResultGame](/constructor/inputBotInlineResultGame/) | Game |
