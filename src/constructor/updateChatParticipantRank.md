---
title: "updateChatParticipantRank"
original: "https://core.telegram.org/constructor/updateChatParticipantRank"
section: ref
kind: constructor
description: "Изменился тег » участника обычной группы »."
layout: layout.njk
---

# updateChatParticipantRank

Изменился [тег »](/api/rank/) участника [обычной группы »](/api/channel/#basic-groups).

```
updateChatParticipantRank#bd8367b9 chat_id:long user_id:long rank:string version:int = Update;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>chat_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Идентификатор обычной группы.</td></tr><tr><td><strong>user_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Идентификатор пользователя.</td></tr><tr><td><strong>rank</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Новое звание.</td></tr><tr><td><strong>version</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>[@term:pts] Используется аналогично значениям <code>pts</code> для устранения дубликатов и обновления устаревшей информации о чате, как описано <a href="/api/peers#basic-group-updates">здесь »</a>.</td></tr></tbody></table>

### Тип

[Update](/type/Update/)

### Связанные страницы

#### [База данных пиров](/api/peers/)

Многие конструкторы API необходимо сохранять в локальной базе данных при получении; обновлять их следует только реактивно (пассивно) — когда они приходят через обновления или иным способом, указанным в документации, — чтобы не перегружать сервер постоянными запросами изменений одних и тех же неизменившихся данных.

#### [Звание](/api/rank/)

Участники групповых чатов (как обычных групп, так и супергрупп) могут добавить рядом со своим именем тег — чтобы указать свою роль на работе, что они изучают в учебном заведении и прочее.

#### [Каналы, супергруппы, гигагруппы и обычные группы](/api/channel/)

Как работать с каналами, супергруппами, гигагруппами и обычными группами и чем они друг от друга отличаются.
