---
title: "auth.passwordRecovery"
original: "https://core.telegram.org/constructor/auth.passwordRecovery"
section: ref
kind: constructor
description: "Сведения о восстановлении пароля двухфакторной аутентификации; только для аккаунтов с настроенной почтой для восстановления."
layout: layout.njk
---

# auth.passwordRecovery

Сведения о восстановлении [пароля двухфакторной аутентификации](/api/srp/); только для аккаунтов с [настроенной почтой для восстановления](/api/srp/#email-verification).

```
auth.passwordRecovery#137948a5 email_pattern:string = auth.PasswordRecovery;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>email_pattern</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Адрес электронной почты, на который был отправлен код восстановления, должен соответствовать этому <a href="/api/pattern">шаблону</a>.</td></tr></tbody></table>

### Тип

[auth.PasswordRecovery](/type/auth.PasswordRecovery/)

### Связанные страницы

#### [Сопоставление с шаблоном](/api/pattern/)

Некоторые методы требуют, чтобы клиент проверил, соответствуют ли данные, полученные из внешнего источника, определённому шаблону.

#### [Двухфакторная аутентификация](/api/srp/)

Как войти в аккаунт пользователя, если включена двухфакторная аутентификация, и как сменить пароль.
