---
title: "messages.BotResults (тип)"
original: "https://core.telegram.org/type/messages.BotResults"
section: ref
kind: type
layout: layout.njk
---

# messages.BotResults

*Тип из схемы TL.*

> Result of a query to an inline bot

## Определение TL

```
messages.botResults#e021f2f6 flags:# gallery:flags.0?true query_id:long next_offset:flags.1?string switch_pm:flags.2?InlineBotSwitchPM switch_webview:flags.3?InlineBotWebView results:Vector<BotInlineResult> cache_time:int users:Vector<User> = messages.BotResults;

---functions---

messages.getInlineBotResults#514e999d flags:# bot:InputUser peer:InputPeer geo_point:flags.0?InputGeoPoint query:string offset:string = messages.BotResults;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [messages.botResults](/constructor/messages.botResults/) | Result of a query to an inline bot |

## Методы

| Method | Описание |
|---|---|
| [messages.getInlineBotResults](/method/messages.getInlineBotResults/) | Query an inline bot |
