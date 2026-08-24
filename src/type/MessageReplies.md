---
title: "MessageReplies"
original: "https://core.telegram.org/type/MessageReplies"
section: ref
kind: type
description: "Информация о комментариях к публикациям (для каналов) или ответах на сообщения (для групп)"
layout: layout.njk
---

# MessageReplies

Информация о [комментариях к публикациям (для каналов) или ответах на сообщения (для групп)](/api/threads/)

```
messageReplies#83d60fc2 flags:# comments:flags.0?true replies:int replies_pts:int recent_repliers:flags.1?Vector<Peer> channel_id:flags.0?long max_id:flags.2?int read_max_id:flags.3?int = MessageReplies;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/messageReplies">messageReplies</a></td><td>Информация о <a href="/api/threads">разделе комментариев к публикации канала, простой ветке сообщений, теме форума или теме в личных сообщениях</a> (все эти возможности в конечном счёте основаны на ветках сообщений).</td></tr></tbody></table>

### Связанные страницы

#### [Треды сообщений](/api/threads/)

Благодаря веткам обсуждения Telegram позволяет комментировать пост канала или обычное сообщение супергруппы.
