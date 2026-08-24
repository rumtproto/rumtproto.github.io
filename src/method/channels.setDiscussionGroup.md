---
title: "channels.setDiscussionGroup"
original: "https://core.telegram.org/method/channels.setDiscussionGroup"
section: ref
kind: method
description: "Привязать группу к каналу в качестве группы обсуждения для этого канала"
layout: layout.njk
---

# channels.setDiscussionGroup

Привязать группу к каналу в качестве [группы обсуждения](/api/discussion/) для этого канала

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
channels.setDiscussionGroup#40582bb2 broadcast:InputChannel group:InputChannel = Bool;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>broadcast</strong></td><td style="text-align: center;"><a href="/type/InputChannel">InputChannel</a></td><td>Канал</td></tr><tr><td><strong>group</strong></td><td style="text-align: center;"><a href="/type/InputChannel">InputChannel</a></td><td><a href="/api/discussion">Группа обсуждения</a>, которую нужно привязать к каналу</td></tr></tbody></table>

### Результат

[Bool](/type/Bool/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>BROADCAST_ID_INVALID</td><td>Недействительный идентификатор рассылки.</td></tr><tr><td>400</td><td>CHANNEL_INVALID</td><td>Указанный канал недействителен.</td></tr><tr><td>400</td><td>CHAT_ADMIN_REQUIRED</td><td>Для этого вы обязаны быть администратором этого чата.</td></tr><tr><td>403</td><td>CHAT_WRITE_FORBIDDEN</td><td>Вы не можете писать в этот чат.</td></tr><tr><td>400</td><td>LINK_NOT_MODIFIED</td><td>Ссылка на обсуждение не изменена.</td></tr><tr><td>400</td><td>MEGAGROUP_ID_INVALID</td><td>Недействительный идентификатор супергруппы.</td></tr><tr><td>400</td><td>MEGAGROUP_PREHISTORY_HIDDEN</td><td>Группу со скрытой для новых участников историей нельзя назначить группой обсуждения.</td></tr></tbody></table>

### Связанные страницы

#### [Группы обсуждения](/api/discussion/)

Группы можно связать с каналом в качестве группы обсуждения, чтобы пользователи могли обсуждать посты.
