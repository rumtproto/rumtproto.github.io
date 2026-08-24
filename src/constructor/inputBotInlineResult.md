---
title: "inputBotInlineResult"
original: "https://core.telegram.org/constructor/inputBotInlineResult"
section: ref
kind: constructor
description: "Результат инлайн-бота"
layout: layout.njk
---

# inputBotInlineResult

Результат инлайн-бота

```
inputBotInlineResult#88bf9319 flags:# id:string type:string title:flags.1?string description:flags.2?string url:flags.3?string thumb:flags.4?InputWebDocument content:flags.5?InputWebDocument send_message:InputBotInlineMessage = InputBotInlineResult;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Идентификатор результата</td></tr><tr><td><strong>type</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Тип результата (см. <a href="/bots/api#inlinequeryresult">документацию Bot API</a>)</td></tr><tr><td><strong>title</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/string">string</a></td><td>Заголовок результата</td></tr><tr><td><strong>description</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/type/string">string</a></td><td>Описание результата</td></tr><tr><td><strong>url</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.3?<a href="/type/string">string</a></td><td>URL результата</td></tr><tr><td><strong>thumb</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.4?<a href="/type/InputWebDocument">InputWebDocument</a></td><td>Миниатюра результата</td></tr><tr><td><strong>content</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.5?<a href="/type/InputWebDocument">InputWebDocument</a></td><td>Содержимое результата</td></tr><tr><td><strong>send_message</strong></td><td style="text-align: center;"><a href="/type/InputBotInlineMessage">InputBotInlineMessage</a></td><td>Сообщение, которое будет отправлено при выборе результата</td></tr></tbody></table>

### Тип

[InputBotInlineResult](/type/InputBotInlineResult/)

### Связанные страницы

#### [Telegram Bot API](https://core.telegram.org/bots/api)
