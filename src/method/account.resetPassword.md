---
title: "account.resetPassword"
original: "https://core.telegram.org/method/account.resetPassword"
section: ref
kind: method
description: "Начать сброс пароля двухфакторной аутентификации: может использоваться, только если пользователь уже вошёл в аккаунт, подробнее см. здесь »"
layout: layout.njk
---

# account.resetPassword

Начать сброс пароля двухфакторной аутентификации: может использоваться, только если пользователь уже вошёл в аккаунт, [подробнее см. здесь »](/api/srp/#password-reset)

```
account.resetPasswordFailedWait#e3779861 retry_date:int = account.ResetPasswordResult;
account.resetPasswordRequestedWait#e9effc7d until_date:int = account.ResetPasswordResult;
account.resetPasswordOk#e926d63e = account.ResetPasswordResult;
---functions---
account.resetPassword#9308ce1b = account.ResetPasswordResult;
```

### Параметры

Этот конструктор не требует параметров.

### Результат

[account.ResetPasswordResult](/type/account.ResetPasswordResult/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>PASSWORD_EMPTY</td><td>Указанный пароль пуст.</td></tr></tbody></table>

### Связанные страницы

#### [Двухфакторная аутентификация](/api/srp/)

Как войти в аккаунт пользователя, если включена двухфакторная аутентификация, и как сменить пароль.
