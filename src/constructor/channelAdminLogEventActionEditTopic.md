---
title: "channelAdminLogEventActionEditTopic"
original: "https://core.telegram.org/constructor/channelAdminLogEventActionEditTopic"
section: ref
kind: constructor
description: "Тема форума была изменена"
layout: layout.njk
---

# channelAdminLogEventActionEditTopic

[Тема форума](/api/forum/#forum-topics) была изменена

```
channelAdminLogEventActionEditTopic#f06fe208 prev_topic:ForumTopic new_topic:ForumTopic = ChannelAdminLogEventAction;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>prev_topic</strong></td><td style="text-align: center;"><a href="/type/ForumTopic">ForumTopic</a></td><td>Сведения о предыдущей теме</td></tr><tr><td><strong>new_topic</strong></td><td style="text-align: center;"><a href="/type/ForumTopic">ForumTopic</a></td><td>Новые сведения о теме</td></tr></tbody></table>

### Тип

[ChannelAdminLogEventAction](/type/ChannelAdminLogEventAction/)

### Связанные страницы

#### [Темы форума](/api/forum/)

Telegram позволяет создавать форумы с несколькими самостоятельными темами.
