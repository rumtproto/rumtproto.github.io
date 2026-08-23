---
title: "SavedDialog (тип)"
original: "https://core.telegram.org/type/SavedDialog"
section: ref
kind: type
layout: layout.njk
---

# SavedDialog

*Тип из схемы TL.*

> Represents a [saved message dialog »](https://core.telegram.org/api/saved-messages).

## Определение TL

```
savedDialog#bd87cb6c flags:# pinned:flags.2?true peer:Peer top_message:int = SavedDialog;
monoForumDialog#64407ea7 flags:# unread_mark:flags.3?true nopaid_messages_exception:flags.4?true peer:Peer top_message:int read_inbox_max_id:int read_outbox_max_id:int unread_count:int unread_reactions_count:int draft:flags.1?DraftMessage = SavedDialog;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [savedDialog](/constructor/savedDialog/) | Represents a [saved dialog »](https://core.telegram.org/api/saved-messages). |
| [monoForumDialog](/constructor/monoForumDialog/) | Represents a [monoforum topic »](https://core.telegram.org/api/monoforum). |

## Related pages

#### [Saved messages](https://core.telegram.org/api/saved-messages)

The Saved Messages chat allows users to bookmark messages and media: it's a personal cloud storage for any messages or media you may want to send or forward there.
