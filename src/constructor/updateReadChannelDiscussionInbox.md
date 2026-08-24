---
title: "updateReadChannelDiscussionInbox"
original: "https://core.telegram.org/constructor/updateReadChannelDiscussionInbox"
section: ref
kind: constructor
description: "Входящие комментарии в обсуждении были отмечены как прочитанные"
layout: layout.njk
---

# updateReadChannelDiscussionInbox

Входящие комментарии в [обсуждении](/api/threads/) были отмечены как прочитанные

```
updateReadChannelDiscussionInbox#d6b19546 flags:# channel_id:long top_msg_id:int read_max_id:int broadcast_id:flags.0?long broadcast_post:flags.0?int = Update;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>channel_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td><a href="/api/channel">Идентификатор группы обсуждения</a></td></tr><tr><td><strong>top_msg_id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Идентификатор сообщения в группе, с которого началась <a href="/api/threads">ветка</a> (сообщение в связанной группе обсуждения)</td></tr><tr><td><strong>read_max_id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Идентификатор последнего прочитанного входящего сообщения для этой <a href="/api/threads">ветки</a></td></tr><tr><td><strong>broadcast_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/long">long</a></td><td>Если установлено, содержит идентификатор <a href="/api/channel">канала</a>, в котором находится пост, начавший <a href="/api/threads">ветку комментариев</a> в группе обсуждения (<code>channel_id</code>)</td></tr><tr><td><strong>broadcast_post</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/int">int</a></td><td>Если установлено, содержит идентификатор поста канала, начавшего <a href="/api/threads">ветку комментариев</a></td></tr></tbody></table>

### Тип

[Update](/type/Update/)

### Связанные страницы

#### [Каналы, супергруппы, гигагруппы и обычные группы](/api/channel/)

Как работать с каналами, супергруппами, гигагруппами и обычными группами и чем они друг от друга отличаются.

#### [Треды сообщений](/api/threads/)

Благодаря веткам обсуждения Telegram позволяет комментировать пост канала или обычное сообщение супергруппы.
