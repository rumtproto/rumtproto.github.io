---
title: "contacts.sponsoredPeers (конструктор)"
original: "https://core.telegram.org/constructor/contacts.sponsoredPeers"
section: ref
kind: constructor
layout: layout.njk
---

# contacts.sponsoredPeers

*Конструктор из схемы TL.*

> Sponsored peers.

## Определение TL

```
contacts.sponsoredPeers#eb032884 peers:Vector<SponsoredPeer> chats:Vector<Chat> users:Vector<User> = contacts.SponsoredPeers;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| peers | [Vector](https://core.telegram.org/type/Vector%20t)<[SponsoredPeer](/type/SponsoredPeer/)> | Sponsored peers. |
| chats | [Vector](https://core.telegram.org/type/Vector%20t)<[Chat](/type/Chat/)> | Info about sponsored chats and channels |
| users | [Vector](https://core.telegram.org/type/Vector%20t)<[User](/type/User/)> | Info about sponsored users |

## Тип

[contacts.SponsoredPeers](/type/contacts.SponsoredPeers/)
