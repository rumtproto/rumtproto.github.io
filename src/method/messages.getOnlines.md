---
title: "messages.getOnlines"
original: "https://core.telegram.org/method/messages.getOnlines"
section: ref
kind: method
description: "Получить количество пользователей чата, находящихся в сети"
layout: layout.njk
---

# messages.getOnlines

Получить количество пользователей чата, находящихся в сети

```
chatOnlines#f041e250 onlines:int = ChatOnlines;
---functions---
messages.getOnlines#6e2be050 peer:InputPeer = ChatOnlines;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer">InputPeer</a></td><td>[@term:peer] Чат</td></tr></tbody></table>

### Результат

[ChatOnlines](/type/ChatOnlines/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>CHANNEL_PRIVATE</td><td>Вы не вступили в этот канал или супергруппу.</td></tr><tr><td>400</td><td>CHAT_ID_INVALID</td><td>Указанный идентификатор чата недействителен.</td></tr><tr><td>400</td><td>PEER_ID_INVALID</td><td>Указанный идентификатор пира недействителен.</td></tr></tbody></table>
