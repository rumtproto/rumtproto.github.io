---
title: "messagePeerVoteInputOption"
original: "https://core.telegram.org/constructor/messagePeerVoteInputOption"
section: ref
kind: constructor
description: "Как пир проголосовал в опросе (сокращённый конструктор, возвращается, если параметр option был передан в messages.getPollVotes)"
layout: layout.njk
---

# messagePeerVoteInputOption

Как пир проголосовал в опросе (сокращённый конструктор, возвращается, если параметр `option` был передан в [messages.getPollVotes](/method/messages.getPollVotes/))

```
messagePeerVoteInputOption#74cda504 peer:Peer date:int = MessagePeerVote;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/Peer">Peer</a></td><td>[@term:peer] Пир, проголосовавший за запрошенный вариант <code>option</code></td></tr><tr><td><strong>date</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Когда пир проголосовал</td></tr></tbody></table>

### Тип

[MessagePeerVote](/type/MessagePeerVote/)

### Связанные страницы

#### [messages.getPollVotes](/method/messages.getPollVotes/)

Получить результаты неанонимных опросов
