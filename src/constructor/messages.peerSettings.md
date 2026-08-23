---
title: "messages.peerSettings (конструктор)"
original: "https://core.telegram.org/constructor/messages.peerSettings"
section: ref
kind: constructor
layout: layout.njk
---

# messages.peerSettings

*Конструктор из схемы TL.*

> Peer settings

## Определение TL

```
messages.peerSettings#6880b94d settings:PeerSettings chats:Vector<Chat> users:Vector<User> = messages.PeerSettings;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| settings | [PeerSettings](/type/PeerSettings/) | Peer settings |
| chats | [Vector](https://core.telegram.org/type/Vector%20t)<[Chat](/type/Chat/)> | Mentioned chats |
| users | [Vector](https://core.telegram.org/type/Vector%20t)<[User](/type/User/)> | Mentioned users |

## Тип

[messages.PeerSettings](/type/messages.PeerSettings/)
