---
title: "messages.updateDialogFilter (метод)"
original: "https://core.telegram.org/method/messages.updateDialogFilter"
section: ref
kind: method
layout: layout.njk
---

# messages.updateDialogFilter

*Метод из схемы TL.*

> Update [folder](https://core.telegram.org/api/folders)

## Определение TL

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
messages.updateDialogFilter#1ad4a04a flags:# id:int filter:flags.0?DialogFilter = Bool;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| id | [int](/type/int/) | [Folder](https://core.telegram.org/api/folders) ID |
| filter | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[DialogFilter](/type/DialogFilter/) | [Folder](https://core.telegram.org/api/folders) info |

## Результат

[Bool](/type/Bool/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | CHATLIST_EXCLUDE_INVALID | The specified exclude_peers are invalid. |
| 400 | CHAT_ID_INVALID | The provided chat id is invalid. |
| 400 | FILTER_ID_INVALID | The specified filter ID is invalid. |
| 400 | FILTER_INCLUDE_EMPTY | The include_peers vector of the filter is empty. |
| 400 | FILTER_TITLE_EMPTY | The title field of the filter is empty. |
| 400 | MESSAGE_TOO_LONG | The provided message is too long. |
| 400 | MSG_ID_INVALID | Invalid message ID provided. |
| 400 | PEER_ID_INVALID | The provided peer id is invalid. |

## Related pages

#### [Dialog folders](https://core.telegram.org/api/folders)

Telegram allows placing chats into folders, based on their type, mute status, or other custom criteria, thanks to folder blacklists and whitelists.
