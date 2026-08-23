---
title: "Messages.PeerDialogs (тип)"
original: "https://core.telegram.org/type/messages.PeerDialogs"
section: ref
kind: type
layout: layout.njk
---

# Messages.PeerDialogs

*Тип из схемы TL.*

> List of dialogs

## Определение TL

```
messages.peerDialogs#3371c354 dialogs:Vector<Dialog> messages:Vector<Message> chats:Vector<Chat> users:Vector<User> state:updates.State = messages.PeerDialogs;

---functions---

messages.getPeerDialogs#e470bcfd peers:Vector<InputDialogPeer> = messages.PeerDialogs;
messages.getPinnedDialogs#d6b94df2 folder_id:int = messages.PeerDialogs;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [messages.peerDialogs](/constructor/messages.peerDialogs/) | Dialog info of multiple peers |

## Методы

| Method | Описание |
|---|---|
| [messages.getPeerDialogs](/method/messages.getPeerDialogs/) | Get dialog info of specified peers |
| [messages.getPinnedDialogs](/method/messages.getPinnedDialogs/) | Get pinned dialogs |
