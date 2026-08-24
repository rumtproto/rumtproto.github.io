---
title: "auth.requestPasswordRecovery"
original: "https://core.telegram.org/method/auth.requestPasswordRecovery"
section: ref
kind: method
description: "Запросить код восстановления пароля двухфакторной аутентификации; доступно только для аккаунтов с настроенной почтой для восстановления."
layout: layout.njk
---

# auth.requestPasswordRecovery

Запросить код восстановления [пароля двухфакторной аутентификации](/api/srp/); доступно только для аккаунтов с [настроенной почтой для восстановления](/api/srp/#email-verification).

```
auth.passwordRecovery#137948a5 email_pattern:string = auth.PasswordRecovery;
---functions---
auth.requestPasswordRecovery#d897bc66 = auth.PasswordRecovery;
```

### Параметры

Этот конструктор не требует параметров.

### Результат

[auth.PasswordRecovery](/type/auth.PasswordRecovery/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>PASSWORD_EMPTY</td><td>Указанный пароль пуст.</td></tr><tr><td>400</td><td>PASSWORD_RECOVERY_NA</td><td>Адрес электронной почты не задан, восстановить пароль по электронной почте невозможно.</td></tr></tbody></table>

### Связанные страницы

#### [Двухфакторная аутентификация](/api/srp/)

Как войти в аккаунт пользователя, если включена двухфакторная аутентификация, и как сменить пароль.
