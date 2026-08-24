---
title: "messageReplyHeader"
original: "https://core.telegram.org/constructor/messageReplyHeader"
section: ref
kind: constructor
description: "Сведения об ответах на сообщение и о ветке обсуждения"
layout: layout.njk
---

# messageReplyHeader

Сведения об ответах на сообщение и о [ветке обсуждения](/api/threads/)

```
messageReplyHeader#6917560b flags:# reply_to_scheduled:flags.2?true forum_topic:flags.3?true quote:flags.9?true reply_to_msg_id:flags.4?int reply_to_peer_id:flags.0?Peer reply_from:flags.5?MessageFwdHeader reply_media:flags.8?MessageMedia reply_to_top_id:flags.1?int quote_text:flags.6?string quote_entities:flags.7?Vector<MessageEntity> quote_offset:flags.10?int todo_item_id:flags.11?int = MessageReplyHeader;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>reply_to_scheduled</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/constructor/true">true</a></td><td>Это ответ на отложенное сообщение.</td></tr><tr><td><strong>forum_topic</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.3?<a href="/constructor/true">true</a></td><td>Было ли это сообщение отправлено в <a href="/api/forum#forum-topics">теме форума</a> (кроме темы General).</td></tr><tr><td><strong>quote</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.9?<a href="/constructor/true">true</a></td><td>Цитирует ли это сообщение часть другого сообщения.</td></tr><tr><td><strong>reply_to_msg_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.4?<a href="/type/int">int</a></td><td>Идентификатор сообщения, на которое отвечает это сообщение</td></tr><tr><td><strong>reply_to_peer_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/Peer">Peer</a></td><td>Для ответов, отправленных в <a href="/api/threads">обсуждениях канала</a>, участником которых текущий пользователь не является, — идентификатор группы обсуждения</td></tr><tr><td><strong>reply_from</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.5?<a href="/type/MessageFwdHeader">MessageFwdHeader</a></td><td>При ответе на сообщение, отправленное определённым пиром в другой чат, содержит информацию о пире, который изначально отправил это сообщение в тот другой чат.</td></tr><tr><td><strong>reply_media</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.8?<a href="/type/MessageMedia">MessageMedia</a></td><td>При ответе на медиа, отправленное определённым пиром в другой чат, содержит медиа сообщения, на которое дан ответ.</td></tr><tr><td><strong>reply_to_top_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/int">int</a></td><td>Идентификатор сообщения, с которого началась эта <a href="/api/threads">ветка сообщений</a></td></tr><tr><td><strong>quote_text</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.6?<a href="/type/string">string</a></td><td>Используется для ответа с цитированием только определённой части исходного сообщения (указанной здесь).</td></tr><tr><td><strong>quote_entities</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.7?<a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/MessageEntity">MessageEntity</a>&gt;</td><td><a href="/api/entities">Сущности оформления текста</a> из поля <code>quote_text</code>.</td></tr><tr><td><strong>quote_offset</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.10?<a href="/type/int">int</a></td><td>Смещение текста <code>quote_text</code> внутри исходного сообщения (в <a href="/api/entities#entity-length">кодовых единицах UTF-16</a>).</td></tr><tr><td><strong>todo_item_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.11?<a href="/type/int">int</a></td><td>Может быть задано, чтобы ответить на указанный пункт <a href="/api/todo">списка задач »</a>.</td></tr><tr><td><strong>poll_option</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.12?<a href="/type/bytes">bytes</a></td><td>Если сообщение является <a href="/api/poll#replying-to-poll-options">ответом на конкретный вариант ответа в опросе »</a> — байты <code>option</code> того варианта, которому адресован ответ.</td></tr></tbody></table>

### Тип

[MessageReplyHeader](/type/MessageReplyHeader/)

### Связанные страницы

#### [Темы форума](/api/forum/)

Telegram позволяет создавать форумы с несколькими самостоятельными темами.

#### [Треды сообщений](/api/threads/)

Благодаря веткам обсуждения Telegram позволяет комментировать пост канала или обычное сообщение супергруппы.

#### [Оформленный текст и сущности оформления](/api/entities/)

Как оформлять текст с помощью сущностей оформления

#### [Чек-листы и списки задач](/api/todo/)

Пользователи Premium теперь могут создавать совместные чек-листы в любом чате, чтобы отслеживать задачи и координировать команды — или вести списки покупок и дел.

#### [Опросы и викторины](/api/poll/)

Telegram позволяет отправлять опросы и викторины, в которых могут проголосовать тысячи, если не миллионы пользователей в чатах и каналах.
