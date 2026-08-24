---
title: "updateUserTyping"
original: "https://core.telegram.org/constructor/updateUserTyping"
section: ref
kind: constructor
description: "Пользователь готовит сообщение: набирает текст, записывает, загружает и т. п. Это обновление действительно 6 секунд. Если в течение 6 секунд не поступит новых обновлений такого…"
layout: layout.njk
---

# updateUserTyping

Пользователь готовит сообщение: набирает текст, записывает, загружает и т. п. Это обновление действительно 6 секунд. Если в течение 6 секунд не поступит новых обновлений такого рода, следует считать, что пользователь прекратил своё действие

```
updateUserTyping#2a17bf5c flags:# user_id:long top_msg_id:flags.0?int action:SendMessageAction = Update;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>user_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Идентификатор пользователя</td></tr><tr><td><strong>top_msg_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/int">int</a></td><td>Если установлено, это уведомление было отправлено в <a href="/api/forum#bot-forums">теме форума бота »</a>.</td></tr><tr><td><strong>action</strong></td><td style="text-align: center;"><a href="/type/SendMessageAction">SendMessageAction</a></td><td>Тип действия</td></tr></tbody></table>

### Тип

[Update](/type/Update/)

### Связанные страницы

#### [Темы форума](/api/forum/)

Telegram позволяет создавать форумы с несколькими самостоятельными темами.
