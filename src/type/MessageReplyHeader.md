---
title: "MessageReplyHeader (тип)"
original: "https://core.telegram.org/type/MessageReplyHeader"
section: ref
kind: type
layout: layout.njk
---

# MessageReplyHeader

*Тип из схемы TL.*

> Reply information

## Определение TL

```
messageReplyHeader#6917560b flags:# reply_to_scheduled:flags.2?true forum_topic:flags.3?true quote:flags.9?true reply_to_msg_id:flags.4?int reply_to_peer_id:flags.0?Peer reply_from:flags.5?MessageFwdHeader reply_media:flags.8?MessageMedia reply_to_top_id:flags.1?int quote_text:flags.6?string quote_entities:flags.7?Vector<MessageEntity> quote_offset:flags.10?int todo_item_id:flags.11?int = MessageReplyHeader;
messageReplyStoryHeader#e5af939 peer:Peer story_id:int = MessageReplyHeader;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [messageReplyHeader](/constructor/messageReplyHeader/) | Message replies and [thread](https://core.telegram.org/api/threads) information |
| [messageReplyStoryHeader](/constructor/messageReplyStoryHeader/) | Represents a reply to a [story](https://core.telegram.org/api/stories) |
