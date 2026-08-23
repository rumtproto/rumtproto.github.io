---
title: "messages.getQuickReplyMessages (метод)"
original: "https://core.telegram.org/method/messages.getQuickReplyMessages"
section: ref
kind: method
layout: layout.njk
---

# messages.getQuickReplyMessages

*Метод из схемы TL.*

> Fetch (a subset or all) messages in a [quick reply shortcut »](https://core.telegram.org/api/business#quick-reply-shortcuts).

## Определение TL

```
messages.messages#1d73e7ea messages:Vector<Message> topics:Vector<ForumTopic> chats:Vector<Chat> users:Vector<User> = messages.Messages;
messages.messagesSlice#5f206716 flags:# inexact:flags.1?true count:int next_rate:flags.0?int offset_id_offset:flags.2?int search_flood:flags.3?SearchPostsFlood messages:Vector<Message> topics:Vector<ForumTopic> chats:Vector<Chat> users:Vector<User> = messages.Messages;
messages.channelMessages#c776ba4e flags:# inexact:flags.1?true pts:int count:int offset_id_offset:flags.2?int messages:Vector<Message> topics:Vector<ForumTopic> chats:Vector<Chat> users:Vector<User> = messages.Messages;
messages.messagesNotModified#74535f21 count:int = messages.Messages;
---functions---
messages.getQuickReplyMessages#94a495c3 flags:# shortcut_id:int id:flags.0?Vector<int> hash:long = messages.Messages;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| shortcut_id | [int](/type/int/) | Quick reply shortcut ID. |
| id | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[Vector](https://core.telegram.org/type/Vector%20t)<[int](/type/int/)> | IDs of the messages to fetch, if empty fetches all of them. |
| hash | [long](/type/long/) | Hash for pagination, generated as specified [here »](https://core.telegram.org/api/business#quick-reply-shortcuts) (not the usual algorithm used for hash generation). |

## Результат

[messages.Messages](/type/messages.Messages/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | SHORTCUT_INVALID | The specified shortcut is invalid. |

## Related pages

#### [Telegram Business](https://core.telegram.org/api/business)

Users can turn their Telegram account into a business account, gaining access to business features such as opening hours, location, quick replies, automated messages, custom start pages, chatbot support, and more.
