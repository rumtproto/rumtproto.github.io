---
title: "messagePeerVoteMultiple (конструктор)"
original: "https://core.telegram.org/constructor/messagePeerVoteMultiple"
section: ref
kind: constructor
layout: layout.njk
---

# messagePeerVoteMultiple

*Конструктор из схемы TL.*

> How a peer voted in a multiple-choice poll

## Определение TL

```
messagePeerVoteMultiple#4628f6e6 peer:Peer options:Vector<bytes> date:int = MessagePeerVote;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| peer | [Peer](/type/Peer/) | Peer ID |
| options | [Vector](https://core.telegram.org/type/Vector%20t)<[bytes](/type/bytes/)> | Options chosen by the peer |
| date | [int](/type/int/) | When did the peer cast their votes |

## Тип

[MessagePeerVote](/type/MessagePeerVote/)
