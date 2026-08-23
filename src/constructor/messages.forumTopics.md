---
title: "messages.forumTopics (конструктор)"
original: "https://core.telegram.org/constructor/messages.forumTopics"
section: ref
kind: constructor
layout: layout.njk
---

# messages.forumTopics

*Конструктор из схемы TL.*

> Contains information about multiple [forum topics](https://core.telegram.org/api/forum#forum-topics)

## Определение TL

```
messages.forumTopics#367617d3 flags:# order_by_create_date:flags.0?true count:int topics:Vector<ForumTopic> messages:Vector<Message> chats:Vector<Chat> users:Vector<User> pts:int = messages.ForumTopics;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| order_by_create_date | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | Whether the returned topics are ordered by creation date; if set, pagination by offset_date should use [forumTopic](/constructor/forumTopic/).date; otherwise topics are ordered by the last message date, so paginate by the date of the [message](/type/Message/) referenced by [forumTopic](/constructor/forumTopic/).top_message. |
| count | [int](/type/int/) | Total number of topics matching query; may be more than the topics contained in topics, in which case [pagination](https://core.telegram.org/api/offsets) is required. |
| topics | [Vector](https://core.telegram.org/type/Vector%20t)<[ForumTopic](/type/ForumTopic/)> | Forum topics |
| messages | [Vector](https://core.telegram.org/type/Vector%20t)<[Message](/type/Message/)> | Related messages (contains the messages mentioned by [forumTopic](/constructor/forumTopic/).top_message). |
| chats | [Vector](https://core.telegram.org/type/Vector%20t)<[Chat](/type/Chat/)> | Related chats |
| users | [Vector](https://core.telegram.org/type/Vector%20t)<[User](/type/User/)> | Related users |
| pts | [int](/type/int/) | [Event count after generation](/api/updates/) |

## Тип

[messages.ForumTopics](/type/messages.ForumTopics/)

## Related pages

#### [forumTopic](/constructor/forumTopic/)

Represents a [forum topic](https://core.telegram.org/api/forum#forum-topics).

#### [Message](/type/Message/)

Object describing a message.

#### [Pagination in the API](https://core.telegram.org/api/offsets)

How to fetch results from large lists of objects.

#### [Working with Updates](/api/updates/)

How to subscribe to updates and handle them properly.

#### [Forum topics](https://core.telegram.org/api/forum)

Telegram allows creating forums with multiple distinct topics.
