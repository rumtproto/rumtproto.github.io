---
title: "MessageReplyHeader"
original: "https://core.telegram.org/type/MessageReplyHeader"
section: ref
kind: type
description: "Сведения об ответе"
layout: layout.njk
---

# MessageReplyHeader

Сведения об ответе

```
messageReplyHeader#6917560b flags:# reply_to_scheduled:flags.2?true forum_topic:flags.3?true quote:flags.9?true reply_to_msg_id:flags.4?int reply_to_peer_id:flags.0?Peer reply_from:flags.5?MessageFwdHeader reply_media:flags.8?MessageMedia reply_to_top_id:flags.1?int quote_text:flags.6?string quote_entities:flags.7?Vector<MessageEntity> quote_offset:flags.10?int todo_item_id:flags.11?int = MessageReplyHeader;
messageReplyStoryHeader#e5af939 peer:Peer story_id:int = MessageReplyHeader;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/messageReplyHeader">messageReplyHeader</a></td><td>Сведения об ответах на сообщение и о <a href="/api/threads">ветке обсуждения</a></td></tr><tr><td><a href="/constructor/messageReplyStoryHeader">messageReplyStoryHeader</a></td><td>Представляет ответ на <a href="/api/stories">историю</a></td></tr></tbody></table>
