---
title: "contacts.SponsoredPeers (тип)"
original: "https://core.telegram.org/type/contacts.SponsoredPeers"
section: ref
kind: type
layout: layout.njk
---

# contacts.SponsoredPeers

*Тип из схемы TL.*

> A list of sponsored peers.

## Определение TL

```
contacts.sponsoredPeersEmpty#ea32b4b1 = contacts.SponsoredPeers;
contacts.sponsoredPeers#eb032884 peers:Vector<SponsoredPeer> chats:Vector<Chat> users:Vector<User> = contacts.SponsoredPeers;

---functions---

contacts.getSponsoredPeers#b6c8c393 q:string = contacts.SponsoredPeers;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [contacts.sponsoredPeersEmpty](/constructor/contacts.sponsoredPeersEmpty/) | There are no sponsored peers for this query. |
| [contacts.sponsoredPeers](/constructor/contacts.sponsoredPeers/) | Sponsored peers. |

## Методы

| Method | Описание |
|---|---|
| [contacts.getSponsoredPeers](/method/contacts.getSponsoredPeers/) | Obtain a list of sponsored peer search results for a given query |
