---
title: "channels.sendAsPeers (конструктор)"
original: "https://core.telegram.org/constructor/channels.sendAsPeers"
section: ref
kind: constructor
layout: layout.njk
---

# channels.sendAsPeers

*Конструктор из схемы TL.*

> A list of peers that can be used to send messages in a specific group

## Определение TL

```
channels.sendAsPeers#f496b0c6 peers:Vector<SendAsPeer> chats:Vector<Chat> users:Vector<User> = channels.SendAsPeers;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| peers | [Vector](https://core.telegram.org/type/Vector%20t)<[SendAsPeer](/type/SendAsPeer/)> | Peers that can be used to send messages to the group |
| chats | [Vector](https://core.telegram.org/type/Vector%20t)<[Chat](/type/Chat/)> | Mentioned chats |
| users | [Vector](https://core.telegram.org/type/Vector%20t)<[User](/type/User/)> | Mentioned users |

## Тип

[channels.SendAsPeers](/type/channels.SendAsPeers/)
