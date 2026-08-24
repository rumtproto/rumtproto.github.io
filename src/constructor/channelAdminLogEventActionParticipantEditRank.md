---
title: "channelAdminLogEventActionParticipantEditRank"
original: "https://core.telegram.org/constructor/channelAdminLogEventActionParticipantEditRank"
section: ref
kind: constructor
description: "Звание » участника изменено."
layout: layout.njk
---

# channelAdminLogEventActionParticipantEditRank

[Звание »](/api/rank/) участника изменено.

```
channelAdminLogEventActionParticipantEditRank#5806b4ec user_id:long prev_rank:string new_rank:string = ChannelAdminLogEventAction;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>user_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Идентификатор пользователя.</td></tr><tr><td><strong>prev_rank</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Предыдущая метка.</td></tr><tr><td><strong>new_rank</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Новое звание.</td></tr></tbody></table>

### Тип

[ChannelAdminLogEventAction](/type/ChannelAdminLogEventAction/)

### Связанные страницы

#### [Звание](/api/rank/)

Участники групповых чатов (как обычных групп, так и супергрупп) могут добавить рядом со своим именем тег — чтобы указать свою роль на работе, что они изучают в учебном заведении и прочее.
