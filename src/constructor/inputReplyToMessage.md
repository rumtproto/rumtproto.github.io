---
title: "inputReplyToMessage"
original: "https://core.telegram.org/constructor/inputReplyToMessage"
section: ref
kind: constructor
description: "Ответить на сообщение."
layout: layout.njk
---

# inputReplyToMessage

Ответить на сообщение.

```
inputReplyToMessage#869fbe10 flags:# reply_to_msg_id:int top_msg_id:flags.0?int reply_to_peer_id:flags.1?InputPeer quote_text:flags.2?string quote_entities:flags.3?Vector<MessageEntity> quote_offset:flags.4?int monoforum_peer_id:flags.5?InputPeer todo_item_id:flags.6?int = InputReplyTo;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>reply_to_msg_id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Идентификатор сообщения, на которое нужно ответить.</td></tr><tr><td><strong>top_msg_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/int">int</a></td><td>Это поле обязано содержать идентификатор темы <strong>только</strong> при ответе на сообщения в темах форума, отличных от темы «General» (то есть когда задан <code>reply_to_msg_id</code>, при этом <code>reply_to_msg_id != topicID</code> и <code>topicID != 1</code>).<br>Если сообщение, на которое даётся ответ, будет удалено до завершения работы метода, значение из этого поля будет использовано, чтобы отправить сообщение в нужную тему, а не в тему «General».</td></tr><tr><td><strong>reply_to_peer_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/InputPeer">InputPeer</a></td><td>Используется для ответа на сообщения, отправленные в другой чат (указанный здесь); может применяться только для чатов и сообщений без флага <code>protected</code>.</td></tr><tr><td><strong>quote_text</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/type/string">string</a></td><td>Используется для ответа с цитированием только определённой части исходного сообщения (указанной здесь). Максимальная длина цитаты в UTF-8 задаётся ключом конфигурации <a href="/api/config#quote-length-max">quote_length_max</a>.</td></tr><tr><td><strong>quote_entities</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.3?<a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/MessageEntity">MessageEntity</a>&gt;</td><td><a href="/api/entities">Сущности оформления текста</a> из поля <code>quote_text</code>.</td></tr><tr><td><strong>quote_offset</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.4?<a href="/type/int">int</a></td><td>Смещение текста <code>quote_text</code> внутри исходного сообщения (в <a href="/api/entities#entity-length">кодовых единицах UTF-16</a>).</td></tr><tr><td><strong>monoforum_peer_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.5?<a href="/type/InputPeer">InputPeer</a></td><td>Обязано быть равно идентификатору темы при ответе на сообщение внутри <a href="/api/monoforum">темы монофорума</a>.</td></tr><tr><td><strong>todo_item_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.6?<a href="/type/int">int</a></td><td>Может быть задано, чтобы ответить на указанный пункт <a href="/api/todo">списка задач »</a>.</td></tr><tr><td><strong>poll_option</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.7?<a href="/type/bytes">bytes</a></td><td>Если установлено, отправляет сообщение как <a href="/api/poll#replying-to-poll-options">ответ на конкретный вариант ответа опроса »</a>, содержащий байты <code>option</code> нужного варианта.</td></tr></tbody></table>

### Тип

[InputReplyTo](/type/InputReplyTo/)

### Связанные страницы

#### [Конфигурация клиента](/api/config/)

У MTProto API есть несколько параметров конфигурации, которые можно получить соответствующими методами.

#### [Оформленный текст и сущности оформления](/api/entities/)

Как оформлять текст с помощью сущностей оформления

#### [Личные сообщения в каналы](/api/monoforum/)

Telegram поддерживает личные сообщения в каналы, которые также можно использовать для предложения постов в канал, в том числе платных.

#### [Чек-листы и списки задач](/api/todo/)

Пользователи Premium теперь могут создавать совместные чек-листы в любом чате, чтобы отслеживать задачи и координировать команды — или вести списки покупок и дел.

#### [Опросы и викторины](/api/poll/)

Telegram позволяет отправлять опросы и викторины, в которых могут проголосовать тысячи, если не миллионы пользователей в чатах и каналах.
