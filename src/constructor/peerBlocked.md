---
title: "peerBlocked (конструктор)"
original: "https://core.telegram.org/constructor/peerBlocked"
section: ref
kind: constructor
layout: layout.njk
---

# peerBlocked

*Конструктор из схемы TL.*

> Information about a blocked peer

## Определение TL

```
peerBlocked#e8fd8014 peer_id:Peer date:int = PeerBlocked;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| peer_id | [Peer](/type/Peer/) | Peer ID |
| date | [int](/type/int/) | When was the peer blocked |

## Тип

[PeerBlocked](/type/PeerBlocked/)
