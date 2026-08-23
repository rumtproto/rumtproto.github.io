---
title: "messageReplies (конструктор)"
original: "https://core.telegram.org/constructor/messageReplies"
section: ref
kind: constructor
layout: layout.njk
---

# messageReplies

*Конструктор из схемы TL.*

> Info about [the comment section of a channel post, a simple message thread, a forum topic, or a direct messages topic](https://core.telegram.org/api/threads) (all features ultimately based on message threads).

## Определение TL

```
messageReplies#83d60fc2 flags:# comments:flags.0?true replies:int replies_pts:int recent_repliers:flags.1?Vector<Peer> channel_id:flags.0?long max_id:flags.2?int read_max_id:flags.3?int = MessageReplies;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| comments | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | Whether this constructor contains information about the [comment section of a channel post, or a simple message thread](https://core.telegram.org/api/threads) |
| replies | [int](/type/int/) | Contains the total number of replies in this thread or comment section. |
| replies_pts | [int](/type/int/) | [PTS](/api/updates/) of the message that started this thread. |
| recent_repliers | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[Vector](https://core.telegram.org/type/Vector%20t)<[Peer](/type/Peer/)> | For channel post comments, contains information about the last few comment posters for a specific thread, to show a small list of commenter profile pictures in client previews. |
| channel_id | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[long](/type/long/) | For channel post comments, contains the ID of the associated [discussion supergroup](https://core.telegram.org/api/discussion) |
| max_id | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[int](/type/int/) | ID of the latest message in this thread or comment section. |
| read_max_id | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).3?[int](/type/int/) | Contains the ID of the latest read message in this thread or comment section. |

## Тип

[MessageReplies](/type/MessageReplies/)

## Related pages

#### [Message threads](https://core.telegram.org/api/threads)

Telegram allows commenting on a channel post or on a generic supergroup message, thanks to message threads.

#### [Working with Updates](/api/updates/)

How to subscribe to updates and handle them properly.

#### [Discussion groups](https://core.telegram.org/api/discussion)

Groups can be associated to a channel as a discussion group, to allow users to discuss about posts.
