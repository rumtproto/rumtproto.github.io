---
title: "MessagePeerVote"
original: "https://core.telegram.org/type/MessagePeerVote"
section: ref
kind: type
description: "Как пользователь проголосовал в опросе"
layout: layout.njk
---

# MessagePeerVote

Как пользователь проголосовал в опросе

```
messagePeerVote#b6cc2d5c peer:Peer option:bytes date:int = MessagePeerVote;
messagePeerVoteInputOption#74cda504 peer:Peer date:int = MessagePeerVote;
messagePeerVoteMultiple#4628f6e6 peer:Peer options:Vector<bytes> date:int = MessagePeerVote;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/messagePeerVote">messagePeerVote</a></td><td>Как пир проголосовал в опросе</td></tr><tr><td><a href="/constructor/messagePeerVoteInputOption">messagePeerVoteInputOption</a></td><td>Как пир проголосовал в опросе (сокращённый конструктор, возвращается, если параметр <code>option</code> был передан в <a href="/method/messages.getPollVotes">messages.getPollVotes</a>)</td></tr><tr><td><a href="/constructor/messagePeerVoteMultiple">messagePeerVoteMultiple</a></td><td>Как пир проголосовал в опросе с несколькими вариантами ответа</td></tr></tbody></table>
