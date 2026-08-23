---
title: "messages.DiscussionMessage (тип)"
original: "https://core.telegram.org/type/messages.DiscussionMessage"
section: ref
kind: type
layout: layout.njk
---

# messages.DiscussionMessage

*Тип из схемы TL.*

> Info about a message thread

## Определение TL

```
messages.discussionMessage#a6341782 flags:# messages:Vector<Message> max_id:flags.0?int read_inbox_max_id:flags.1?int read_outbox_max_id:flags.2?int unread_count:int chats:Vector<Chat> users:Vector<User> = messages.DiscussionMessage;

---functions---

messages.getDiscussionMessage#446972fd peer:InputPeer msg_id:int = messages.DiscussionMessage;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [messages.discussionMessage](/constructor/messages.discussionMessage/) | Information about a [message thread](https://core.telegram.org/api/threads) |

## Методы

| Method | Описание |
|---|---|
| [messages.getDiscussionMessage](/method/messages.getDiscussionMessage/) | Get [discussion message](https://core.telegram.org/api/threads) from the [associated discussion group](https://core.telegram.org/api/discussion) of a channel to show it on top of the comment section, without actually joining the group |
