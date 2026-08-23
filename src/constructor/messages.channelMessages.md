---
title: "messages.channelMessages (конструктор)"
original: "https://core.telegram.org/constructor/messages.channelMessages"
section: ref
kind: constructor
layout: layout.njk
---

# messages.channelMessages

*Конструктор из схемы TL.*

> Channel messages

## Определение TL

```
messages.channelMessages#c776ba4e flags:# inexact:flags.1?true pts:int count:int offset_id_offset:flags.2?int messages:Vector<Message> topics:Vector<ForumTopic> chats:Vector<Chat> users:Vector<User> = messages.Messages;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| inexact | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[true](/constructor/true/) | If set, returned results may be inexact |
| pts | [int](/type/int/) | [Event count after generation](/api/updates/) |
| count | [int](/type/int/) | Total number of results were found server-side (may not be all included here) |
| offset_id_offset | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[int](/type/int/) | Indicates the absolute position of messages[0] within the total result set with count count. This is useful, for example, if the result was fetched using offset_id, and we need to display a progress/total counter (like photo 134 of 200, for all media in a chat, we could simply use photo ${offset_id_offset} of ${count}. |
| messages | [Vector](https://core.telegram.org/type/Vector%20t)<[Message](/type/Message/)> | Found messages |
| topics | [Vector](https://core.telegram.org/type/Vector%20t)<[ForumTopic](/type/ForumTopic/)> | [Forum topic](https://core.telegram.org/api/forum#forum-topics) information |
| chats | [Vector](https://core.telegram.org/type/Vector%20t)<[Chat](/type/Chat/)> | Chats |
| users | [Vector](https://core.telegram.org/type/Vector%20t)<[User](/type/User/)> | Users |

## Тип

[messages.Messages](/type/messages.Messages/)

## Related pages

#### [Working with Updates](/api/updates/)

How to subscribe to updates and handle them properly.

#### [Forum topics](https://core.telegram.org/api/forum)

Telegram allows creating forums with multiple distinct topics.
