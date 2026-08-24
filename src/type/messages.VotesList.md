---
title: "messages.VotesList"
original: "https://core.telegram.org/type/messages.VotesList"
section: ref
kind: type
description: "Как пользователи проголосовали в опросе"
layout: layout.njk
---

# messages.VotesList

Как пользователи проголосовали в опросе

```
messages.votesList#4899484e flags:# count:int votes:Vector<MessagePeerVote> chats:Vector<Chat> users:Vector<User> next_offset:flags.0?string = messages.VotesList;

---functions---

messages.getPollVotes#b86e380e flags:# peer:InputPeer id:int option:flags.0?bytes offset:flags.1?string limit:int = messages.VotesList;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/messages.votesList">messages.votesList</a></td><td>Как пользователи проголосовали в опросе</td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/messages.getPollVotes">messages.getPollVotes</a></td><td>Получить результаты неанонимных опросов</td></tr></tbody></table>
