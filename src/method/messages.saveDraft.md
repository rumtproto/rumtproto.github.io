---
title: "messages.saveDraft"
original: "https://core.telegram.org/method/messages.saveDraft"
section: ref
kind: method
description: "Сохранить черновик сообщения, связанный с чатом."
layout: layout.njk
---

# messages.saveDraft

Сохранить [черновик](/api/drafts/) сообщения, связанный с чатом.

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
messages.saveDraft#54ae308e flags:# no_webpage:flags.1?true invert_media:flags.6?true reply_to:flags.4?InputReplyTo peer:InputPeer message:string entities:flags.3?Vector<MessageEntity> media:flags.5?InputMedia effect:flags.7?long suggested_post:flags.8?SuggestedPost = Bool;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>no_webpage</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/constructor/true">true</a></td><td>Отключить формирование предпросмотра веб-страницы</td></tr><tr><td><strong>invert_media</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.6?<a href="/constructor/true">true</a></td><td>Если задано, предпросмотр веб-страницы, если он будет, показывается над сообщением, а не под ним.</td></tr><tr><td><strong>reply_to</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.4?<a href="/type/InputReplyTo">InputReplyTo</a></td><td>Если установлено, указывает, что сообщение следует отправить в ответ на указанное сообщение или историю.</td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer">InputPeer</a></td><td>[@term:peer] Назначение отправляемого сообщения</td></tr><tr><td><strong>message</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Черновик</td></tr><tr><td><strong>entities</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.3?<a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/MessageEntity">MessageEntity</a>&gt;</td><td><a href="/api/entities">Сущности оформления</a> сообщения для форматированного текста</td></tr><tr><td><strong>media</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.5?<a href="/type/InputMedia">InputMedia</a></td><td>Прикреплённые медиа</td></tr><tr><td><strong>effect</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.7?<a href="/type/long">long</a></td><td>Задаёт <a href="/api/effects">эффект сообщения »</a>, применяемый к сообщению.</td></tr><tr><td><strong>suggested_post</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.8?<a href="/type/SuggestedPost">SuggestedPost</a></td><td>Используется, чтобы <a href="/api/suggested-posts">предложить пост каналу; подробнее о полном сценарии см. здесь »</a>.</td></tr></tbody></table>

### Результат

[Bool](/type/Bool/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>CHAT_ADMIN_REQUIRED</td><td>Для этого вы обязаны быть администратором этого чата.</td></tr><tr><td>403</td><td>CHAT_WRITE_FORBIDDEN</td><td>Вы не можете писать в этот чат.</td></tr><tr><td>400</td><td>ENTITY_BOUNDS_INVALID</td><td>Одно из указанных <a href="/api/entities#entity-length">смещений или значений длины сущности оформления</a> недействительно; о том, как правильно вычислять смещение и длину сущности, см. <a href="/api/entities#entity-length">здесь&nbsp;»</a>.</td></tr><tr><td>400</td><td>INPUT_USER_DEACTIVATED</td><td>Указанный пользователь был удалён.</td></tr><tr><td>400</td><td>MSG_ID_INVALID</td><td>Указан недействительный идентификатор сообщения.</td></tr><tr><td>400</td><td>PEER_ID_INVALID</td><td>Указанный идентификатор пира недействителен.</td></tr></tbody></table>

### Связанные страницы

#### [Оформленный текст и сущности оформления](/api/entities/)

Как оформлять текст с помощью сущностей оформления

#### [Анимированные эффекты для сообщений](/api/effects/)

Telegram позволяет добавлять к отправляемым сообщениям зрелищные анимированные эффекты.

#### [Предлагаемые посты](/api/suggested-posts/)

Telegram предлагает администраторам каналов мощный инструмент монетизации — предлагаемые посты.

#### [Черновики сообщений](/api/drafts/)

Как работать с черновиками сообщений
