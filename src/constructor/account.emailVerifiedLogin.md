---
title: "account.emailVerifiedLogin"
original: "https://core.telegram.org/constructor/account.emailVerifiedLogin"
section: ref
kind: constructor
description: "Адрес электронной почты подтверждён верно, и на него только что был отправлен код для входа."
layout: layout.njk
---

# account.emailVerifiedLogin

Адрес электронной почты подтверждён верно, и на него только что был отправлен код для входа.

```
account.emailVerifiedLogin#e1bb0d61 email:string sent_code:auth.SentCode = account.EmailVerified;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>email</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Подтверждённый адрес электронной почты.</td></tr><tr><td><strong>sent_code</strong></td><td style="text-align: center;"><a href="/type/auth.SentCode">auth.SentCode</a></td><td>Информация об отправленном <a href="/api/auth">коде для входа</a></td></tr></tbody></table>

### Тип

[account.EmailVerified](/type/account.EmailVerified/)

### Связанные страницы

#### [Авторизация пользователя](/api/auth/)

Как зарегистрировать телефон пользователя, чтобы начать работу с API.
