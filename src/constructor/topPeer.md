---
title: "topPeer (конструктор)"
original: "https://core.telegram.org/constructor/topPeer"
section: ref
kind: constructor
layout: layout.njk
---

# topPeer

*Конструктор из схемы TL.*

> Top peer

## Определение TL

```
topPeer#edcdc05b peer:Peer rating:double = TopPeer;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| peer | [Peer](/type/Peer/) | Peer |
| rating | [double](/type/double/) | Rating as computed in [top peer rating »](https://core.telegram.org/api/top-rating) |

## Тип

[TopPeer](/type/TopPeer/)

## Related pages

#### [Top peer rating](https://core.telegram.org/api/top-rating)

If enabled, the rating of top peers indicates the relevance of a frequently used peer in a certain category (frequently messaged users, frequently used bots, inline bots, frequently visited channels and so on).
