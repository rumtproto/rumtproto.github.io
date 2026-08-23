---
title: "messages.searchGlobal (метод)"
original: "https://core.telegram.org/method/messages.searchGlobal"
section: ref
kind: method
layout: layout.njk
---

# messages.searchGlobal

*Метод из схемы TL.*

> Search for messages and peers globally

## Определение TL

```
messages.messages#1d73e7ea messages:Vector<Message> topics:Vector<ForumTopic> chats:Vector<Chat> users:Vector<User> = messages.Messages;
messages.messagesSlice#5f206716 flags:# inexact:flags.1?true count:int next_rate:flags.0?int offset_id_offset:flags.2?int search_flood:flags.3?SearchPostsFlood messages:Vector<Message> topics:Vector<ForumTopic> chats:Vector<Chat> users:Vector<User> = messages.Messages;
messages.channelMessages#c776ba4e flags:# inexact:flags.1?true pts:int count:int offset_id_offset:flags.2?int messages:Vector<Message> topics:Vector<ForumTopic> chats:Vector<Chat> users:Vector<User> = messages.Messages;
messages.messagesNotModified#74535f21 count:int = messages.Messages;
---functions---
messages.searchGlobal#4bc6589a flags:# broadcasts_only:flags.1?true groups_only:flags.2?true users_only:flags.3?true folder_id:flags.0?int q:string filter:MessagesFilter min_date:int max_date:int offset_rate:int offset_peer:InputPeer offset_id:int limit:int = messages.Messages;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| broadcasts_only | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[true](/constructor/true/) | If set, only returns results from channels (used in the [global channel search tab »](https://core.telegram.org/api/search#global-search)). |
| groups_only | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[true](/constructor/true/) | Whether to search only in groups |
| users_only | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).3?[true](/constructor/true/) | Whether to search only in private chats |
| folder_id | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[int](/type/int/) | [Peer folder ID, for more info click here](https://core.telegram.org/api/folders#peer-folders) |
| q | [string](/type/string/) | Query |
| filter | [MessagesFilter](/type/MessagesFilter/) | Global search filter |
| min_date | [int](/type/int/) | If a positive value was specified, the method will return only messages with date bigger than min_date |
| max_date | [int](/type/int/) | If a positive value was transferred, the method will return only messages with date smaller than max_date |
| offset_rate | [int](/type/int/) | Initially 0, then set to the [next_rate parameter of messages.messagesSlice](/constructor/messages.messagesSlice/), or if that is absent, the date of the last returned message. |
| offset_peer | [InputPeer](/type/InputPeer/) | [Offsets for pagination, for more info click here](https://core.telegram.org/api/offsets) |
| offset_id | [int](/type/int/) | [Offsets for pagination, for more info click here](https://core.telegram.org/api/offsets) |
| limit | [int](/type/int/) | [Offsets for pagination, for more info click here](https://core.telegram.org/api/offsets) |

## Результат

[messages.Messages](/type/messages.Messages/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | FOLDER_ID_INVALID | Invalid folder ID. |
| 400 | INPUT_FILTER_INVALID | The specified filter is invalid. |
| 400 | SEARCH_QUERY_EMPTY | The search query is empty. |

## Related pages

#### [Search and filters](https://core.telegram.org/api/search)

Telegram allows applying detailed message filters while looking for messages in chats.

#### [Dialog folders](https://core.telegram.org/api/folders)

Telegram allows placing chats into folders, based on their type, mute status, or other custom criteria, thanks to folder blacklists and whitelists.

#### [messages.messagesSlice](/constructor/messages.messagesSlice/)

Incomplete list of messages and auxiliary data.

#### [Pagination in the API](https://core.telegram.org/api/offsets)

How to fetch results from large lists of objects.
