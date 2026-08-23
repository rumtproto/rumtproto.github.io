---
title: "peerLocated (конструктор)"
original: "https://core.telegram.org/constructor/peerLocated"
section: ref
kind: constructor
layout: layout.njk
---

# peerLocated

*Конструктор из схемы TL.*

> Peer geolocated nearby

## Определение TL

```
peerLocated#ca461b5d peer:Peer expires:int distance:int = PeerLocated;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| peer | [Peer](/type/Peer/) | Peer |
| expires | [int](/type/int/) | Validity period of current data |
| distance | [int](/type/int/) | Distance from the peer in meters |

## Тип

[PeerLocated](/type/PeerLocated/)
