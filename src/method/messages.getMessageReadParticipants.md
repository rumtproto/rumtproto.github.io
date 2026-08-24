---
title: "messages.getMessageReadParticipants"
original: "https://core.telegram.org/method/messages.getMessageReadParticipants"
section: ref
kind: method
description: "Получить список пользователей, прочитавших определённое сообщение: доступно только для групп и супергрупп, где менее chat_read_mark_size_threshold участников; сведения о прочтении…"
layout: layout.njk
---

# messages.getMessageReadParticipants

Получить список пользователей, прочитавших определённое сообщение: доступно только для групп и супергрупп, где менее [`chat_read_mark_size_threshold` участников](/api/config/#chat-read-mark-size-threshold); сведения о прочтении хранятся в течение [`chat_read_mark_expire_period` секунд после отправки сообщения](/api/config/#chat-read-mark-expire-period), подробнее см. [конфигурацию клиента »](/api/config/#client-configuration).

```
---functions---
messages.getMessageReadParticipants#31c1c44f peer:InputPeer msg_id:int = Vector<ReadParticipantDate>;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer">InputPeer</a></td><td>[@term:peer] Диалог</td></tr><tr><td><strong>msg_id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>[@term:msg_id] Идентификатор сообщения</td></tr></tbody></table>

### Результат

[Vector](https://core.telegram.org/type/Vector%20t)<[ReadParticipantDate](/type/ReadParticipantDate/)\>

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>CHAT_TOO_BIG</td><td>Этот метод недоступен для групп, в которых больше <code>chat_read_mark_size_threshold</code> участников, <a href="/api/config#client-configuration">см. конфигурацию клиента&nbsp;»</a>.</td></tr><tr><td>400</td><td>MSG_ID_INVALID</td><td>Указан недействительный идентификатор сообщения.</td></tr><tr><td>400</td><td>MSG_TOO_OLD</td><td>С момента отправки сообщения прошло <a href="/api/config#chat-read-mark-expire-period"><code>chat_read_mark_expire_period</code> секунд</a>, и сведения о прочтении были удалены.</td></tr><tr><td>400</td><td>PEER_ID_INVALID</td><td>Указанный идентификатор пира недействителен.</td></tr></tbody></table>

### Связанные страницы

#### [Конфигурация клиента](/api/config/)

У MTProto API есть несколько параметров конфигурации, которые можно получить соответствующими методами.
