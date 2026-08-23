---
title: "MessagePeerVote (тип)"
original: "https://core.telegram.org/type/MessagePeerVote"
section: ref
kind: type
layout: layout.njk
---

# MessagePeerVote

*Тип из схемы TL.*

> How a user voted in a poll

## Определение TL

```
messagePeerVote#b6cc2d5c peer:Peer option:bytes date:int = MessagePeerVote;
messagePeerVoteInputOption#74cda504 peer:Peer date:int = MessagePeerVote;
messagePeerVoteMultiple#4628f6e6 peer:Peer options:Vector<bytes> date:int = MessagePeerVote;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [messagePeerVote](/constructor/messagePeerVote/) | How a peer voted in a poll |
| [messagePeerVoteInputOption](/constructor/messagePeerVoteInputOption/) | How a peer voted in a poll (reduced constructor, returned if an option was provided to [messages.getPollVotes](/method/messages.getPollVotes/)) |
| [messagePeerVoteMultiple](/constructor/messagePeerVoteMultiple/) | How a peer voted in a multiple-choice poll |
