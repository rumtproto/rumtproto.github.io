---
title: "Dialog"
original: "https://core.telegram.org/type/Dialog"
section: ref
kind: type
description: "Информация о чате."
layout: layout.njk
---

# Dialog

Информация о чате.

```
dialog#d58a08c6 flags:# pinned:flags.2?true unread_mark:flags.3?true view_forum_as_messages:flags.6?true peer:Peer top_message:int read_inbox_max_id:int read_outbox_max_id:int unread_count:int unread_mentions_count:int unread_reactions_count:int notify_settings:PeerNotifySettings pts:flags.0?int draft:flags.1?DraftMessage folder_id:flags.4?int ttl_period:flags.5?int = Dialog;
dialogFolder#71bd134c flags:# pinned:flags.2?true folder:Folder peer:Peer top_message:int unread_muted_peers_count:int unread_unmuted_peers_count:int unread_muted_messages_count:int unread_unmuted_messages_count:int = Dialog;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/dialog">dialog</a></td><td>Чат</td></tr><tr><td><a href="/constructor/dialogFolder">dialogFolder</a></td><td>Диалог в папке</td></tr></tbody></table>
