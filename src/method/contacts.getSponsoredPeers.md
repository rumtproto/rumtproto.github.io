---
title: "contacts.getSponsoredPeers (метод)"
original: "https://core.telegram.org/method/contacts.getSponsoredPeers"
section: ref
kind: method
layout: layout.njk
---

# contacts.getSponsoredPeers

*Метод из схемы TL.*

> Obtain a list of sponsored peer search results for a given query

## Определение TL

```
contacts.sponsoredPeersEmpty#ea32b4b1 = contacts.SponsoredPeers;
contacts.sponsoredPeers#eb032884 peers:Vector<SponsoredPeer> chats:Vector<Chat> users:Vector<User> = contacts.SponsoredPeers;
---functions---
contacts.getSponsoredPeers#b6c8c393 q:string = contacts.SponsoredPeers;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| q | [string](/type/string/) | The query |

## Результат

[contacts.SponsoredPeers](/type/contacts.SponsoredPeers/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | SEARCH_QUERY_EMPTY | The search query is empty. |
