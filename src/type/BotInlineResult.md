---
title: "BotInlineResult (тип)"
original: "https://core.telegram.org/type/BotInlineResult"
section: ref
kind: type
layout: layout.njk
---

# BotInlineResult

*Тип из схемы TL.*

> Results of an inline query

## Определение TL

```
botInlineResult#11965f3a flags:# id:string type:string title:flags.1?string description:flags.2?string url:flags.3?string thumb:flags.4?WebDocument content:flags.5?WebDocument send_message:BotInlineMessage = BotInlineResult;
botInlineMediaResult#17db940b flags:# id:string type:string photo:flags.0?Photo document:flags.1?Document title:flags.2?string description:flags.3?string send_message:BotInlineMessage = BotInlineResult;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [botInlineResult](/constructor/botInlineResult/) | Generic result |
| [botInlineMediaResult](/constructor/botInlineMediaResult/) | Media result |
