---
title: "messageViews"
original: "https://core.telegram.org/constructor/messageViews"
section: ref
kind: constructor
description: "Счётчик просмотров и пересылок + сведения об ответах на конкретное сообщение"
layout: layout.njk
---

# messageViews

Счётчик просмотров и пересылок + сведения об ответах на конкретное сообщение

```
messageViews#455b853d flags:# views:flags.0?int forwards:flags.1?int replies:flags.2?MessageReplies = MessageViews;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>views</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/int">int</a></td><td>Количество просмотров сообщения</td></tr><tr><td><strong>forwards</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/int">int</a></td><td>Число пересылок сообщения</td></tr><tr><td><strong>replies</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/type/MessageReplies">MessageReplies</a></td><td>Сведения об ответах на сообщение и о <a href="/api/threads">ветке обсуждения</a></td></tr></tbody></table>

### Тип

[MessageViews](/type/MessageViews/)

### Связанные страницы

#### [Треды сообщений](/api/threads/)

Благодаря веткам обсуждения Telegram позволяет комментировать пост канала или обычное сообщение супергруппы.
