---
title: "messages.getSavedHistory (метод)"
original: "https://core.telegram.org/method/messages.getSavedHistory"
section: ref
kind: method
layout: layout.njk
---

# messages.getSavedHistory

*Метод из схемы TL.*

> Fetch [saved messages »](https://core.telegram.org/api/saved-messages) forwarded from a specific peer, or fetch messages from a [monoforum topic »](https://core.telegram.org/api/monoforum).

## Определение TL

```
messages.messages#1d73e7ea messages:Vector<Message> topics:Vector<ForumTopic> chats:Vector<Chat> users:Vector<User> = messages.Messages;
messages.messagesSlice#5f206716 flags:# inexact:flags.1?true count:int next_rate:flags.0?int offset_id_offset:flags.2?int search_flood:flags.3?SearchPostsFlood messages:Vector<Message> topics:Vector<ForumTopic> chats:Vector<Chat> users:Vector<User> = messages.Messages;
messages.channelMessages#c776ba4e flags:# inexact:flags.1?true pts:int count:int offset_id_offset:flags.2?int messages:Vector<Message> topics:Vector<ForumTopic> chats:Vector<Chat> users:Vector<User> = messages.Messages;
messages.messagesNotModified#74535f21 count:int = messages.Messages;
---functions---
messages.getSavedHistory#998ab009 flags:# parent_peer:flags.0?InputPeer peer:InputPeer offset_id:int offset_date:int add_offset:int limit:int max_id:int min_id:int hash:long = messages.Messages;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| parent_peer | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[InputPeer](/type/InputPeer/) | If set, fetches messages from the specified monoforum, otherwise fetches from saved messages. |
| peer | [InputPeer](/type/InputPeer/) | Target peer (or topic) |
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
| 400 | CHAT_ADMIN_REQUIRED | You must be an admin in this chat to do this. |
| 400 | PARENT_PEER_INVALID | The specified parent_peer is invalid. |
| 400 | PEER_ID_INVALID | The provided peer id is invalid. |

## Related pages

#### [Pagination in the API](https://core.telegram.org/api/offsets)

How to fetch results from large lists of objects.

#### [Saved messages](https://core.telegram.org/api/saved-messages)

The Saved Messages chat allows users to bookmark messages and media: it's a personal cloud storage for any messages or media you may want to send or forward there.

#### [Direct messages to channels](https://core.telegram.org/api/monoforum)

Telegram supports direct messages to channels, which can also be used to suggest (even paid) channel posts.
