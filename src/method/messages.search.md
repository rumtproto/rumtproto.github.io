---
title: "messages.search (метод)"
original: "https://core.telegram.org/method/messages.search"
section: ref
kind: method
layout: layout.njk
---

# messages.search

*Метод из схемы TL.*

> Search for messages.

## Определение TL

```
messages.messages#1d73e7ea messages:Vector<Message> topics:Vector<ForumTopic> chats:Vector<Chat> users:Vector<User> = messages.Messages;
messages.messagesSlice#5f206716 flags:# inexact:flags.1?true count:int next_rate:flags.0?int offset_id_offset:flags.2?int search_flood:flags.3?SearchPostsFlood messages:Vector<Message> topics:Vector<ForumTopic> chats:Vector<Chat> users:Vector<User> = messages.Messages;
messages.channelMessages#c776ba4e flags:# inexact:flags.1?true pts:int count:int offset_id_offset:flags.2?int messages:Vector<Message> topics:Vector<ForumTopic> chats:Vector<Chat> users:Vector<User> = messages.Messages;
messages.messagesNotModified#74535f21 count:int = messages.Messages;
---functions---
messages.search#29ee847a flags:# peer:InputPeer q:string from_id:flags.0?InputPeer saved_peer_id:flags.2?InputPeer saved_reaction:flags.3?Vector<Reaction> top_msg_id:flags.1?int filter:MessagesFilter min_date:int max_date:int offset_id:int add_offset:int limit:int max_id:int min_id:int hash:long = messages.Messages;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| peer | [InputPeer](/type/InputPeer/) | User or chat, histories with which are searched, or [(inputPeerEmpty)](/constructor/inputPeerEmpty/) constructor to search in all private chats and [normal groups (not channels) »](https://core.telegram.org/api/channel). Use [messages.searchGlobal](/method/messages.searchGlobal/) to search globally in all chats, groups, supergroups and channels. |
| q | [string](/type/string/) | Text search request |
| from_id | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[InputPeer](/type/InputPeer/) | Only return messages sent by the specified user ID |
| saved_peer_id | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[InputPeer](/type/InputPeer/) | Search within the [saved message dialog »](https://core.telegram.org/api/saved-messages) with this ID. |
| saved_reaction | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).3?[Vector](https://core.telegram.org/type/Vector%20t)<[Reaction](/type/Reaction/)> | You may search for [saved messages tagged »](https://core.telegram.org/api/saved-messages#tags) with one or more reactions using this flag. |
| top_msg_id | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[int](/type/int/) | [Thread ID](https://core.telegram.org/api/threads) |
| filter | [MessagesFilter](/type/MessagesFilter/) | Filter to return only specified message types |
| min_date | [int](/type/int/) | If a positive value was transferred, only messages with a sending date bigger than the transferred one will be returned |
| max_date | [int](/type/int/) | If a positive value was transferred, only messages with a sending date smaller than the transferred one will be returned |
| offset_id | [int](/type/int/) | Only return messages starting from the specified message ID |
| add_offset | [int](/type/int/) | [Additional offset](https://core.telegram.org/api/offsets) |
| limit | [int](/type/int/) | [Number of results to return](https://core.telegram.org/api/offsets), can be 0 to only return the message counter. |
| max_id | [int](/type/int/) | [Maximum message ID to return](https://core.telegram.org/api/offsets) |
| min_id | [int](/type/int/) | [Minimum message ID to return](https://core.telegram.org/api/offsets) |
| hash | [long](/type/long/) | [Hash](https://core.telegram.org/api/offsets) |

## Результат

[messages.Messages](/type/messages.Messages/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | CHANNEL_INVALID | The provided channel is invalid. |
| 400 | CHANNEL_PRIVATE | You haven't joined this channel/supergroup. |
| 403 | CHAT_ADMIN_REQUIRED | You must be an admin in this chat to do this. |
| 400 | CHAT_ID_INVALID | The provided chat id is invalid. |
| 400 | FROM_PEER_INVALID | The specified from_id is invalid. |
| 400 | INPUT_FILTER_INVALID | The specified filter is invalid. |
| 400 | INPUT_USER_DEACTIVATED | The specified user was deleted. |
| 400 | MSG_ID_INVALID | Invalid message ID provided. |
| 400 | PEER_ID_INVALID | The provided peer id is invalid. |
| 400 | PEER_ID_NOT_SUPPORTED | The provided peer ID is not supported. |
| 400 | SEARCH_QUERY_EMPTY | The search query is empty. |
| 400 | TAKEOUT_INVALID | The specified takeout ID is invalid. |
| 400 | USER_ID_INVALID | The provided user ID is invalid. |

## Related pages

#### [inputPeerEmpty](/constructor/inputPeerEmpty/)

An empty constructor, no user or chat is defined.

#### [Channels, supergroups, gigagroups and basic groups](https://core.telegram.org/api/channel)

How to handle channels, supergroups, gigagroups, basic groups, and what's the difference between them.

#### [messages.searchGlobal](/method/messages.searchGlobal/)

Search for messages and peers globally

#### [Saved messages](https://core.telegram.org/api/saved-messages)

The Saved Messages chat allows users to bookmark messages and media: it's a personal cloud storage for any messages or media you may want to send or forward there.

#### [Message threads](https://core.telegram.org/api/threads)

Telegram allows commenting on a channel post or on a generic supergroup message, thanks to message threads.

#### [Pagination in the API](https://core.telegram.org/api/offsets)

How to fetch results from large lists of objects.
