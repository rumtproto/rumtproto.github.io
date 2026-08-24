---
title: "messages.discussionMessage"
original: "https://core.telegram.org/constructor/messages.discussionMessage"
section: ref
kind: constructor
description: "Информация о ветке сообщений"
layout: layout.njk
---

# messages.discussionMessage

Информация о [ветке сообщений](/api/threads/)

```
messages.discussionMessage#a6341782 flags:# messages:Vector<Message> max_id:flags.0?int read_inbox_max_id:flags.1?int read_outbox_max_id:flags.2?int unread_count:int chats:Vector<Chat> users:Vector<User> = messages.DiscussionMessage;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>messages</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/Message">Message</a>&gt;</td><td>Сообщения, с которых начинается тред. Сообщения возвращаются в обратном хронологическом порядке (то есть по убыванию идентификатора сообщения).</td></tr><tr><td><strong>max_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/int">int</a></td><td>Идентификатор последнего ответа в этой <a href="/api/threads">ветке</a></td></tr><tr><td><strong>read_inbox_max_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/int">int</a></td><td>Идентификатор последнего прочитанного входящего сообщения в этой <a href="/api/threads">ветке</a></td></tr><tr><td><strong>read_outbox_max_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/type/int">int</a></td><td>Идентификатор последнего прочитанного исходящего сообщения в этой <a href="/api/threads">ветке</a></td></tr><tr><td><strong>unread_count</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Количество непрочитанных сообщений</td></tr><tr><td><strong>chats</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/Chat">Chat</a>&gt;</td><td>Чаты, упомянутые в конструкторе</td></tr><tr><td><strong>users</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/User">User</a>&gt;</td><td>Пользователи, упомянутые в конструкторе</td></tr></tbody></table>

### Тип

[messages.DiscussionMessage](/type/messages.DiscussionMessage/)

### Связанные страницы

#### [Треды сообщений](/api/threads/)

Благодаря веткам обсуждения Telegram позволяет комментировать пост канала или обычное сообщение супергруппы.
