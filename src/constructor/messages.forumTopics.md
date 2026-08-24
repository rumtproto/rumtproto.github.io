---
title: "messages.forumTopics"
original: "https://core.telegram.org/constructor/messages.forumTopics"
section: ref
kind: constructor
description: "Содержит информацию о нескольких темах форума"
layout: layout.njk
---

# messages.forumTopics

Содержит информацию о нескольких [темах форума](/api/forum/#forum-topics)

```
messages.forumTopics#367617d3 flags:# order_by_create_date:flags.0?true count:int topics:Vector<ForumTopic> messages:Vector<Message> chats:Vector<Chat> users:Vector<User> pts:int = messages.ForumTopics;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>order_by_create_date</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Упорядочены ли возвращаемые темы по дате создания; если установлено, для постраничной выборки по <code>offset_date</code> следует использовать <a href="/constructor/forumTopic">forumTopic</a>.<code>date</code>; иначе темы упорядочены по дате последнего сообщения, поэтому выборку следует вести по полю <code>date</code> <a href="/type/Message">сообщения</a>, на которое ссылается <a href="/constructor/forumTopic">forumTopic</a>.<code>top_message</code>.</td></tr><tr><td><strong>count</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Общее число тем, соответствующих запросу; может быть больше числа тем, содержащихся в <code>topics</code>, в этом случае требуется <a href="/api/offsets">постраничная выборка</a>.</td></tr><tr><td><strong>topics</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/ForumTopic">ForumTopic</a>&gt;</td><td>Темы форума</td></tr><tr><td><strong>messages</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/Message">Message</a>&gt;</td><td>Связанные сообщения (содержит сообщения, на которые ссылается <a href="/constructor/forumTopic">forumTopic</a>.<code>top_message</code>).</td></tr><tr><td><strong>chats</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/Chat">Chat</a>&gt;</td><td>Связанные чаты</td></tr><tr><td><strong>users</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/User">User</a>&gt;</td><td>Связанные пользователи</td></tr><tr><td><strong>pts</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>[@term:pts] <a href="/api/updates">Число событий после генерации</a></td></tr></tbody></table>

### Тип

[messages.ForumTopics](/type/messages.ForumTopics/)

### Связанные страницы

#### [forumTopic](/constructor/forumTopic/)

Представляет [тему форума](/api/forum/#forum-topics).

#### [Message](/type/Message/)

Объект, описывающий сообщение.

#### [Постраничная выборка в API](/api/offsets/)

Как выбирать результаты из больших списков объектов.

#### [Работа с обновлениями](/api/updates/)

Как подписаться на обновления и правильно их обрабатывать.

#### [Темы форума](/api/forum/)

Telegram позволяет создавать форумы с несколькими самостоятельными темами.
