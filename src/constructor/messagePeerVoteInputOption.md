---
title: "messagePeerVoteInputOption (конструктор)"
original: "https://core.telegram.org/constructor/messagePeerVoteInputOption"
section: ref
kind: constructor
layout: layout.njk
---

# messagePeerVoteInputOption

*Конструктор из схемы TL.*

> How a peer voted in a poll (reduced constructor, returned if an `option` was provided to [messages.getPollVotes](/method/messages.getPollVotes/))

## Определение TL

```
messagePeerVoteInputOption#74cda504 peer:Peer date:int = MessagePeerVote;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| peer | [Peer](/type/Peer/) | The peer that voted for the queried option |
| date | [int](/type/int/) | When did the peer cast the vote |

## Тип

[MessagePeerVote](/type/MessagePeerVote/)

## Related pages

#### [messages.getPollVotes](/method/messages.getPollVotes/)

Get poll results for non-anonymous polls
