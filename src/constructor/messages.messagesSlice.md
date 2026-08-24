---
title: "messages.messagesSlice"
original: "https://core.telegram.org/constructor/messages.messagesSlice"
section: ref
kind: constructor
description: "Неполный список сообщений и вспомогательных данных."
layout: layout.njk
---

# messages.messagesSlice

Неполный список сообщений и вспомогательных данных.

```
messages.messagesSlice#5f206716 flags:# inexact:flags.1?true count:int next_rate:flags.0?int offset_id_offset:flags.2?int search_flood:flags.3?SearchPostsFlood messages:Vector<Message> topics:Vector<ForumTopic> chats:Vector<Chat> users:Vector<User> = messages.Messages;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>inexact</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/constructor/true">true</a></td><td>Если установлено, указывает, что результаты могут быть неточными</td></tr><tr><td><strong>count</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Общее число сообщений в списке</td></tr><tr><td><strong>next_rate</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/int">int</a></td><td>Значение для передачи в параметре <code>offset_rate</code> при следующем вызове <a href="/method/messages.searchGlobal">messages.searchGlobal</a></td></tr><tr><td><strong>offset_id_offset</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/type/int">int</a></td><td>Указывает абсолютную позицию <code>messages[0]</code> в полном наборе результатов размером <code>count</code>.<br>Это полезно, например, если результат был получен с помощью <code>offset_id</code> и требуется показать счётчик вида <code>progress/total</code> (например, <code>photo 134 of 200</code> для всех медиафайлов в чате — мы можем просто использовать <code>photo ${offset_id_offset} of ${count}</code>).</td></tr><tr><td><strong>search_flood</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.3?<a href="/type/SearchPostsFlood">SearchPostsFlood</a></td><td><a href="/api/search#posts-tab">Для глобального поиска по постам »</a> — оставшееся число бесплатных поисковых запросов; здесь <code>query_is_free</code> относится только к текущему вызову, а не к следующему постраничному, при этом все последующие постраничные вызовы всегда бесплатны.</td></tr><tr><td><strong>messages</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/Message">Message</a>&gt;</td><td>Список сообщений</td></tr><tr><td><strong>topics</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/ForumTopic">ForumTopic</a>&gt;</td><td><a href="/api/forum#forum-topics">Темы форума</a>, которым принадлежат возвращённые сообщения.</td></tr><tr><td><strong>chats</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/Chat">Chat</a>&gt;</td><td>Список чатов, упомянутых в сообщениях</td></tr><tr><td><strong>users</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/User">User</a>&gt;</td><td>Список пользователей, упомянутых в сообщениях и чатах</td></tr></tbody></table>

### Тип

[messages.Messages](/type/messages.Messages/)

### Связанные страницы

#### [messages.searchGlobal](/method/messages.searchGlobal/)

Глобальный поиск сообщений и пиров

#### [Поиск и фильтры](/api/search/)

Telegram позволяет применять подробные фильтры сообщений при поиске в чатах.

#### [Темы форума](/api/forum/)

Telegram позволяет создавать форумы с несколькими самостоятельными темами.
