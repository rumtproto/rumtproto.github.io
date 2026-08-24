---
title: "auth.sentCodeTypeSetUpEmailRequired"
original: "https://core.telegram.org/constructor/auth.sentCodeTypeSetUpEmailRequired"
section: ref
kind: constructor
description: "Для входа пользователь должен добавить и подтвердить адрес электронной почты, как описано здесь »."
layout: layout.njk
---

# auth.sentCodeTypeSetUpEmailRequired

Для входа пользователь должен добавить и подтвердить адрес электронной почты, как описано [здесь »](/api/auth/#email-verification).

```
auth.sentCodeTypeSetUpEmailRequired#a5491dea flags:# apple_signin_allowed:flags.0?true google_signin_allowed:flags.1?true = auth.SentCodeType;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>apple_signin_allowed</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Разрешена ли авторизация через Apple ID</td></tr><tr><td><strong>google_signin_allowed</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/constructor/true">true</a></td><td>Разрешена ли авторизация через Google ID</td></tr></tbody></table>

### Тип

[auth.SentCodeType](/type/auth.SentCodeType/)

### Связанные страницы

#### [Авторизация пользователя](/api/auth/)

Как зарегистрировать телефон пользователя, чтобы начать работу с API.
