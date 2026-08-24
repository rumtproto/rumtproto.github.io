---
title: "messages.votesList"
original: "https://core.telegram.org/constructor/messages.votesList"
section: ref
kind: constructor
description: "Как пользователи проголосовали в опросе"
layout: layout.njk
---

# messages.votesList

Как пользователи проголосовали в опросе

```
messages.votesList#4899484e flags:# count:int votes:Vector<MessagePeerVote> chats:Vector<Chat> users:Vector<User> next_offset:flags.0?string = messages.VotesList;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>count</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Общее число голосов за все варианты (или только за выбранный вариант <code>option</code>, если он был передан в <a href="/method/messages.getPollVotes">messages.getPollVotes</a>)</td></tr><tr><td><strong>votes</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/MessagePeerVote">MessagePeerVote</a>&gt;</td><td>Сведения о голосе каждого пользователя</td></tr><tr><td><strong>chats</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/Chat">Chat</a>&gt;</td><td>Упомянутые чаты</td></tr><tr><td><strong>users</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/User">User</a>&gt;</td><td>Информация о пользователях, проголосовавших в опросе</td></tr><tr><td><strong>next_offset</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/string">string</a></td><td>[@term:next_offset] Смещение, которое следует использовать в следующем запросе <a href="/method/messages.getPollVotes">messages.getPollVotes</a>; пустая строка, если больше результатов нет.</td></tr></tbody></table>

### Тип

[messages.VotesList](/type/messages.VotesList/)

### Связанные страницы

#### [messages.getPollVotes](/method/messages.getPollVotes/)

Получить результаты неанонимных опросов
