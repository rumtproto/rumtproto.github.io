---
title: "dialogFolder (конструктор)"
original: "https://core.telegram.org/constructor/dialogFolder"
section: ref
kind: constructor
layout: layout.njk
---

# dialogFolder

*Конструктор из схемы TL.*

> Dialog in folder

## Определение TL

```
dialogFolder#71bd134c flags:# pinned:flags.2?true folder:Folder peer:Peer top_message:int unread_muted_peers_count:int unread_unmuted_peers_count:int unread_muted_messages_count:int unread_unmuted_messages_count:int = Dialog;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| pinned | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[true](/constructor/true/) | Is this folder pinned |
| folder | [Folder](/type/Folder/) | The folder |
| peer | [Peer](/type/Peer/) | Peer in folder |
| top_message | [int](/type/int/) | Latest message ID of dialog |
| unread_muted_peers_count | [int](/type/int/) | Number of unread muted peers in folder |
| unread_unmuted_peers_count | [int](/type/int/) | Number of unread unmuted peers in folder |
| unread_muted_messages_count | [int](/type/int/) | Number of unread messages from muted peers in folder |
| unread_unmuted_messages_count | [int](/type/int/) | Number of unread messages from unmuted peers in folder |

## Тип

[Dialog](/type/Dialog/)
