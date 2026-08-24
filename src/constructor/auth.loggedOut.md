---
title: "auth.loggedOut"
original: "https://core.telegram.org/constructor/auth.loggedOut"
section: ref
kind: constructor
description: "Токен будущей авторизации », который будет использоваться при последующих авторизациях"
layout: layout.njk
---

# auth.loggedOut

[Токен будущей авторизации »](/api/auth/#future-auth-tokens), который будет использоваться при последующих авторизациях

```
auth.loggedOut#c3a2835f flags:# future_auth_token:flags.0?bytes = auth.LoggedOut;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>future_auth_token</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/bytes">bytes</a></td><td><a href="/api/auth#future-auth-tokens">Токен будущей авторизации »</a>, который следует использовать при последующих авторизациях</td></tr></tbody></table>

### Тип

[auth.LoggedOut](/type/auth.LoggedOut/)

### Связанные страницы

#### [Авторизация пользователя](/api/auth/)

Как зарегистрировать телефон пользователя, чтобы начать работу с API.
