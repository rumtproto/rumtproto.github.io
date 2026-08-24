---
title: "messages.getWebPagePreview"
original: "https://core.telegram.org/method/messages.getWebPagePreview"
section: ref
kind: method
description: "Получить предпросмотр веб-страницы"
layout: layout.njk
---

# messages.getWebPagePreview

Получить предпросмотр веб-страницы

```
messages.webPagePreview#8c9a88ac media:MessageMedia chats:Vector<Chat> users:Vector<User> = messages.WebPagePreview;
---functions---
messages.getWebPagePreview#570d6f6f flags:# message:string entities:flags.3?Vector<MessageEntity> = messages.WebPagePreview;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>message</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Сообщение, из которого извлекается предпросмотр</td></tr><tr><td><strong>entities</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.3?<a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/MessageEntity">MessageEntity</a>&gt;</td><td><a href="/api/entities">Сущности оформления для форматированного текста</a></td></tr></tbody></table>

### Результат

[messages.WebPagePreview](/type/messages.WebPagePreview/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>ENTITY_BOUNDS_INVALID</td><td>Одно из указанных <a href="/api/entities#entity-length">смещений или значений длины сущности оформления</a> недействительно; о том, как правильно вычислять смещение и длину сущности, см. <a href="/api/entities#entity-length">здесь&nbsp;»</a>.</td></tr><tr><td>400</td><td>MESSAGE_EMPTY</td><td>Указанное сообщение пусто.</td></tr></tbody></table>

### Связанные страницы

#### [Оформленный текст и сущности оформления](/api/entities/)

Как оформлять текст с помощью сущностей оформления
