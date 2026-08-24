---
title: "updateDeleteScheduledMessages"
original: "https://core.telegram.org/constructor/updateDeleteScheduledMessages"
section: ref
kind: constructor
description: "Некоторые отложенные сообщения были удалены (или отправлены) из очереди отложенных сообщений чата"
layout: layout.njk
---

# updateDeleteScheduledMessages

Некоторые [отложенные сообщения](/api/scheduled-messages/) были удалены (или отправлены) из очереди отложенных сообщений чата

```
updateDeleteScheduledMessages#f2a71983 flags:# peer:Peer messages:Vector<int> sent_messages:flags.0?Vector<int> = Update;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/Peer">Peer</a></td><td>[@term:peer] Пир</td></tr><tr><td><strong>messages</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/int">int</a>&gt;</td><td>Удалённые отложенные сообщения</td></tr><tr><td><strong>sent_messages</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/int">int</a>&gt;</td><td>Если установлено, это обновление означает, что отложенные сообщения были отправлены (а не просто удалены из очереди отложенных).<br>В этом случае поле <code>messages</code> будет содержать идентификаторы отложенных сообщений для отправленных сообщений (изначально возвращённые в <a href="/constructor/updateNewScheduledMessage">updateNewScheduledMessage</a>), а <code>sent_messages</code> — реальные идентификаторы отправленных сообщений.</td></tr></tbody></table>

### Тип

[Update](/type/Update/)

### Связанные страницы

#### [updateNewScheduledMessage](/constructor/updateNewScheduledMessage/)

Сообщение добавлено в [очередь отложенных сообщений чата](/api/scheduled-messages/)

#### [Отложенные сообщения](/api/scheduled-messages/)

Telegram позволяет планировать отправку сообщений
