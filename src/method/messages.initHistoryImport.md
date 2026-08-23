---
title: "messages.initHistoryImport (метод)"
original: "https://core.telegram.org/method/messages.initHistoryImport"
section: ref
kind: method
layout: layout.njk
---

# messages.initHistoryImport

*Метод из схемы TL.*

> Import chat history from a foreign chat app into a specific Telegram chat, [click here for more info about imported chats »](https://core.telegram.org/api/import).

## Определение TL

```
messages.historyImport#1662af0b id:long = messages.HistoryImport;
---functions---
messages.initHistoryImport#34090c3b peer:InputPeer file:InputFile media_count:int = messages.HistoryImport;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| peer | [InputPeer](/type/InputPeer/) | The Telegram chat where the [history should be imported](https://core.telegram.org/api/import). |
| file | [InputFile](/type/InputFile/) | File with messages to import. |
| media_count | [int](/type/int/) | Number of media files associated with the chat that will be uploaded using [messages.uploadImportedMedia](/method/messages.uploadImportedMedia/). |

## Результат

[messages.HistoryImport](/type/messages.HistoryImport/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | CHAT_ADMIN_REQUIRED | You must be an admin in this chat to do this. |
| 400 | IMPORT_FILE_INVALID | The specified chat export file is invalid. |
| 400 | IMPORT_FORMAT_DATE_INVALID | The date specified in the import file is invalid. |
| 400 | IMPORT_FORMAT_UNRECOGNIZED | The specified chat export file was exported from an unsupported chat app. |
| 400 | PEER_ID_INVALID | The provided peer id is invalid. |
| 406 | PREVIOUS_CHAT_IMPORT_ACTIVE_WAIT_%dMIN | Import for this chat is already in progress, wait %d minutes before starting a new one. |
| 400 | USER_NOT_MUTUAL_CONTACT | The provided user is not a mutual contact. |

## Related pages

#### [Imported messages](https://core.telegram.org/api/import)

Telegram allows importing messages and media from foreign chat apps.

#### [messages.uploadImportedMedia](/method/messages.uploadImportedMedia/)

Upload a media file associated with an [imported chat, click here for more info »](https://core.telegram.org/api/import).
