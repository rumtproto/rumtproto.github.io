---
title: "phone.joinAsPeers (конструктор)"
original: "https://core.telegram.org/constructor/phone.joinAsPeers"
section: ref
kind: constructor
layout: layout.njk
---

# phone.joinAsPeers

*Конструктор из схемы TL.*

> Contains the peers that may be used to join a video chat/livestream, see [joining on behalf of owned channels »](https://core.telegram.org/api/group-calls#joining-a-group-call-on-behalf-of-owned-channels).

## Определение TL

```
phone.joinAsPeers#afe5623f peers:Vector<Peer> chats:Vector<Chat> users:Vector<User> = phone.JoinAsPeers;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| peers | [Vector](https://core.telegram.org/type/Vector%20t)<[Peer](/type/Peer/)> | Peers |
| chats | [Vector](https://core.telegram.org/type/Vector%20t)<[Chat](/type/Chat/)> | Chats mentioned in the peers vector |
| users | [Vector](https://core.telegram.org/type/Vector%20t)<[User](/type/User/)> | Users mentioned in the peers vector |

## Тип

[phone.JoinAsPeers](/type/phone.JoinAsPeers/)

## Related pages

#### [Group calls](https://core.telegram.org/api/group-calls)

How to start, join and manage group calls and video chats.
