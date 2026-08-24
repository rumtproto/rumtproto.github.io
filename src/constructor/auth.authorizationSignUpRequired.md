---
title: "auth.authorizationSignUpRequired"
original: "https://core.telegram.org/constructor/auth.authorizationSignUpRequired"
section: ref
kind: constructor
description: "Учётной записи с этим номером телефона в Telegram не существует: пользователю необходимо ввести основные сведения и зарегистрироваться"
layout: layout.njk
---

# auth.authorizationSignUpRequired

Учётной записи с этим номером телефона в Telegram не существует: пользователю необходимо [ввести основные сведения и зарегистрироваться](/api/auth/)

```
auth.authorizationSignUpRequired#44747e9a flags:# terms_of_service:flags.0?help.TermsOfService = auth.Authorization;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>terms_of_service</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/help.TermsOfService">help.TermsOfService</a></td><td>Условия использования Telegram: пользователь обязан прочитать и принять условия использования перед регистрацией в Telegram</td></tr></tbody></table>

### Тип

[auth.Authorization](/type/auth.Authorization/)

### Связанные страницы

#### [Авторизация пользователя](/api/auth/)

Как зарегистрировать телефон пользователя, чтобы начать работу с API.
