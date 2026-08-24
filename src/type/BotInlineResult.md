---
title: "BotInlineResult"
original: "https://core.telegram.org/type/BotInlineResult"
section: ref
kind: type
description: "Результаты инлайн-запроса"
layout: layout.njk
---

# BotInlineResult

Результаты инлайн-запроса

```
botInlineResult#11965f3a flags:# id:string type:string title:flags.1?string description:flags.2?string url:flags.3?string thumb:flags.4?WebDocument content:flags.5?WebDocument send_message:BotInlineMessage = BotInlineResult;
botInlineMediaResult#17db940b flags:# id:string type:string photo:flags.0?Photo document:flags.1?Document title:flags.2?string description:flags.3?string send_message:BotInlineMessage = BotInlineResult;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/botInlineResult">botInlineResult</a></td><td>Обобщённый результат</td></tr><tr><td><a href="/constructor/botInlineMediaResult">botInlineMediaResult</a></td><td>Результат с медиа</td></tr></tbody></table>
