---
title: "messages.getDialogs (метод)"
original: "https://core.telegram.org/method/messages.getDialogs"
section: ref
kind: method
layout: layout.njk
---

# messages.getDialogs

*Метод из схемы TL.*

> Returns the current user dialog list.

## Определение TL

```
messages.dialogs#15ba6c40 dialogs:Vector<Dialog> messages:Vector<Message> chats:Vector<Chat> users:Vector<User> = messages.Dialogs;
messages.dialogsSlice#71e094f3 count:int dialogs:Vector<Dialog> messages:Vector<Message> chats:Vector<Chat> users:Vector<User> = messages.Dialogs;
messages.dialogsNotModified#f0e3e596 count:int = messages.Dialogs;
---functions---
messages.getDialogs#a0f4cb4f flags:# exclude_pinned:flags.0?true folder_id:flags.1?int offset_date:int offset_id:int offset_peer:InputPeer limit:int hash:long = messages.Dialogs;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| exclude_pinned | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | Exclude pinned dialogs |
| folder_id | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[int](/type/int/) | [Peer folder ID, for more info click here](https://core.telegram.org/api/folders#peer-folders) |
| offset_date | [int](/type/int/) | [Offsets for pagination, for more info click here](https://core.telegram.org/api/offsets) |
| offset_id | [int](/type/int/) | [Offsets for pagination, for more info click here](https://core.telegram.org/api/offsets) (top_message ID used for pagination) |
| offset_peer | [InputPeer](/type/InputPeer/) | [Offset peer for pagination](https://core.telegram.org/api/offsets) |
| limit | [int](/type/int/) | Number of list elements to be returned |
| hash | [long](/type/long/) | [Hash used for caching, for more info click here](https://core.telegram.org/api/offsets#hash-generation) |

## Результат

[messages.Dialogs](/type/messages.Dialogs/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | CHAT_NOT_MODIFIED | No changes were made to chat information because the new information you passed is identical to the current information. |
| 403 | CHAT_WRITE_FORBIDDEN | You can't write in this chat. |
| 400 | FOLDER_ID_INVALID | Invalid folder ID. |
| 400 | OFFSET_PEER_ID_INVALID | The provided offset peer is invalid. |
| 400 | PINNED_DIALOGS_TOO_MUCH | Too many pinned dialogs. |
| 400 | TAKEOUT_INVALID | The specified takeout ID is invalid. |

## Related pages

#### [Dialog folders](https://core.telegram.org/api/folders)

Telegram allows placing chats into folders, based on their type, mute status, or other custom criteria, thanks to folder blacklists and whitelists.

#### [Pagination in the API](https://core.telegram.org/api/offsets)

How to fetch results from large lists of objects.
