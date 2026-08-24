---
title: "updateReadChannelDiscussionOutbox"
original: "https://core.telegram.org/constructor/updateReadChannelDiscussionOutbox"
section: ref
kind: constructor
description: "Исходящие комментарии в ветке обсуждения были отмечены как прочитанные"
layout: layout.njk
---

# updateReadChannelDiscussionOutbox

Исходящие комментарии в [ветке обсуждения](/api/threads/) были отмечены как прочитанные

```
updateReadChannelDiscussionOutbox#695c9e7c channel_id:long top_msg_id:int read_max_id:int = Update;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>channel_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td><a href="/api/channel">Идентификатор супергруппы</a></td></tr><tr><td><strong>top_msg_id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Идентификатор сообщения в группе, с которого началась <a href="/api/threads">ветка</a></td></tr><tr><td><strong>read_max_id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Идентификатор последнего прочитанного исходящего сообщения для этой <a href="/api/threads">ветки</a></td></tr></tbody></table>

### Тип

[Update](/type/Update/)

### Связанные страницы

#### [Каналы, супергруппы, гигагруппы и обычные группы](/api/channel/)

Как работать с каналами, супергруппами, гигагруппами и обычными группами и чем они друг от друга отличаются.

#### [Треды сообщений](/api/threads/)

Благодаря веткам обсуждения Telegram позволяет комментировать пост канала или обычное сообщение супергруппы.
