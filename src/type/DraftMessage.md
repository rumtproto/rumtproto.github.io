---
title: "DraftMessage"
original: "https://core.telegram.org/type/DraftMessage"
section: ref
kind: type
description: "Представляет черновик сообщения."
layout: layout.njk
---

# DraftMessage

Представляет [черновик](/api/drafts/) сообщения.

```
draftMessageEmpty#1b0c841a flags:# date:flags.0?int = DraftMessage;
draftMessage#96eaa5eb flags:# no_webpage:flags.1?true invert_media:flags.6?true reply_to:flags.4?InputReplyTo message:string entities:flags.3?Vector<MessageEntity> media:flags.5?InputMedia date:int effect:flags.7?long suggested_post:flags.8?SuggestedPost = DraftMessage;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/draftMessageEmpty">draftMessageEmpty</a></td><td>Пустой черновик</td></tr><tr><td><a href="/constructor/draftMessage">draftMessage</a></td><td>Представляет <a href="/api/drafts">черновик</a> сообщения.</td></tr></tbody></table>

### Связанные страницы

#### [Черновики сообщений](/api/drafts/)

Как работать с черновиками сообщений
