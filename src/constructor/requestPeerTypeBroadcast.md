---
title: "requestPeerTypeBroadcast"
original: "https://core.telegram.org/constructor/requestPeerTypeBroadcast"
section: ref
kind: constructor
description: "Выбрать канал"
layout: layout.njk
---

# requestPeerTypeBroadcast

Выбрать канал

```
requestPeerTypeBroadcast#339bef6c flags:# creator:flags.0?true has_username:flags.3?Bool user_admin_rights:flags.1?ChatAdminRights bot_admin_rights:flags.2?ChatAdminRights = RequestPeerType;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>creator</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Разрешать ли выбор только тех каналов, которые созданы текущим пользователем.</td></tr><tr><td><strong>has_username</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.3?<a href="/type/Bool">Bool</a></td><td>Если указано, разрешает выбирать только каналы с именем пользователя или только каналы без него — в зависимости от значения <a href="/type/Bool">Bool</a>.</td></tr><tr><td><strong>user_admin_rights</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/ChatAdminRights">ChatAdminRights</a></td><td>Если указано, разрешает выбирать только каналы, в которых текущий пользователь является администратором как минимум с указанными правами администратора.</td></tr><tr><td><strong>bot_admin_rights</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/type/ChatAdminRights">ChatAdminRights</a></td><td>Если указано, разрешает выбирать только каналы, в которых бот является администратором как минимум с указанными правами администратора.</td></tr></tbody></table>

### Тип

[RequestPeerType](/type/RequestPeerType/)

### Связанные страницы

#### [Bool](/type/Bool/)

Логический тип.
