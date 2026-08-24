---
title: "messages.addPollAnswer"
original: "https://core.telegram.org/method/messages.addPollAnswer"
section: ref
kind: method
description: "Добавить вариант ответа в опрос со свободным ответом »"
layout: layout.njk
---

# messages.addPollAnswer

Добавить вариант ответа в [опрос со свободным ответом »](/api/poll/#open-answer-polls)

```
 Method schema is available as of layer 224. Switch »
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer">InputPeer</a></td><td>[@term:peer] Пир, в котором находится опрос</td></tr><tr><td><strong>msg_id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>[@term:msg_id] Идентификатор сообщения с опросом</td></tr><tr><td><strong>answer</strong></td><td style="text-align: center;"><a href="/type/PollAnswer">PollAnswer</a></td><td>Новый вариант ответа для добавления, используйте <a href="/constructor/inputPollAnswer">inputPollAnswer</a></td></tr></tbody></table>

### Результат

[Updates](/type/Updates/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>PEER_ID_INVALID</td><td>Указанный идентификатор пира недействителен.</td></tr></tbody></table>

### Связанные страницы

#### [inputPollAnswer](/constructor/inputPollAnswer/)

Вариант ответа для добавления в [опрос со свободным ответом »](/api/poll/#open-answer-polls)

#### [Опросы и викторины](/api/poll/)

Telegram позволяет отправлять опросы и викторины, в которых могут проголосовать тысячи, если не миллионы пользователей в чатах и каналах.
