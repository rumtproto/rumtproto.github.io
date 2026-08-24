---
title: "updateShortChatMessage"
original: "https://core.telegram.org/constructor/updateShortChatMessage"
section: ref
kind: constructor
description: "Сокращённый конструктор со сведениями об одном новом входящем текстовом сообщении из чата"
layout: layout.njk
---

# updateShortChatMessage

Сокращённый конструктор со сведениями об одном новом входящем текстовом сообщении из чата

```
updateShortChatMessage#4d6deea5 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:int from_id:long chat_id:long message:string pts:int pts_count:int date:int fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long reply_to:flags.3?MessageReplyHeader entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>out</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/constructor/true">true</a></td><td>Является ли сообщение исходящим</td></tr><tr><td><strong>mentioned</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.4?<a href="/constructor/true">true</a></td><td>Были ли мы упомянуты в этом сообщении</td></tr><tr><td><strong>media_unread</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.5?<a href="/constructor/true">true</a></td><td>Содержит ли сообщение <strong>непрочитанные</strong> упоминания</td></tr><tr><td><strong>silent</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.13?<a href="/constructor/true">true</a></td><td>Если истинно, сообщение отправлено без звука, уведомления не должны показываться</td></tr><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Идентификатор сообщения</td></tr><tr><td><strong>from_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Идентификатор отправителя сообщения</td></tr><tr><td><strong>chat_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Идентификатор чата, в который было отправлено сообщение</td></tr><tr><td><strong>message</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Сообщение</td></tr><tr><td><strong>pts</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>[@term:pts] <a href="/api/updates">PTS</a></td></tr><tr><td><strong>pts_count</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td><a href="/api/updates">Количество событий PTS</a></td></tr><tr><td><strong>date</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td><a href="/api/updates">Дата</a></td></tr><tr><td><strong>fwd_from</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/type/MessageFwdHeader">MessageFwdHeader</a></td><td>Информация о пересланном сообщении</td></tr><tr><td><strong>via_bot_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.11?<a href="/type/long">long</a></td><td>Информация об инлайн-боте, с помощью которого создано это сообщение</td></tr><tr><td><strong>reply_to</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.3?<a href="/type/MessageReplyHeader">MessageReplyHeader</a></td><td>Сведения об ответах (обсуждении)</td></tr><tr><td><strong>entities</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.7?<a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/MessageEntity">MessageEntity</a>&gt;</td><td><a href="/api/entities">Сущности оформления</a> для форматированного текста</td></tr><tr><td><strong>ttl_period</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.25?<a href="/type/int">int</a></td><td>Время жизни сообщения: как только updateShortChatMessage.date+updateShortChatMessage.ttl_period === time(), сообщение будет удалено на сервере, и его также необходимо удалить локально.</td></tr></tbody></table>

### Тип

[Updates](/type/Updates/)

### Связанные страницы

#### [Работа с обновлениями](/api/updates/)

Как подписаться на обновления и правильно их обрабатывать.

#### [Оформленный текст и сущности оформления](/api/entities/)

Как оформлять текст с помощью сущностей оформления
