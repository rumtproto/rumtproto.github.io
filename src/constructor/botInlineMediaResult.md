---
title: "botInlineMediaResult"
original: "https://core.telegram.org/constructor/botInlineMediaResult"
section: ref
kind: constructor
description: "Результат с медиа"
layout: layout.njk
---

# botInlineMediaResult

Результат с медиа

```
botInlineMediaResult#17db940b flags:# id:string type:string photo:flags.0?Photo document:flags.1?Document title:flags.2?string description:flags.3?string send_message:BotInlineMessage = BotInlineResult;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Идентификатор результата</td></tr><tr><td><strong>type</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Тип результата (см. <a href="/bots/api#inlinequeryresult">документацию Bot API</a>)</td></tr><tr><td><strong>photo</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/Photo">Photo</a></td><td>Если тип — <code>photo</code>, отправляемая фотография</td></tr><tr><td><strong>document</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/Document">Document</a></td><td>Если тип — <code>document</code>, отправляемый документ</td></tr><tr><td><strong>title</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/type/string">string</a></td><td>Заголовок результата</td></tr><tr><td><strong>description</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.3?<a href="/type/string">string</a></td><td>Описание</td></tr><tr><td><strong>send_message</strong></td><td style="text-align: center;"><a href="/type/BotInlineMessage">BotInlineMessage</a></td><td>В зависимости от значения <code>type</code> и от <a href="/type/BotInlineMessage">конструктора</a> содержит подпись к медиафайлу или содержимое сообщения, которое будет отправлено <strong>вместо</strong> медиафайла</td></tr></tbody></table>

### Тип

[BotInlineResult](/type/BotInlineResult/)

### Связанные страницы

#### [Telegram Bot API](https://core.telegram.org/bots/api)

#### [BotInlineMessage](/type/BotInlineMessage/)

Инлайн-сообщение
