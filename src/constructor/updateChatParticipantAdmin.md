---
title: "updateChatParticipantAdmin"
original: "https://core.telegram.org/constructor/updateChatParticipantAdmin"
section: ref
kind: constructor
description: "Изменены права администратора у пользователя в обычной группе"
layout: layout.njk
---

# updateChatParticipantAdmin

Изменены права администратора у пользователя в [обычной группе](/api/channel/#basic-groups)

```
updateChatParticipantAdmin#d7ca61a2 chat_id:long user_id:long is_admin:Bool version:int = Update;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>chat_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Идентификатор чата</td></tr><tr><td><strong>user_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Идентификатор пользователя, которому назначаются или снимаются права администратора</td></tr><tr><td><strong>is_admin</strong></td><td style="text-align: center;"><a href="/type/Bool">Bool</a></td><td>Был ли пользователь назначен администратором</td></tr><tr><td><strong>version</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>[@term:pts] Используется аналогично значениям <code>pts</code> для устранения дубликатов и обновления устаревшей информации о чате, как описано <a href="/api/peers#basic-group-updates">здесь »</a>.</td></tr></tbody></table>

### Тип

[Update](/type/Update/)

### Связанные страницы

#### [База данных пиров](/api/peers/)

Многие конструкторы API необходимо сохранять в локальной базе данных при получении; обновлять их следует только реактивно (пассивно) — когда они приходят через обновления или иным способом, указанным в документации, — чтобы не перегружать сервер постоянными запросами изменений одних и тех же неизменившихся данных.

#### [Каналы, супергруппы, гигагруппы и обычные группы](/api/channel/)

Как работать с каналами, супергруппами, гигагруппами и обычными группами и чем они друг от друга отличаются.
