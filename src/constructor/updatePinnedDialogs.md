---
title: "updatePinnedDialogs (конструктор)"
original: "https://core.telegram.org/constructor/updatePinnedDialogs"
section: ref
kind: constructor
layout: layout.njk
---

# updatePinnedDialogs

*Конструктор из схемы TL.*

> Pinned dialogs were updated

## Определение TL

```
updatePinnedDialogs#fa0f3ca2 flags:# folder_id:flags.1?int order:flags.0?Vector<DialogPeer> = Update;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| folder_id | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[int](/type/int/) | [Peer folder ID, for more info click here](https://core.telegram.org/api/folders#peer-folders) |
| order | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[Vector](https://core.telegram.org/type/Vector%20t)<[DialogPeer](/type/DialogPeer/)> | New order of pinned dialogs |

## Тип

[Update](/type/Update/)

## Related pages

#### [Dialog folders](https://core.telegram.org/api/folders)

Telegram allows placing chats into folders, based on their type, mute status, or other custom criteria, thanks to folder blacklists and whitelists.
