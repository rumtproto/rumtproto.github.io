---
title: "auth.PasswordRecovery"
original: "https://core.telegram.org/type/auth.PasswordRecovery"
section: ref
kind: type
description: "Сведения о восстановлении пароля двухфакторной аутентификации; только для аккаунтов с настроенной почтой для восстановления."
layout: layout.njk
---

# auth.PasswordRecovery

Сведения о восстановлении [пароля двухфакторной аутентификации](/api/srp/); только для аккаунтов с [настроенной почтой для восстановления](/api/srp/#email-verification).

```
auth.passwordRecovery#137948a5 email_pattern:string = auth.PasswordRecovery;

---functions---

auth.requestPasswordRecovery#d897bc66 = auth.PasswordRecovery;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/auth.passwordRecovery">auth.passwordRecovery</a></td><td>Данные для восстановления <a href="/api/srp">пароля двухэтапной аутентификации</a>; только для аккаунтов с <a href="/api/srp#email-verification">настроенной почтой для восстановления</a>.</td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/auth.requestPasswordRecovery">auth.requestPasswordRecovery</a></td><td>Запросить код восстановления <a href="/api/srp">пароля двухфакторной аутентификации</a>; доступно только для аккаунтов с <a href="/api/srp#email-verification">настроенной почтой для восстановления</a>.</td></tr></tbody></table>

### Связанные страницы

#### [Двухфакторная аутентификация](/api/srp/)

Как войти в аккаунт пользователя, если включена двухфакторная аутентификация, и как сменить пароль.
