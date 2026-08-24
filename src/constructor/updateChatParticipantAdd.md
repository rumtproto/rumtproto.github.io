---
title: "updateChatParticipantAdd"
original: "https://core.telegram.org/constructor/updateChatParticipantAdd"
section: ref
kind: constructor
description: "Новый участник группы."
layout: layout.njk
---

# updateChatParticipantAdd

Новый участник группы.

```
updateChatParticipantAdd#3dda5451 chat_id:long user_id:long inviter_id:long date:int version:int = Update;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>chat_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Идентификатор группы</td></tr><tr><td><strong>user_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Идентификатор нового участника</td></tr><tr><td><strong>inviter_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Идентификатор пользователя, добавившего участника в группу</td></tr><tr><td><strong>date</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Когда участник был добавлен</td></tr><tr><td><strong>version</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>[@term:pts] Используется аналогично значениям <code>pts</code> для устранения дубликатов и обновления устаревшей информации о чате, как описано <a href="/api/peers#basic-group-updates">здесь »</a>.</td></tr></tbody></table>

### Тип

[Update](/type/Update/)

### Связанные страницы

#### [База данных пиров](/api/peers/)

Многие конструкторы API необходимо сохранять в локальной базе данных при получении; обновлять их следует только реактивно (пассивно) — когда они приходят через обновления или иным способом, указанным в документации, — чтобы не перегружать сервер постоянными запросами изменений одних и тех же неизменившихся данных.
