---
title: "messages.getMessageEditData (метод)"
original: "https://core.telegram.org/method/messages.getMessageEditData"
section: ref
kind: method
layout: layout.njk
---

# messages.getMessageEditData

*Метод из схемы TL.*

> Find out if a media message's caption can be edited

## Определение TL

```
messages.messageEditData#26b5dde6 flags:# caption:flags.0?true = messages.MessageEditData;
---functions---
messages.getMessageEditData#fda68d36 peer:InputPeer id:int = messages.MessageEditData;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| peer | [InputPeer](/type/InputPeer/) | Peer where the media was sent |
| id | [int](/type/int/) | ID of message |

## Результат

[messages.MessageEditData](/type/messages.MessageEditData/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | CHAT_ADMIN_REQUIRED | You must be an admin in this chat to do this. |
| 403 | CHAT_WRITE_FORBIDDEN | You can't write in this chat. |
| 403 | MESSAGE_AUTHOR_REQUIRED | Message author required. |
| 400 | MESSAGE_ID_INVALID | The provided message id is invalid. |
| 400 | PEER_ID_INVALID | The provided peer id is invalid. |
