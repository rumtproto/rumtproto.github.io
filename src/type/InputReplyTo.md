---
title: "InputReplyTo"
original: "https://core.telegram.org/type/InputReplyTo"
section: ref
kind: type
description: "Содержит информацию о сообщении или истории, на которые даётся ответ."
layout: layout.njk
---

# InputReplyTo

Содержит информацию о сообщении или истории, на которые даётся ответ.

```
inputReplyToMessage#869fbe10 flags:# reply_to_msg_id:int top_msg_id:flags.0?int reply_to_peer_id:flags.1?InputPeer quote_text:flags.2?string quote_entities:flags.3?Vector<MessageEntity> quote_offset:flags.4?int monoforum_peer_id:flags.5?InputPeer todo_item_id:flags.6?int = InputReplyTo;
inputReplyToStory#5881323a peer:InputPeer story_id:int = InputReplyTo;
inputReplyToMonoForum#69d66c45 monoforum_peer_id:InputPeer = InputReplyTo;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/inputReplyToMessage">inputReplyToMessage</a></td><td>Ответить на сообщение.</td></tr><tr><td><a href="/constructor/inputReplyToStory">inputReplyToStory</a></td><td>Ответить на историю.</td></tr><tr><td><a href="/constructor/inputReplyToMonoForum">inputReplyToMonoForum</a></td><td>Используется для отправки сообщений в <a href="/api/monoforum">тему монофорума</a>.</td></tr></tbody></table>
