---
title: "messages.getHistory (метод)"
original: "https://core.telegram.org/method/messages.getHistory"
section: ref
kind: method
layout: layout.njk
---

# messages.getHistory

*Метод из схемы TL.*

> Returns the message history in a peer.
> Results are ordered by date (descending).

## Определение TL

```
messages.messages#1d73e7ea messages:Vector<Message> topics:Vector<ForumTopic> chats:Vector<Chat> users:Vector<User> = messages.Messages;
messages.messagesSlice#5f206716 flags:# inexact:flags.1?true count:int next_rate:flags.0?int offset_id_offset:flags.2?int search_flood:flags.3?SearchPostsFlood messages:Vector<Message> topics:Vector<ForumTopic> chats:Vector<Chat> users:Vector<User> = messages.Messages;
messages.channelMessages#c776ba4e flags:# inexact:flags.1?true pts:int count:int offset_id_offset:flags.2?int messages:Vector<Message> topics:Vector<ForumTopic> chats:Vector<Chat> users:Vector<User> = messages.Messages;
messages.messagesNotModified#74535f21 count:int = messages.Messages;
---functions---
messages.getHistory#4423e6c5 peer:InputPeer offset_id:int offset_date:int add_offset:int limit:int max_id:int min_id:int hash:long = messages.Messages;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| peer | [InputPeer](/type/InputPeer/) | Target peer |
| offset_id | [int](/type/int/) | Only return messages starting from the specified message ID |
| offset_date | [int](/type/int/) | Only return messages sent before the specified date |
| add_offset | [int](/type/int/) | Number of list elements to be skipped, negative values are also accepted. |
| limit | [int](/type/int/) | Number of results to return |
| max_id | [int](/type/int/) | If a positive value was transferred, the method will return only messages with IDs less than max_id |
| min_id | [int](/type/int/) | If a positive value was transferred, the method will return only messages with IDs more than min_id |
| hash | [long](/type/long/) | [Result hash](https://core.telegram.org/api/offsets) |

## Результат

[messages.Messages](/type/messages.Messages/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | CHANNEL_INVALID | The provided channel is invalid. |
| 406 | CHANNEL_PRIVATE | You haven't joined this channel/supergroup. |
| 400 | CHAT_ID_INVALID | The provided chat id is invalid. |
| 400 | CHAT_NOT_MODIFIED | No changes were made to chat information because the new information you passed is identical to the current information. |
| 400 | FROZEN_PARTICIPANT_MISSING | The current account is [frozen](https://core.telegram.org/api/auth/#frozen-accounts), and cannot access the specified peer. |
| 400 | MSG_ID_INVALID | Invalid message ID provided. |
| 400 | PEER_ID_INVALID | The provided peer id is invalid. |
| 400 | TAKEOUT_INVALID | The specified takeout ID is invalid. |

## Related pages

#### [Pagination in the API](https://core.telegram.org/api/offsets)

How to fetch results from large lists of objects.

#### [User Authorization](/api/auth/)

How to register a user's phone to start using the API.
