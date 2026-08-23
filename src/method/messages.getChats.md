---
title: "messages.getChats (метод)"
original: "https://core.telegram.org/method/messages.getChats"
section: ref
kind: method
layout: layout.njk
---

# messages.getChats

*Метод из схемы TL.*

> Returns chat basic info on their IDs.

## Определение TL

```
messages.chats#64ff9fd5 chats:Vector<Chat> = messages.Chats;
messages.chatsSlice#9cd81144 count:int chats:Vector<Chat> = messages.Chats;
---functions---
messages.getChats#49e9528f id:Vector<long> = messages.Chats;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| id | [Vector](https://core.telegram.org/type/Vector%20t)<[long](/type/long/)> | List of chat IDs |

## Результат

[messages.Chats](/type/messages.Chats/)

## Both users and bots can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | CHAT_ID_INVALID | The provided chat id is invalid. |
| 400 | PEER_ID_INVALID | The provided peer id is invalid. |
