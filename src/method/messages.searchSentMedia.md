---
title: "messages.searchSentMedia (метод)"
original: "https://core.telegram.org/method/messages.searchSentMedia"
section: ref
kind: method
layout: layout.njk
---

# messages.searchSentMedia

*Метод из схемы TL.*

> View and search recently sent media.  
> This method does not support pagination.

## Определение TL

```
messages.messages#1d73e7ea messages:Vector<Message> topics:Vector<ForumTopic> chats:Vector<Chat> users:Vector<User> = messages.Messages;
messages.messagesSlice#5f206716 flags:# inexact:flags.1?true count:int next_rate:flags.0?int offset_id_offset:flags.2?int search_flood:flags.3?SearchPostsFlood messages:Vector<Message> topics:Vector<ForumTopic> chats:Vector<Chat> users:Vector<User> = messages.Messages;
messages.channelMessages#c776ba4e flags:# inexact:flags.1?true pts:int count:int offset_id_offset:flags.2?int messages:Vector<Message> topics:Vector<ForumTopic> chats:Vector<Chat> users:Vector<User> = messages.Messages;
messages.messagesNotModified#74535f21 count:int = messages.Messages;
---functions---
messages.searchSentMedia#107e31a0 q:string filter:MessagesFilter limit:int = messages.Messages;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| q | [string](/type/string/) | Optional search query |
| filter | [MessagesFilter](/type/MessagesFilter/) | Message filter |
| limit | [int](/type/int/) | Maximum number of results to return (max 100). |

## Результат

[messages.Messages](/type/messages.Messages/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | FILTER_NOT_SUPPORTED | The specified filter cannot be used in this context. |
