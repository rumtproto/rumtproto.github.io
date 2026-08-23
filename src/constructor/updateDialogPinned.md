---
title: "updateDialogPinned (конструктор)"
original: "https://core.telegram.org/constructor/updateDialogPinned"
section: ref
kind: constructor
layout: layout.njk
---

# updateDialogPinned

*Конструктор из схемы TL.*

> A dialog was pinned/unpinned

## Определение TL

```
updateDialogPinned#6e6fe51c flags:# pinned:flags.0?true folder_id:flags.1?int peer:DialogPeer = Update;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| pinned | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | Whether the dialog was pinned |
| folder_id | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[int](/type/int/) | [Peer folder ID, for more info click here](https://core.telegram.org/api/folders#peer-folders) |
| peer | [DialogPeer](/type/DialogPeer/) | The dialog |

## Тип

[Update](/type/Update/)

## Related pages

#### [Dialog folders](https://core.telegram.org/api/folders)

Telegram allows placing chats into folders, based on their type, mute status, or other custom criteria, thanks to folder blacklists and whitelists.
