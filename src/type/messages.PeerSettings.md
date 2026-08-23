---
title: "messages.PeerSettings (тип)"
original: "https://core.telegram.org/type/messages.PeerSettings"
section: ref
kind: type
layout: layout.njk
---

# messages.PeerSettings

*Тип из схемы TL.*

> Peer settings

## Определение TL

```
messages.peerSettings#6880b94d settings:PeerSettings chats:Vector<Chat> users:Vector<User> = messages.PeerSettings;

---functions---

messages.getPeerSettings#efd9a6a2 peer:InputPeer = messages.PeerSettings;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [messages.peerSettings](/constructor/messages.peerSettings/) | Peer settings |

## Методы

| Method | Описание |
|---|---|
| [messages.getPeerSettings](/method/messages.getPeerSettings/) | Get peer settings |
