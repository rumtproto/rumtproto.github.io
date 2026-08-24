---
title: "updateBotChatInviteRequester"
original: "https://core.telegram.org/constructor/updateBotChatInviteRequester"
section: ref
kind: constructor
description: "Кто-то подал заявку на вступление в чат или канал (только для ботов; пользователи вместо этого получат updatePendingJoinRequests)"
layout: layout.njk
---

# updateBotChatInviteRequester

Кто-то подал заявку на вступление в чат или канал (только для ботов; пользователи вместо этого получат [updatePendingJoinRequests](/constructor/updatePendingJoinRequests/))

```
updateBotChatInviteRequester#11dfa986 peer:Peer date:int user_id:long about:string invite:ExportedChatInvite qts:int = Update;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/Peer">Peer</a></td><td>[@term:peer] Требуемый чат или канал</td></tr><tr><td><strong>date</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Когда была подана <a href="/api/invites#join-requests">заявка на вступление »</a></td></tr><tr><td><strong>user_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Идентификатор пользователя, который просит принять его в чат или канал</td></tr><tr><td><strong>about</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Биография пользователя</td></tr><tr><td><strong>invite</strong></td><td style="text-align: center;"><a href="/type/ExportedChatInvite">ExportedChatInvite</a></td><td>Пригласительная ссылка на чат, по которой пользователь отправил <a href="/api/invites#join-requests">заявку на вступление »</a></td></tr><tr><td><strong>qts</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>[@term:qts] Идентификатор последовательности событий <a href="/api/updates">QTS</a></td></tr></tbody></table>

### Тип

[Update](/type/Update/)

### Связанные страницы

#### [Пригласительные ссылки](/api/invites/)

У чатов и каналов может быть публичное имя пользователя или закрытая пригласительная ссылка; закрытые пригласительные ссылки дополнительно могут требовать заявку на вступление от каждого пользователя.

#### [Работа с обновлениями](/api/updates/)

Как подписаться на обновления и правильно их обрабатывать.

#### [updatePendingJoinRequests](/constructor/updatePendingJoinRequests/)

Кто-то подал заявку на вступление в чат или канал
