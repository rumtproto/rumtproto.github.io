---
title: "PeerLocated (тип)"
original: "https://core.telegram.org/type/PeerLocated"
section: ref
kind: type
layout: layout.njk
---

# PeerLocated

*Тип из схемы TL.*

> Geolocated peer

## Определение TL

```
peerLocated#ca461b5d peer:Peer expires:int distance:int = PeerLocated;
peerSelfLocated#f8ec284b expires:int = PeerLocated;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [peerLocated](/constructor/peerLocated/) | Peer geolocated nearby |
| [peerSelfLocated](/constructor/peerSelfLocated/) | Current peer |
