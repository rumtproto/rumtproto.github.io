---
title: "messages.getOnlines (метод)"
original: "https://core.telegram.org/method/messages.getOnlines"
section: ref
kind: method
layout: layout.njk
---

# messages.getOnlines

*Метод из схемы TL.*

> Get count of online users in a chat

## Определение TL

```
chatOnlines#f041e250 onlines:int = ChatOnlines;
---functions---
messages.getOnlines#6e2be050 peer:InputPeer = ChatOnlines;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| peer | [InputPeer](/type/InputPeer/) | The chat |

## Результат

[ChatOnlines](/type/ChatOnlines/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | CHANNEL_PRIVATE | You haven't joined this channel/supergroup. |
| 400 | CHAT_ID_INVALID | The provided chat id is invalid. |
| 400 | PEER_ID_INVALID | The provided peer id is invalid. |
