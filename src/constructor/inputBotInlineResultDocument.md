---
title: "inputBotInlineResultDocument"
original: "https://core.telegram.org/constructor/inputBotInlineResultDocument"
section: ref
kind: constructor
description: "Документ (медиа любого типа, кроме фотографий)"
layout: layout.njk
---

# inputBotInlineResultDocument

Документ (медиа любого типа, кроме фотографий)

```
inputBotInlineResultDocument#fff8fdc4 flags:# id:string type:string title:flags.1?string description:flags.2?string document:InputDocument send_message:InputBotInlineMessage = InputBotInlineResult;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Идентификатор результата</td></tr><tr><td><strong>type</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Тип результата (см. <a href="/bots/api#inlinequeryresult">документацию Bot API</a>)</td></tr><tr><td><strong>title</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/string">string</a></td><td>Заголовок результата</td></tr><tr><td><strong>description</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/type/string">string</a></td><td>Описание результата</td></tr><tr><td><strong>document</strong></td><td style="text-align: center;"><a href="/type/InputDocument">InputDocument</a></td><td>Документ для отправки</td></tr><tr><td><strong>send_message</strong></td><td style="text-align: center;"><a href="/type/InputBotInlineMessage">InputBotInlineMessage</a></td><td>Сообщение, которое будет отправлено при выборе результата</td></tr></tbody></table>

### Тип

[InputBotInlineResult](/type/InputBotInlineResult/)

### Связанные страницы

#### [Telegram Bot API](https://core.telegram.org/bots/api)
