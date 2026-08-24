---
title: "contacts.resolveUsername"
original: "https://core.telegram.org/method/contacts.resolveUsername"
section: ref
kind: method
description: "Разрешить @username, чтобы получить сведения о пире"
layout: layout.njk
---

# contacts.resolveUsername

Разрешить @username, чтобы получить сведения о пире

```
contacts.resolvedPeer#7f077ad9 peer:Peer chats:Vector<Chat> users:Vector<User> = contacts.ResolvedPeer;
---functions---
contacts.resolveUsername#725afbbc flags:# username:string referer:flags.0?string = contacts.ResolvedPeer;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>username</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>@username, который нужно разрешить</td></tr><tr><td><strong>referer</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/string">string</a></td><td><a href="/api/links#referral-links">Идентификатор реферера из реферальных ссылок »</a>.</td></tr></tbody></table>

### Результат

[contacts.ResolvedPeer](/type/contacts.ResolvedPeer/)

### Этот метод доступен и пользователям, и ботам

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>CONNECTION_LAYER_INVALID</td><td>Недействительный слой.</td></tr><tr><td>400</td><td>STARREF_EXPIRED</td><td>Указанная реферальная ссылка недействительна.</td></tr><tr><td>400</td><td>USERNAME_INVALID</td><td>Указанное имя пользователя недействительно.</td></tr><tr><td>400</td><td>USERNAME_NOT_OCCUPIED</td><td>Указанное имя пользователя не занято.</td></tr></tbody></table>

### Связанные страницы

#### [Глубокие ссылки](/api/links/)

Клиенты Telegram обязаны обрабатывать особые глубокие ссылки tg:// и t.me, встречающиеся в сообщениях, сущностях-ссылках и в других приложениях, регистрируя обработчики в операционной системе.
