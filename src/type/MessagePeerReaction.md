---
title: "MessagePeerReaction (тип)"
original: "https://core.telegram.org/type/MessagePeerReaction"
section: ref
kind: type
layout: layout.njk
---

# MessagePeerReaction

*Тип из схемы TL.*

> How a certain peer reacted to the message

## Определение TL

```
messagePeerReaction#8c79b63c flags:# big:flags.0?true unread:flags.1?true my:flags.2?true peer_id:Peer date:int reaction:Reaction = MessagePeerReaction;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [messagePeerReaction](/constructor/messagePeerReaction/) | How a certain peer reacted to the message |
