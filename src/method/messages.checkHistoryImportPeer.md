---
title: "messages.checkHistoryImportPeer (метод)"
original: "https://core.telegram.org/method/messages.checkHistoryImportPeer"
section: ref
kind: method
layout: layout.njk
---

# messages.checkHistoryImportPeer

*Метод из схемы TL.*

> Check whether chat history exported from another chat app can be [imported into a specific Telegram chat, click here for more info »](https://core.telegram.org/api/import).
> If the check succeeds, and no RPC errors are returned, a [messages.CheckedHistoryImportPeer](/type/messages.CheckedHistoryImportPeer/) constructor will be returned, with a confirmation text to be shown to the user, before actually initializing the import.

## Определение TL

```
messages.checkedHistoryImportPeer#a24de717 confirm_text:string = messages.CheckedHistoryImportPeer;
---functions---
messages.checkHistoryImportPeer#5dc60f03 peer:InputPeer = messages.CheckedHistoryImportPeer;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| peer | [InputPeer](/type/InputPeer/) | The chat where we want to [import history »](https://core.telegram.org/api/import). |

## Результат

[messages.CheckedHistoryImportPeer](/type/messages.CheckedHistoryImportPeer/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | CHAT_ADMIN_REQUIRED | You must be an admin in this chat to do this. |
| 400 | PEER_ID_INVALID | The provided peer id is invalid. |
| 400 | USER_NOT_MUTUAL_CONTACT | The provided user is not a mutual contact. |

## Related pages

#### [Imported messages](https://core.telegram.org/api/import)

Telegram allows importing messages and media from foreign chat apps.

#### [messages.CheckedHistoryImportPeer](/type/messages.CheckedHistoryImportPeer/)

Contains a confirmation text to be shown to the user, upon [importing chat history, click here for more info »](https://core.telegram.org/api/import).
