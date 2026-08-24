---
title: "draftMessage"
original: "https://core.telegram.org/constructor/draftMessage"
section: ref
kind: constructor
description: "Представляет черновик сообщения."
layout: layout.njk
---

# draftMessage

Представляет [черновик](/api/drafts/) сообщения.

```
draftMessage#96eaa5eb flags:# no_webpage:flags.1?true invert_media:flags.6?true reply_to:flags.4?InputReplyTo message:string entities:flags.3?Vector<MessageEntity> media:flags.5?InputMedia date:int effect:flags.7?long suggested_post:flags.8?SuggestedPost = DraftMessage;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>no_webpage</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/constructor/true">true</a></td><td>Не будет ли создаваться предпросмотр веб-страницы</td></tr><tr><td><strong>invert_media</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.6?<a href="/constructor/true">true</a></td><td>Если задано, предпросмотр веб-страницы, если он будет, показывается над сообщением, а не под ним.</td></tr><tr><td><strong>reply_to</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.4?<a href="/type/InputReplyTo">InputReplyTo</a></td><td>Если установлено, указывает, что сообщение следует отправить в ответ на указанное сообщение или историю.</td></tr><tr><td><strong>message</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Черновик</td></tr><tr><td><strong>entities</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.3?<a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/MessageEntity">MessageEntity</a>&gt;</td><td><a href="/api/entities">Сущности оформления</a> сообщения для форматированного текста.</td></tr><tr><td><strong>media</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.5?<a href="/type/InputMedia">InputMedia</a></td><td>Медиа.</td></tr><tr><td><strong>date</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Дата последнего изменения черновика.</td></tr><tr><td><strong>effect</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.7?<a href="/type/long">long</a></td><td><a href="/api/effects">Эффект сообщения, который должен быть воспроизведён так, как описано здесь »</a>.</td></tr><tr><td><strong>suggested_post</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.8?<a href="/type/SuggestedPost">SuggestedPost</a></td><td>Используется, чтобы <a href="/api/suggested-posts">предложить пост каналу; подробнее о полном сценарии см. здесь »</a>.</td></tr></tbody></table>

### Тип

[DraftMessage](/type/DraftMessage/)

### Связанные страницы

#### [Оформленный текст и сущности оформления](/api/entities/)

Как оформлять текст с помощью сущностей оформления

#### [Анимированные эффекты для сообщений](/api/effects/)

Telegram позволяет добавлять к отправляемым сообщениям зрелищные анимированные эффекты.

#### [Предлагаемые посты](/api/suggested-posts/)

Telegram предлагает администраторам каналов мощный инструмент монетизации — предлагаемые посты.

#### [Черновики сообщений](/api/drafts/)

Как работать с черновиками сообщений
