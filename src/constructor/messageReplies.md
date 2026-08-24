---
title: "messageReplies"
original: "https://core.telegram.org/constructor/messageReplies"
section: ref
kind: constructor
description: "Информация о разделе комментариев к публикации канала, простой ветке сообщений, теме форума или теме в личных сообщениях (все эти возможности в конечном счёте основаны на ветках…"
layout: layout.njk
---

# messageReplies

Информация о [разделе комментариев к публикации канала, простой ветке сообщений, теме форума или теме в личных сообщениях](/api/threads/) (все эти возможности в конечном счёте основаны на ветках сообщений).

```
messageReplies#83d60fc2 flags:# comments:flags.0?true replies:int replies_pts:int recent_repliers:flags.1?Vector<Peer> channel_id:flags.0?long max_id:flags.2?int read_max_id:flags.3?int = MessageReplies;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>comments</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Содержит ли этот конструктор сведения о <a href="/api/threads">разделе комментариев к посту канала или об обычной ветке сообщений</a></td></tr><tr><td><strong>replies</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Содержит общее число ответов в этой ветке обсуждения или в разделе комментариев.</td></tr><tr><td><strong>replies_pts</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td><a href="/api/updates">PTS</a> сообщения, с которого началась эта ветка обсуждения.</td></tr><tr><td><strong>recent_repliers</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/Peer">Peer</a>&gt;</td><td>Для комментариев к постам канала содержит сведения о нескольких последних авторах комментариев в конкретной ветке, чтобы клиент мог показать в предпросмотре небольшой список их аватаров.</td></tr><tr><td><strong>channel_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/long">long</a></td><td>Для комментариев к постам канала содержит идентификатор связанной <a href="/api/discussion">группы обсуждения</a></td></tr><tr><td><strong>max_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/type/int">int</a></td><td>Идентификатор последнего сообщения в этой ветке или разделе комментариев.</td></tr><tr><td><strong>read_max_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.3?<a href="/type/int">int</a></td><td>Содержит идентификатор последнего прочитанного сообщения в этой ветке обсуждения или в разделе комментариев.</td></tr></tbody></table>

### Тип

[MessageReplies](/type/MessageReplies/)

### Связанные страницы

#### [Треды сообщений](/api/threads/)

Благодаря веткам обсуждения Telegram позволяет комментировать пост канала или обычное сообщение супергруппы.

#### [Работа с обновлениями](/api/updates/)

Как подписаться на обновления и правильно их обрабатывать.

#### [Группы обсуждения](/api/discussion/)

Группы можно связать с каналом в качестве группы обсуждения, чтобы пользователи могли обсуждать посты.
