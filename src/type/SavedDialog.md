---
title: "SavedDialog"
original: "https://core.telegram.org/type/SavedDialog"
section: ref
kind: type
description: "Представляет диалог из сохранённых сообщений »."
layout: layout.njk
---

# SavedDialog

Представляет [диалог из сохранённых сообщений »](/api/saved-messages/).

```
savedDialog#bd87cb6c flags:# pinned:flags.2?true peer:Peer top_message:int = SavedDialog;
monoForumDialog#64407ea7 flags:# unread_mark:flags.3?true nopaid_messages_exception:flags.4?true peer:Peer top_message:int read_inbox_max_id:int read_outbox_max_id:int unread_count:int unread_reactions_count:int draft:flags.1?DraftMessage = SavedDialog;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/savedDialog">savedDialog</a></td><td>Представляет <a href="/api/saved-messages">сохранённый диалог »</a>.</td></tr><tr><td><a href="/constructor/monoForumDialog">monoForumDialog</a></td><td>Представляет <a href="/api/monoforum">тему монофорума »</a>.</td></tr></tbody></table>

### Связанные страницы

#### [Избранные сообщения](/api/saved-messages/)

Чат «Избранное» позволяет сохранять сообщения и медиа: это личное облачное хранилище для любых сообщений и медиа, которые вы захотите туда отправить или переслать.
