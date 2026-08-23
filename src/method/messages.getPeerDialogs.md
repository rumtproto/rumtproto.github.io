---
title: "messages.getPeerDialogs (метод)"
original: "https://core.telegram.org/method/messages.getPeerDialogs"
section: ref
kind: method
layout: layout.njk
---

# messages.getPeerDialogs

*Метод из схемы TL.*

> Get dialog info of specified peers

## Определение TL

```
messages.peerDialogs#3371c354 dialogs:Vector<Dialog> messages:Vector<Message> chats:Vector<Chat> users:Vector<User> state:updates.State = messages.PeerDialogs;
---functions---
messages.getPeerDialogs#e470bcfd peers:Vector<InputDialogPeer> = messages.PeerDialogs;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| peers | [Vector](https://core.telegram.org/type/Vector%20t)<[InputDialogPeer](/type/InputDialogPeer/)> | Peers |

## Результат

[messages.PeerDialogs](/type/messages.PeerDialogs/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | CHANNEL_INVALID | The provided channel is invalid. |
| 406 | CHANNEL_PRIVATE | You haven't joined this channel/supergroup. |
| 400 | FROZEN_PARTICIPANT_MISSING | The current account is [frozen](https://core.telegram.org/api/auth/#frozen-accounts), and cannot access the specified peer. |
| 400 | INPUT_PEERS_EMPTY | The specified peer array is empty. |
| 400 | MSG_ID_INVALID | Invalid message ID provided. |
| 400 | PEER_ID_INVALID | The provided peer id is invalid. |

## Related pages

#### [User Authorization](/api/auth/)

How to register a user's phone to start using the API.
