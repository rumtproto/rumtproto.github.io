---
title: "inputMediaWebPage"
original: "https://core.telegram.org/constructor/inputMediaWebPage"
section: ref
kind: constructor
description: "Задаёт параметры, которые будут использованы для создания предпросмотра ссылки в подписи, либо даже отдельного предпросмотра ссылки без прикреплённого сообщения."
layout: layout.njk
---

# inputMediaWebPage

Задаёт параметры, которые будут использованы для создания предпросмотра ссылки в подписи, либо даже отдельного предпросмотра ссылки без прикреплённого сообщения.

```
inputMediaWebPage#c21b8849 flags:# force_large_media:flags.0?true force_small_media:flags.1?true optional:flags.2?true url:string = InputMedia;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>force_large_media</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Если установлено, указывает, что следует использовать крупный предпросмотр медиа.</td></tr><tr><td><strong>force_small_media</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/constructor/true">true</a></td><td>Если установлено, указывает, что следует использовать небольшой предпросмотр медиа.</td></tr><tr><td><strong>optional</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/constructor/true">true</a></td><td>Если <strong>не</strong> установлено, будет возвращена ошибка RPC <code>WEBPAGE_NOT_FOUND</code> в случае, когда предпросмотр веб-страницы для указанного <code>url</code> сформировать не удаётся; иначе ошибка не возвращается (если только переданное сообщение не пустое — в этом случае вместо неё будет возвращена ошибка <code>MESSAGE_EMPTY</code>).</td></tr><tr><td><strong>url</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>URL, который следует использовать для предпросмотра ссылки.</td></tr></tbody></table>

### Тип

[InputMedia](/type/InputMedia/)
