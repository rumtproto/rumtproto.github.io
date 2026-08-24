---
title: "channelParticipantCreator"
original: "https://core.telegram.org/constructor/channelParticipantCreator"
section: ref
kind: constructor
description: "Создатель канала или супергруппы"
layout: layout.njk
---

# channelParticipantCreator

Создатель канала или супергруппы

```
channelParticipantCreator#2fe601d3 flags:# user_id:long admin_rights:ChatAdminRights rank:flags.0?string = ChannelParticipant;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>user_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Идентификатор пользователя</td></tr><tr><td><strong>admin_rights</strong></td><td style="text-align: center;"><a href="/type/ChatAdminRights">ChatAdminRights</a></td><td>Права администратора для создателя</td></tr><tr><td><strong>rank</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/string">string</a></td><td><a href="/api/rank">Звание »</a> участника; если не задано, по умолчанию используется «Owner».</td></tr></tbody></table>

### Тип

[ChannelParticipant](/type/ChannelParticipant/)

### Связанные страницы

#### [Звание](/api/rank/)

Участники групповых чатов (как обычных групп, так и супергрупп) могут добавить рядом со своим именем тег — чтобы указать свою роль на работе, что они изучают в учебном заведении и прочее.
