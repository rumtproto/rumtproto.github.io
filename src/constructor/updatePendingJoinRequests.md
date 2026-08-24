---
title: "updatePendingJoinRequests"
original: "https://core.telegram.org/constructor/updatePendingJoinRequests"
section: ref
kind: constructor
description: "Кто-то подал заявку на вступление в чат или канал"
layout: layout.njk
---

# updatePendingJoinRequests

Кто-то подал заявку на вступление в чат или канал

```
updatePendingJoinRequests#7063c3db peer:Peer requests_pending:int recent_requesters:Vector<long> = Update;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/Peer">Peer</a></td><td>[@term:peer] Чат или канал</td></tr><tr><td><strong>requests_pending</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Количество ожидающих рассмотрения <a href="/api/invites#join-requests">заявок на вступление »</a> в чат или канал</td></tr><tr><td><strong>recent_requesters</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/long">long</a>&gt;</td><td>Идентификаторы пользователей, недавно подавших заявку на вступление</td></tr></tbody></table>

### Тип

[Update](/type/Update/)

### Связанные страницы

#### [Пригласительные ссылки](/api/invites/)

У чатов и каналов может быть публичное имя пользователя или закрытая пригласительная ссылка; закрытые пригласительные ссылки дополнительно могут требовать заявку на вступление от каждого пользователя.
