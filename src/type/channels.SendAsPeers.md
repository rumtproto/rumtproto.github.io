---
title: "channels.SendAsPeers (тип)"
original: "https://core.telegram.org/type/channels.SendAsPeers"
section: ref
kind: type
layout: layout.njk
---

# channels.SendAsPeers

*Тип из схемы TL.*

> A list of peers that can be used to send messages in a specific group

## Определение TL

```
channels.sendAsPeers#f496b0c6 peers:Vector<SendAsPeer> chats:Vector<Chat> users:Vector<User> = channels.SendAsPeers;

---functions---

channels.getSendAs#e785a43f flags:# for_paid_reactions:flags.0?true for_live_stories:flags.1?true peer:InputPeer = channels.SendAsPeers;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [channels.sendAsPeers](/constructor/channels.sendAsPeers/) | A list of peers that can be used to send messages in a specific group |

## Методы

| Method | Описание |
|---|---|
| [channels.getSendAs](/method/channels.getSendAs/) | Obtains a list of peers that can be displayed as the sender in a specific context. With for_live_stories, returns peers that may author [live story in-call messages »](https://core.telegram.org/api/group-calls#in-call-messages). |
