---
title: "chatInviteImporter"
original: "https://core.telegram.org/constructor/chatInviteImporter"
section: ref
kind: constructor
description: "Когда и какой пользователь вступил в чат по пригласительной ссылке"
layout: layout.njk
---

# chatInviteImporter

Когда и какой пользователь вступил в чат по пригласительной ссылке

```
chatInviteImporter#8c5adfd9 flags:# requested:flags.0?true via_chatlist:flags.3?true user_id:long date:int about:flags.2?string approved_by:flags.1?long = ChatInviteImporter;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>requested</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Есть ли у этого пользователя ожидающая рассмотрения <a href="/api/invites#join-requests">заявка на вступление »</a></td></tr><tr><td><strong>via_chatlist</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.3?<a href="/constructor/true">true</a></td><td>Участник вступил, импортировав <a href="/api/links#chat-folder-links">глубокую ссылку на папку чатов »</a>.</td></tr><tr><td><strong>user_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Пользователь</td></tr><tr><td><strong>date</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Когда пользователь присоединился</td></tr><tr><td><strong>about</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/type/string">string</a></td><td>Для пользователей с ожидающими заявками содержит биографию пользователя, подавшего заявку на вступление</td></tr><tr><td><strong>approved_by</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/long">long</a></td><td>Администратор, одобривший <a href="/api/invites#join-requests">заявку на вступление »</a> пользователя</td></tr></tbody></table>

### Тип

[ChatInviteImporter](/type/ChatInviteImporter/)

### Связанные страницы

#### [Пригласительные ссылки](/api/invites/)

У чатов и каналов может быть публичное имя пользователя или закрытая пригласительная ссылка; закрытые пригласительные ссылки дополнительно могут требовать заявку на вступление от каждого пользователя.

#### [Глубокие ссылки](/api/links/)

Клиенты Telegram обязаны обрабатывать особые глубокие ссылки tg:// и t.me, встречающиеся в сообщениях, сущностях-ссылках и в других приложениях, регистрируя обработчики в операционной системе.
