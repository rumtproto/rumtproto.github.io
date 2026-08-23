---
title: "messages.reorderPinnedDialogs (метод)"
original: "https://core.telegram.org/method/messages.reorderPinnedDialogs"
section: ref
kind: method
layout: layout.njk
---

# messages.reorderPinnedDialogs

*Метод из схемы TL.*

> Reorder pinned dialogs

## Определение TL

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
messages.reorderPinnedDialogs#3b1adf37 flags:# force:flags.0?true folder_id:int order:Vector<InputDialogPeer> = Bool;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| force | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | If set, dialogs pinned server-side but not present in the order field will be unpinned. |
| folder_id | [int](/type/int/) | [Peer folder ID, for more info click here](https://core.telegram.org/api/folders#peer-folders) |
| order | [Vector](https://core.telegram.org/type/Vector%20t)<[InputDialogPeer](/type/InputDialogPeer/)> | New dialog order |

## Результат

[Bool](/type/Bool/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | PEER_ID_INVALID | The provided peer id is invalid. |

## Related pages

#### [Dialog folders](https://core.telegram.org/api/folders)

Telegram allows placing chats into folders, based on their type, mute status, or other custom criteria, thanks to folder blacklists and whitelists.
