---
title: "MessageReplies (тип)"
original: "https://core.telegram.org/type/MessageReplies"
section: ref
kind: type
layout: layout.njk
---

# MessageReplies

*Тип из схемы TL.*

> Info about [post comments (for channels) or message replies (for groups)](https://core.telegram.org/api/threads)

## Определение TL

```
messageReplies#83d60fc2 flags:# comments:flags.0?true replies:int replies_pts:int recent_repliers:flags.1?Vector<Peer> channel_id:flags.0?long max_id:flags.2?int read_max_id:flags.3?int = MessageReplies;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [messageReplies](/constructor/messageReplies/) | Info about [the comment section of a channel post, a simple message thread, a forum topic, or a direct messages topic](https://core.telegram.org/api/threads) (all features ultimately based on message threads). |

## Related pages

#### [Message threads](https://core.telegram.org/api/threads)

Telegram allows commenting on a channel post or on a generic supergroup message, thanks to message threads.
