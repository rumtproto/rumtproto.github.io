---
title: "messages.messagesSlice (конструктор)"
original: "https://core.telegram.org/constructor/messages.messagesSlice"
section: ref
kind: constructor
layout: layout.njk
---

# messages.messagesSlice

*Конструктор из схемы TL.*

> Incomplete list of messages and auxiliary data.

## Определение TL

```
messages.messagesSlice#5f206716 flags:# inexact:flags.1?true count:int next_rate:flags.0?int offset_id_offset:flags.2?int search_flood:flags.3?SearchPostsFlood messages:Vector<Message> topics:Vector<ForumTopic> chats:Vector<Chat> users:Vector<User> = messages.Messages;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| inexact | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[true](/constructor/true/) | If set, indicates that the results may be inexact |
| count | [int](/type/int/) | Total number of messages in the list |
| next_rate | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[int](/type/int/) | Rate to use in the offset_rate parameter in the next call to [messages.searchGlobal](/method/messages.searchGlobal/) |
| offset_id_offset | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[int](/type/int/) | Indicates the absolute position of messages[0] within the total result set with count count. This is useful, for example, if the result was fetched using offset_id, and we need to display a progress/total counter (like photo 134 of 200, for all media in a chat, we could simply use photo ${offset_id_offset} of ${count}). |
| search_flood | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).3?[SearchPostsFlood](/type/SearchPostsFlood/) | [For global post searches »](https://core.telegram.org/api/search#posts-tab), the remaining amount of free searches, here query_is_free is related to the current call only, not to the next paginated call, and all subsequent pagination calls will always be free. |
| messages | [Vector](https://core.telegram.org/type/Vector%20t)<[Message](/type/Message/)> | List of messages |
| topics | [Vector](https://core.telegram.org/type/Vector%20t)<[ForumTopic](/type/ForumTopic/)> | [Forum topics](https://core.telegram.org/api/forum#forum-topics) the returned messages belong to. |
| chats | [Vector](https://core.telegram.org/type/Vector%20t)<[Chat](/type/Chat/)> | List of chats mentioned in messages |
| users | [Vector](https://core.telegram.org/type/Vector%20t)<[User](/type/User/)> | List of users mentioned in messages and chats |

## Тип

[messages.Messages](/type/messages.Messages/)

## Related pages

#### [messages.searchGlobal](/method/messages.searchGlobal/)

Search for messages and peers globally

#### [Search and filters](https://core.telegram.org/api/search)

Telegram allows applying detailed message filters while looking for messages in chats.

#### [Forum topics](https://core.telegram.org/api/forum)

Telegram allows creating forums with multiple distinct topics.
