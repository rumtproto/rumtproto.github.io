---
title: "messages.BotResults"
original: "https://core.telegram.org/type/messages.BotResults"
section: ref
kind: type
description: "Результат запроса к инлайн-боту"
layout: layout.njk
---

# messages.BotResults

Результат запроса к инлайн-боту

```
messages.botResults#e021f2f6 flags:# gallery:flags.0?true query_id:long next_offset:flags.1?string switch_pm:flags.2?InlineBotSwitchPM switch_webview:flags.3?InlineBotWebView results:Vector<BotInlineResult> cache_time:int users:Vector<User> = messages.BotResults;

---functions---

messages.getInlineBotResults#514e999d flags:# bot:InputUser peer:InputPeer geo_point:flags.0?InputGeoPoint query:string offset:string = messages.BotResults;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/messages.botResults">messages.botResults</a></td><td>Результат запроса к инлайн-боту</td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/messages.getInlineBotResults">messages.getInlineBotResults</a></td><td>Запрос к инлайн-боту</td></tr></tbody></table>
