---
title: "messages.getDiscussionMessage"
original: "https://core.telegram.org/method/messages.getDiscussionMessage"
section: ref
kind: method
description: "Получить сообщение обсуждения из связанной группы обсуждения канала, чтобы показать его над разделом комментариев, не вступая при этом в группу"
layout: layout.njk
---

# messages.getDiscussionMessage

Получить [сообщение обсуждения](/api/threads/) из [связанной группы обсуждения](/api/discussion/) канала, чтобы показать его над разделом комментариев, не вступая при этом в группу

```
messages.discussionMessage#a6341782 flags:# messages:Vector<Message> max_id:flags.0?int read_inbox_max_id:flags.1?int read_outbox_max_id:flags.2?int unread_count:int chats:Vector<Chat> users:Vector<User> = messages.DiscussionMessage;
---functions---
messages.getDiscussionMessage#446972fd peer:InputPeer msg_id:int = messages.DiscussionMessage;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer">InputPeer</a></td><td>[@term:peer] <a href="/api/channel">Идентификатор канала</a></td></tr><tr><td><strong>msg_id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>[@term:msg_id] Идентификатор сообщения</td></tr></tbody></table>

### Результат

[messages.DiscussionMessage](/type/messages.DiscussionMessage/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>CHANNEL_INVALID</td><td>Указанный канал недействителен.</td></tr><tr><td>400</td><td>CHANNEL_PRIVATE</td><td>Вы не вступили в этот канал или супергруппу.</td></tr><tr><td>400</td><td>MSG_ID_INVALID</td><td>Указан недействительный идентификатор сообщения.</td></tr><tr><td>400</td><td>PEER_ID_INVALID</td><td>Указанный идентификатор пира недействителен.</td></tr><tr><td>400</td><td>TOPIC_ID_INVALID</td><td>Указанный идентификатор темы форума недействителен.</td></tr></tbody></table>

### Связанные страницы

#### [Каналы, супергруппы, гигагруппы и обычные группы](/api/channel/)

Как работать с каналами, супергруппами, гигагруппами и обычными группами и чем они друг от друга отличаются.

#### [Треды сообщений](/api/threads/)

Благодаря веткам обсуждения Telegram позволяет комментировать пост канала или обычное сообщение супергруппы.

#### [Группы обсуждения](/api/discussion/)

Группы можно связать с каналом в качестве группы обсуждения, чтобы пользователи могли обсуждать посты.
