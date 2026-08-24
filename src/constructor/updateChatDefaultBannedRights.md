---
title: "updateChatDefaultBannedRights"
original: "https://core.telegram.org/constructor/updateChatDefaultBannedRights"
section: ref
kind: constructor
description: "Права по умолчанию для заблокированных пользователей в обычной группе были изменены"
layout: layout.njk
---

# updateChatDefaultBannedRights

Права по умолчанию для заблокированных пользователей в [обычной группе](/api/channel/#basic-groups) были изменены

```
updateChatDefaultBannedRights#54c01850 peer:Peer default_banned_rights:ChatBannedRights version:int = Update;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/Peer">Peer</a></td><td>[@term:peer] Чат</td></tr><tr><td><strong>default_banned_rights</strong></td><td style="text-align: center;"><a href="/type/ChatBannedRights">ChatBannedRights</a></td><td>Новые права по умолчанию для заблокированных пользователей</td></tr><tr><td><strong>version</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>[@term:pts] Используется аналогично значениям <code>pts</code> для устранения дубликатов и обновления устаревшей информации о чате, как описано <a href="/api/peers#basic-group-updates">здесь »</a>.</td></tr></tbody></table>

### Тип

[Update](/type/Update/)

### Связанные страницы

#### [База данных пиров](/api/peers/)

Многие конструкторы API необходимо сохранять в локальной базе данных при получении; обновлять их следует только реактивно (пассивно) — когда они приходят через обновления или иным способом, указанным в документации, — чтобы не перегружать сервер постоянными запросами изменений одних и тех же неизменившихся данных.

#### [Каналы, супергруппы, гигагруппы и обычные группы](/api/channel/)

Как работать с каналами, супергруппами, гигагруппами и обычными группами и чем они друг от друга отличаются.
