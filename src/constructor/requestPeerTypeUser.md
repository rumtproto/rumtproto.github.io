---
title: "requestPeerTypeUser"
original: "https://core.telegram.org/constructor/requestPeerTypeUser"
section: ref
kind: constructor
description: "Выбрать пользователя."
layout: layout.njk
---

# requestPeerTypeUser

Выбрать пользователя.

```
requestPeerTypeUser#5f3b8a00 flags:# bot:flags.0?Bool premium:flags.1?Bool = RequestPeerType;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>bot</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/Bool">Bool</a></td><td>Разрешать ли выбор только ботов.</td></tr><tr><td><strong>premium</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/Bool">Bool</a></td><td>Разрешать ли выбор только пользователей <a href="/api/premium">Premium</a>.</td></tr></tbody></table>

### Тип

[RequestPeerType](/type/RequestPeerType/)

### Связанные страницы

#### [Telegram Premium](/api/premium/)

Telegram Premium — необязательная подписка, которая открывает дополнительные эксклюзивные возможности на стороне клиента и API и одновременно помогает поддерживать разработку приложения.
