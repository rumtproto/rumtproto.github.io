---
title: "messages.getReplies (метод)"
original: "https://core.telegram.org/method/messages.getReplies"
section: ref
kind: method
layout: layout.njk
---

# messages.getReplies

*Метод из схемы TL.*

> Get messages in a reply thread

## Определение TL

```
messages.messages#1d73e7ea messages:Vector<Message> topics:Vector<ForumTopic> chats:Vector<Chat> users:Vector<User> = messages.Messages;
messages.messagesSlice#5f206716 flags:# inexact:flags.1?true count:int next_rate:flags.0?int offset_id_offset:flags.2?int search_flood:flags.3?SearchPostsFlood messages:Vector<Message> topics:Vector<ForumTopic> chats:Vector<Chat> users:Vector<User> = messages.Messages;
messages.channelMessages#c776ba4e flags:# inexact:flags.1?true pts:int count:int offset_id_offset:flags.2?int messages:Vector<Message> topics:Vector<ForumTopic> chats:Vector<Chat> users:Vector<User> = messages.Messages;
messages.messagesNotModified#74535f21 count:int = messages.Messages;
---functions---
messages.getReplies#22ddd30c peer:InputPeer msg_id:int offset_id:int offset_date:int add_offset:int limit:int max_id:int min_id:int hash:long = messages.Messages;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| peer | [InputPeer](/type/InputPeer/) | Peer |
| msg_id | [int](/type/int/) | Message ID |
| offset_id | [int](/type/int/) | [Offsets for pagination, for more info click here](https://core.telegram.org/api/offsets) |
| offset_date | [int](/type/int/) | [Offsets for pagination, for more info click here](https://core.telegram.org/api/offsets) |
| add_offset | [int](/type/int/) | [Offsets for pagination, for more info click here](https://core.telegram.org/api/offsets) |
| limit | [int](/type/int/) | Maximum number of results to return, [see pagination](https://core.telegram.org/api/offsets) |
| max_id | [int](/type/int/) | If a positive value was transferred, the method will return only messages with ID smaller than max_id |
| min_id | [int](/type/int/) | If a positive value was transferred, the method will return only messages with ID bigger than min_id |
| hash | [long](/type/long/) | [Hash used for caching, for more info click here](https://core.telegram.org/api/offsets#hash-generation) |

## Результат

[messages.Messages](/type/messages.Messages/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | CHANNEL_INVALID | The provided channel is invalid. |
| 400 | CHANNEL_PRIVATE | You haven't joined this channel/supergroup. |
| 400 | MSG_ID_INVALID | Invalid message ID provided. |
| 400 | PEER_ID_INVALID | The provided peer id is invalid. |
| 400 | TOPIC_ID_INVALID | The specified topic ID is invalid. |

## Related pages

#### [Pagination in the API](https://core.telegram.org/api/offsets)

How to fetch results from large lists of objects.
