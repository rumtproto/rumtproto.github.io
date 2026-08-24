---
title: "messages.DiscussionMessage"
original: "https://core.telegram.org/type/messages.DiscussionMessage"
section: ref
kind: type
description: "Информация о ветке сообщений"
layout: layout.njk
---

# messages.DiscussionMessage

Информация о ветке сообщений

```
messages.discussionMessage#a6341782 flags:# messages:Vector<Message> max_id:flags.0?int read_inbox_max_id:flags.1?int read_outbox_max_id:flags.2?int unread_count:int chats:Vector<Chat> users:Vector<User> = messages.DiscussionMessage;

---functions---

messages.getDiscussionMessage#446972fd peer:InputPeer msg_id:int = messages.DiscussionMessage;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/messages.discussionMessage">messages.discussionMessage</a></td><td>Информация о <a href="/api/threads">ветке сообщений</a></td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/messages.getDiscussionMessage">messages.getDiscussionMessage</a></td><td>Получить <a href="/api/threads">сообщение обсуждения</a> из <a href="/api/discussion">связанной группы обсуждения</a> канала, чтобы показать его над разделом комментариев, не вступая при этом в группу</td></tr></tbody></table>
