---
title: "inputBotInlineMessageMediaWebPage"
original: "https://core.telegram.org/constructor/inputBotInlineMessageMediaWebPage"
section: ref
kind: constructor
description: "Задаёт параметры, которые будут использованы для создания предпросмотра ссылки в сообщении, либо даже отдельного предпросмотра ссылки без прикреплённого сообщения."
layout: layout.njk
---

# inputBotInlineMessageMediaWebPage

Задаёт параметры, которые будут использованы для создания предпросмотра ссылки в сообщении, либо даже отдельного предпросмотра ссылки без прикреплённого сообщения.

```
inputBotInlineMessageMediaWebPage#bddcc510 flags:# invert_media:flags.3?true force_large_media:flags.4?true force_small_media:flags.5?true optional:flags.6?true message:string entities:flags.1?Vector<MessageEntity> url:string reply_markup:flags.2?ReplyMarkup = InputBotInlineMessage;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>invert_media</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.3?<a href="/constructor/true">true</a></td><td>Если задано, предпросмотр веб-страницы, если он будет, показывается над сообщением, а не под ним.</td></tr><tr><td><strong>force_large_media</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.4?<a href="/constructor/true">true</a></td><td>Если установлено, указывает, что следует использовать крупный предпросмотр медиа.</td></tr><tr><td><strong>force_small_media</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.5?<a href="/constructor/true">true</a></td><td>Если установлено, указывает, что следует использовать небольшой предпросмотр медиа.</td></tr><tr><td><strong>optional</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.6?<a href="/constructor/true">true</a></td><td>Если <strong>не</strong> установлено, будет возвращена ошибка RPC <code>WEBPAGE_NOT_FOUND</code> в случае, когда предпросмотр веб-страницы для указанного <code>url</code> сформировать не удаётся; иначе ошибка не возвращается (если только переданное сообщение не пустое — в этом случае вместо неё будет возвращена ошибка <code>MESSAGE_EMPTY</code>).</td></tr><tr><td><strong>message</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Сообщение, может быть пустым.</td></tr><tr><td><strong>entities</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/MessageEntity">MessageEntity</a>&gt;</td><td><a href="/api/entities">Сущности оформления для форматированного текста</a></td></tr><tr><td><strong>url</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>URL, который следует использовать для предпросмотра ссылки.</td></tr><tr><td><strong>reply_markup</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/type/ReplyMarkup">ReplyMarkup</a></td><td>Инлайн-клавиатура</td></tr></tbody></table>

### Тип

[InputBotInlineMessage](/type/InputBotInlineMessage/)

### Связанные страницы

#### [Оформленный текст и сущности оформления](/api/entities/)

Как оформлять текст с помощью сущностей оформления
