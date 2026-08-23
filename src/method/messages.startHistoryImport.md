---
title: "messages.startHistoryImport (метод)"
original: "https://core.telegram.org/method/messages.startHistoryImport"
section: ref
kind: method
layout: layout.njk
---

# messages.startHistoryImport

*Метод из схемы TL.*

> Complete the [history import process](https://core.telegram.org/api/import), importing all messages into the chat.  
> To be called only after initializing the import with [messages.initHistoryImport](/method/messages.initHistoryImport/) and uploading all files using [messages.uploadImportedMedia](/method/messages.uploadImportedMedia/).

## Определение TL

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
messages.startHistoryImport#b43df344 peer:InputPeer import_id:long = Bool;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| peer | [InputPeer](/type/InputPeer/) | The Telegram chat where the messages should be [imported, click here for more info »](https://core.telegram.org/api/import) |
| import_id | [long](/type/long/) | Identifier of a history import session, returned by [messages.initHistoryImport](/method/messages.initHistoryImport/). |

## Результат

[Bool](/type/Bool/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | CHAT_ADMIN_REQUIRED | You must be an admin in this chat to do this. |
| 400 | IMPORT_ID_INVALID | The specified import ID is invalid. |
| 400 | PEER_ID_INVALID | The provided peer id is invalid. |

## Related pages

#### [Imported messages](https://core.telegram.org/api/import)

Telegram allows importing messages and media from foreign chat apps.

#### [messages.initHistoryImport](/method/messages.initHistoryImport/)

Import chat history from a foreign chat app into a specific Telegram chat, [click here for more info about imported chats »](https://core.telegram.org/api/import).

#### [messages.uploadImportedMedia](/method/messages.uploadImportedMedia/)

Upload a media file associated with an [imported chat, click here for more info »](https://core.telegram.org/api/import).
