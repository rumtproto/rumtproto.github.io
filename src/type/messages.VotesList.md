---
title: "messages.VotesList (тип)"
original: "https://core.telegram.org/type/messages.VotesList"
section: ref
kind: type
layout: layout.njk
---

# messages.VotesList

*Тип из схемы TL.*

> How users voted in a poll

## Определение TL

```
messages.votesList#4899484e flags:# count:int votes:Vector<MessagePeerVote> chats:Vector<Chat> users:Vector<User> next_offset:flags.0?string = messages.VotesList;

---functions---

messages.getPollVotes#b86e380e flags:# peer:InputPeer id:int option:flags.0?bytes offset:flags.1?string limit:int = messages.VotesList;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [messages.votesList](/constructor/messages.votesList/) | How users voted in a poll |

## Методы

| Method | Описание |
|---|---|
| [messages.getPollVotes](/method/messages.getPollVotes/) | Get poll results for non-anonymous polls |
