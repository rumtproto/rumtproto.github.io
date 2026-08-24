---
title: "channelParticipantsMentions"
original: "https://core.telegram.org/constructor/channelParticipantsMentions"
section: ref
kind: constructor
description: "Этот фильтр используется при поиске участников супергруппы для упоминания."
layout: layout.njk
---

# channelParticipantsMentions

Этот фильтр используется при поиске участников супергруппы для упоминания.  
Этот фильтр автоматически исключает анонимных администраторов и возвращает даже тех пользователей, которые не являются участниками, но ответили в определённом [обсуждении](/api/threads/) через [раздел комментариев](/api/threads/#channel-comments) канала.

```
channelParticipantsMentions#e04b5ceb flags:# q:flags.0?string top_msg_id:flags.1?int = ChannelParticipantsFilter;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>q</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/string">string</a></td><td>Фильтр по имени или имени пользователя</td></tr><tr><td><strong>top_msg_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/int">int</a></td><td>Искать только среди пользователей, писавших в этой <a href="/api/threads">ветке</a></td></tr></tbody></table>

### Тип

[ChannelParticipantsFilter](/type/ChannelParticipantsFilter/)

### Связанные страницы

#### [Треды сообщений](/api/threads/)

Благодаря веткам обсуждения Telegram позволяет комментировать пост канала или обычное сообщение супергруппы.
