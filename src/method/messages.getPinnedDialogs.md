---
title: "messages.getPinnedDialogs (метод)"
original: "https://core.telegram.org/method/messages.getPinnedDialogs"
section: ref
kind: method
layout: layout.njk
---

# messages.getPinnedDialogs

*Метод из схемы TL.*

> Get pinned dialogs

## Определение TL

```
messages.peerDialogs#3371c354 dialogs:Vector<Dialog> messages:Vector<Message> chats:Vector<Chat> users:Vector<User> state:updates.State = messages.PeerDialogs;
---functions---
messages.getPinnedDialogs#d6b94df2 folder_id:int = messages.PeerDialogs;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| folder_id | [int](/type/int/) | [Peer folder ID, for more info click here](https://core.telegram.org/api/folders#peer-folders) |

## Результат

[messages.PeerDialogs](/type/messages.PeerDialogs/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | FOLDER_ID_INVALID | Invalid folder ID. |

## Related pages

#### [Dialog folders](https://core.telegram.org/api/folders)

Telegram allows placing chats into folders, based on their type, mute status, or other custom criteria, thanks to folder blacklists and whitelists.
