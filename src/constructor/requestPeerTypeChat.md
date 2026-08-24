---
title: "requestPeerTypeChat"
original: "https://core.telegram.org/constructor/requestPeerTypeChat"
section: ref
kind: constructor
description: "Выбрать чат или супергруппу"
layout: layout.njk
---

# requestPeerTypeChat

Выбрать чат или супергруппу

```
requestPeerTypeChat#c9f06e1b flags:# creator:flags.0?true bot_participant:flags.5?true has_username:flags.3?Bool forum:flags.4?Bool user_admin_rights:flags.1?ChatAdminRights bot_admin_rights:flags.2?ChatAdminRights = RequestPeerType;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>creator</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Разрешать ли выбор только тех чатов или супергрупп, которые созданы текущим пользователем.</td></tr><tr><td><strong>bot_participant</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.5?<a href="/constructor/true">true</a></td><td>Разрешать ли выбор только тех чатов или супергрупп, в которых бот является участником.</td></tr><tr><td><strong>has_username</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.3?<a href="/type/Bool">Bool</a></td><td>Если указано, разрешает выбирать только каналы с именем пользователя или только каналы без него — в зависимости от значения <a href="/type/Bool">Bool</a>.</td></tr><tr><td><strong>forum</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.4?<a href="/type/Bool">Bool</a></td><td>Если указано, разрешает выбирать только чаты или супергруппы, которые являются или не являются <a href="/api/forum">форумами</a>, в соответствии со значением <a href="/type/Bool">Bool</a>.</td></tr><tr><td><strong>user_admin_rights</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/ChatAdminRights">ChatAdminRights</a></td><td>Если указано, разрешает выбирать только чаты или супергруппы, в которых текущий пользователь является администратором как минимум с указанными правами администратора.</td></tr><tr><td><strong>bot_admin_rights</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/type/ChatAdminRights">ChatAdminRights</a></td><td>Если указано, разрешает выбирать только чаты или супергруппы, в которых бот является администратором как минимум с указанными правами администратора.</td></tr></tbody></table>

### Тип

[RequestPeerType](/type/RequestPeerType/)

### Связанные страницы

#### [Bool](/type/Bool/)

Логический тип.

#### [Темы форума](/api/forum/)

Telegram позволяет создавать форумы с несколькими самостоятельными темами.
