---
title: "messages.getPollVotes"
original: "https://core.telegram.org/method/messages.getPollVotes"
section: ref
kind: method
description: "Получить результаты неанонимных опросов"
layout: layout.njk
---

# messages.getPollVotes

Получить результаты неанонимных опросов

```
messages.votesList#4899484e flags:# count:int votes:Vector<MessagePeerVote> chats:Vector<Chat> users:Vector<User> next_offset:flags.0?string = messages.VotesList;
---functions---
messages.getPollVotes#b86e380e flags:# peer:InputPeer id:int option:flags.0?bytes offset:flags.1?string limit:int = messages.VotesList;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer">InputPeer</a></td><td>[@term:peer] Чат, в который был отправлен опрос</td></tr><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Идентификатор сообщения</td></tr><tr><td><strong>option</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/bytes">bytes</a></td><td>Получить результаты только для указанного варианта ответа <code>option</code></td></tr><tr><td><strong>offset</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/string">string</a></td><td>[@term:next_offset] Смещение для результатов, берётся из поля <code>next_offset</code> конструктора <a href="/constructor/messages.votesList">messages.votesList</a>; изначально — пустая строка.<br>Примечание: если других результатов нет, вызов метода вернёт пустое значение <code>next_offset</code>; поэтому не передавайте <code>next_offset</code>, возвращённый в <a href="/constructor/messages.votesList">messages.votesList</a>, если он пуст, чтобы избежать бесконечного цикла.</td></tr><tr><td><strong>limit</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Количество возвращаемых результатов</td></tr></tbody></table>

### Результат

[messages.VotesList](/type/messages.VotesList/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>403</td><td>BROADCAST_FORBIDDEN</td><td>Список проголосовавших в опросах канала и реакции нельзя получить во избежание деанонимизации.</td></tr><tr><td>400</td><td>MSG_ID_INVALID</td><td>Указан недействительный идентификатор сообщения.</td></tr><tr><td>403</td><td>POLL_VOTE_REQUIRED</td><td>Перед вызовом этого метода необходимо проголосовать в опросе.</td></tr></tbody></table>

### Связанные страницы

#### [messages.votesList](/constructor/messages.votesList/)

Как пользователи проголосовали в опросе
