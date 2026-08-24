---
title: "botInlineResult"
original: "https://core.telegram.org/constructor/botInlineResult"
section: ref
kind: constructor
description: "Обобщённый результат"
layout: layout.njk
---

# botInlineResult

Обобщённый результат

```
botInlineResult#11965f3a flags:# id:string type:string title:flags.1?string description:flags.2?string url:flags.3?string thumb:flags.4?WebDocument content:flags.5?WebDocument send_message:BotInlineMessage = BotInlineResult;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Идентификатор результата</td></tr><tr><td><strong>type</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Тип результата (см. <a href="/bots/api#inlinequeryresult">документацию Bot API</a>)</td></tr><tr><td><strong>title</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/string">string</a></td><td>Заголовок результата</td></tr><tr><td><strong>description</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/type/string">string</a></td><td>Описание результата</td></tr><tr><td><strong>url</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.3?<a href="/type/string">string</a></td><td>URL статьи или веб-страницы</td></tr><tr><td><strong>thumb</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.4?<a href="/type/WebDocument">WebDocument</a></td><td>Миниатюра результата</td></tr><tr><td><strong>content</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.5?<a href="/type/WebDocument">WebDocument</a></td><td>Содержимое результата</td></tr><tr><td><strong>send_message</strong></td><td style="text-align: center;"><a href="/type/BotInlineMessage">BotInlineMessage</a></td><td>Сообщение для отправки</td></tr></tbody></table>

### Тип

[BotInlineResult](/type/BotInlineResult/)

### Связанные страницы

#### [Telegram Bot API](https://core.telegram.org/bots/api)
