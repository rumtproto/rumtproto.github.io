---
title: "channels.searchPosts (метод)"
original: "https://core.telegram.org/method/channels.searchPosts"
section: ref
kind: method
layout: layout.njk
---

# channels.searchPosts

*Метод из схемы TL.*

> Globally search for posts from public [channels »](https://core.telegram.org/api/channel) (_including_ those we aren't a member of) containing either a specific hashtag, _or_ a full text query.
> Exactly one of `query` and `hashtag` must be set.

## Определение TL

```
messages.messages#1d73e7ea messages:Vector<Message> topics:Vector<ForumTopic> chats:Vector<Chat> users:Vector<User> = messages.Messages;
messages.messagesSlice#5f206716 flags:# inexact:flags.1?true count:int next_rate:flags.0?int offset_id_offset:flags.2?int search_flood:flags.3?SearchPostsFlood messages:Vector<Message> topics:Vector<ForumTopic> chats:Vector<Chat> users:Vector<User> = messages.Messages;
messages.channelMessages#c776ba4e flags:# inexact:flags.1?true pts:int count:int offset_id_offset:flags.2?int messages:Vector<Message> topics:Vector<ForumTopic> chats:Vector<Chat> users:Vector<User> = messages.Messages;
messages.messagesNotModified#74535f21 count:int = messages.Messages;
---functions---
channels.searchPosts#f2c4f24d flags:# hashtag:flags.0?string query:flags.1?string offset_rate:int offset_peer:InputPeer offset_id:int limit:int allow_paid_stars:flags.2?long = messages.Messages;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| hashtag | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[string](/type/string/) | The hashtag to search, without the # character. |
| query | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[string](/type/string/) | The full text query: each user has a limited amount of free full text search slots, after which payment is required, see [here »](https://core.telegram.org/api/search#posts-tab) for more info on the full flow. |
| offset_rate | [int](/type/int/) | Initially 0, then set to the [next_rate parameter of messages.messagesSlice](/constructor/messages.messagesSlice/), or if that is absent, the date of the last returned message. |
| offset_peer | [InputPeer](/type/InputPeer/) | [Offsets for pagination, for more info click here](https://core.telegram.org/api/offsets) |
| offset_id | [int](/type/int/) | [Offsets for pagination, for more info click here](https://core.telegram.org/api/offsets) |
| limit | [int](/type/int/) | Maximum number of results to return, [see pagination](https://core.telegram.org/api/offsets) |
| allow_paid_stars | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[long](/type/long/) | For full text post searches (query), allows payment of the specified amount of Stars for the search, see [here »](https://core.telegram.org/api/search#posts-tab) for more info on the full flow. |

## Результат

[messages.Messages](/type/messages.Messages/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 420 | FROZEN_METHOD_INVALID | The current account is [frozen](https://core.telegram.org/api/auth/#frozen-accounts), and thus cannot execute the specified action. |
| 400 | OFFSET_PEER_ID_INVALID | The provided offset peer is invalid. |
| 403 | PREMIUM_ACCOUNT_REQUIRED | A premium account is required to execute this action. |

## Related pages

#### [Search and filters](https://core.telegram.org/api/search)

Telegram allows applying detailed message filters while looking for messages in chats.

#### [messages.messagesSlice](/constructor/messages.messagesSlice/)

Incomplete list of messages and auxiliary data.

#### [Pagination in the API](https://core.telegram.org/api/offsets)

How to fetch results from large lists of objects.

#### [Channels, supergroups, gigagroups and basic groups](https://core.telegram.org/api/channel)

How to handle channels, supergroups, gigagroups, basic groups, and what's the difference between them.

#### [User Authorization](/api/auth/)

How to register a user's phone to start using the API.
