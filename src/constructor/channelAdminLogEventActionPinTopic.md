---
title: "channelAdminLogEventActionPinTopic"
original: "https://core.telegram.org/constructor/channelAdminLogEventActionPinTopic"
section: ref
kind: constructor
description: "Тема форума была закреплена или откреплена"
layout: layout.njk
---

# channelAdminLogEventActionPinTopic

[Тема форума](/api/forum/#forum-topics) была закреплена или откреплена

```
channelAdminLogEventActionPinTopic#5d8d353b flags:# prev_topic:flags.0?ForumTopic new_topic:flags.1?ForumTopic = ChannelAdminLogEventAction;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>prev_topic</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/ForumTopic">ForumTopic</a></td><td>Сведения о предыдущей теме</td></tr><tr><td><strong>new_topic</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/ForumTopic">ForumTopic</a></td><td>Новые сведения о теме</td></tr></tbody></table>

### Тип

[ChannelAdminLogEventAction](/type/ChannelAdminLogEventAction/)

### Связанные страницы

#### [Темы форума](/api/forum/)

Telegram позволяет создавать форумы с несколькими самостоятельными темами.
