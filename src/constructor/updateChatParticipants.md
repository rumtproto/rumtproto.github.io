---
title: "updateChatParticipants"
original: "https://core.telegram.org/constructor/updateChatParticipants"
section: ref
kind: constructor
description: "Изменился состав участников обычной группы »."
layout: layout.njk
---

# updateChatParticipants

Изменился состав участников [обычной группы »](/api/channel/#basic-groups).

```
updateChatParticipants#7761198 participants:ChatParticipants = Update;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>participants</strong></td><td style="text-align: center;"><a href="/type/ChatParticipants">ChatParticipants</a></td><td>Обновлённый список участников чата (также содержит поле <code>version</code>, используемое для устранения дубликатов и обновления устаревшей информации о чате, как описано <a href="/api/peers#basic-group-updates">здесь »</a>).</td></tr></tbody></table>

### Тип

[Update](/type/Update/)

### Связанные страницы

#### [База данных пиров](/api/peers/)

Многие конструкторы API необходимо сохранять в локальной базе данных при получении; обновлять их следует только реактивно (пассивно) — когда они приходят через обновления или иным способом, указанным в документации, — чтобы не перегружать сервер постоянными запросами изменений одних и тех же неизменившихся данных.

#### [Каналы, супергруппы, гигагруппы и обычные группы](/api/channel/)

Как работать с каналами, супергруппами, гигагруппами и обычными группами и чем они друг от друга отличаются.
