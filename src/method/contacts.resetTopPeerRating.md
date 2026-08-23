---
title: "contacts.resetTopPeerRating (метод)"
original: "https://core.telegram.org/method/contacts.resetTopPeerRating"
section: ref
kind: method
layout: layout.njk
---

# contacts.resetTopPeerRating

*Метод из схемы TL.*

> Reset [rating](https://core.telegram.org/api/top-rating) of top peer

## Определение TL

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
contacts.resetTopPeerRating#1ae373ac category:TopPeerCategory peer:InputPeer = Bool;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| category | [TopPeerCategory](/type/TopPeerCategory/) | Top peer category |
| peer | [InputPeer](/type/InputPeer/) | Peer whose rating should be reset |

## Результат

[Bool](/type/Bool/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | PEER_ID_INVALID | The provided peer id is invalid. |

## Related pages

#### [Top peer rating](https://core.telegram.org/api/top-rating)

If enabled, the rating of top peers indicates the relevance of a frequently used peer in a certain category (frequently messaged users, frequently used bots, inline bots, frequently visited channels and so on).
