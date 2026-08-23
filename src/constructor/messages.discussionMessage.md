---
title: "messages.discussionMessage (конструктор)"
original: "https://core.telegram.org/constructor/messages.discussionMessage"
section: ref
kind: constructor
layout: layout.njk
---

# messages.discussionMessage

*Конструктор из схемы TL.*

> Information about a [message thread](https://core.telegram.org/api/threads)

## Определение TL

```
messages.discussionMessage#a6341782 flags:# messages:Vector<Message> max_id:flags.0?int read_inbox_max_id:flags.1?int read_outbox_max_id:flags.2?int unread_count:int chats:Vector<Chat> users:Vector<User> = messages.DiscussionMessage;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| messages | [Vector](https://core.telegram.org/type/Vector%20t)<[Message](/type/Message/)> | The messages from which the thread starts. The messages are returned in reverse chronological order (i.e., in order of decreasing message ID). |
| max_id | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[int](/type/int/) | Message ID of latest reply in this [thread](https://core.telegram.org/api/threads) |
| read_inbox_max_id | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[int](/type/int/) | Message ID of latest read incoming message in this [thread](https://core.telegram.org/api/threads) |
| read_outbox_max_id | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[int](/type/int/) | Message ID of latest read outgoing message in this [thread](https://core.telegram.org/api/threads) |
| unread_count | [int](/type/int/) | Number of unread messages |
| chats | [Vector](https://core.telegram.org/type/Vector%20t)<[Chat](/type/Chat/)> | Chats mentioned in constructor |
| users | [Vector](https://core.telegram.org/type/Vector%20t)<[User](/type/User/)> | Users mentioned in constructor |

## Тип

[messages.DiscussionMessage](/type/messages.DiscussionMessage/)

## Related pages

#### [Message threads](https://core.telegram.org/api/threads)

Telegram allows commenting on a channel post or on a generic supergroup message, thanks to message threads.
