---
title: "messagePeerVote (конструктор)"
original: "https://core.telegram.org/constructor/messagePeerVote"
section: ref
kind: constructor
layout: layout.njk
---

# messagePeerVote

*Конструктор из схемы TL.*

> How a peer voted in a poll

## Определение TL

```
messagePeerVote#b6cc2d5c peer:Peer option:bytes date:int = MessagePeerVote;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| peer | [Peer](/type/Peer/) | Peer ID |
| option | [bytes](/type/bytes/) | The option chosen by the peer |
| date | [int](/type/int/) | When did the peer cast the vote |

## Тип

[MessagePeerVote](/type/MessagePeerVote/)
