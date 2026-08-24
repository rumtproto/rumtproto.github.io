---
title: "Peer"
original: "https://core.telegram.org/type/Peer"
section: ref
kind: type
description: "Идентификатор личного чата, обычной группы, группы или канала (подробнее см. здесь »)."
layout: layout.njk
---

# Peer

Идентификатор личного чата, обычной группы, группы или канала (подробнее см. [здесь »](/api/peers/)).

```
peerUser#59511722 user_id:long = Peer;
peerChat#36c6019a chat_id:long = Peer;
peerChannel#a2a5371e channel_id:long = Peer;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/peerUser">peerUser</a></td><td>Собеседник</td></tr><tr><td><a href="/constructor/peerChat">peerChat</a></td><td>Группа.</td></tr><tr><td><a href="/constructor/peerChannel">peerChannel</a></td><td>Канал или супергруппа</td></tr></tbody></table>

### Связанные страницы

#### [База данных пиров](/api/peers/)

Многие конструкторы API необходимо сохранять в локальной базе данных при получении; обновлять их следует только реактивно (пассивно) — когда они приходят через обновления или иным способом, указанным в документации, — чтобы не перегружать сервер постоянными запросами изменений одних и тех же неизменившихся данных.
