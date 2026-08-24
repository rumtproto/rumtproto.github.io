---
title: "account.ResetPasswordResult"
original: "https://core.telegram.org/type/account.ResetPasswordResult"
section: ref
kind: type
description: "Результат запроса account.resetPassword."
layout: layout.njk
---

# account.ResetPasswordResult

Результат запроса [account.resetPassword](/method/account.resetPassword/).

```
account.resetPasswordFailedWait#e3779861 retry_date:int = account.ResetPasswordResult;
account.resetPasswordRequestedWait#e9effc7d until_date:int = account.ResetPasswordResult;
account.resetPasswordOk#e926d63e = account.ResetPasswordResult;

---functions---

account.resetPassword#9308ce1b = account.ResetPasswordResult;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/account.resetPasswordFailedWait">account.resetPasswordFailedWait</a></td><td>Недавно вы запросили сброс пароля, который был отменён; дождитесь указанной даты, прежде чем запрашивать новый сброс.</td></tr><tr><td><a href="/constructor/account.resetPasswordRequestedWait">account.resetPasswordRequestedWait</a></td><td>Сброс пароля успешно запрошен; дождитесь указанной даты, прежде чем завершать сброс.</td></tr><tr><td><a href="/constructor/account.resetPasswordOk">account.resetPasswordOk</a></td><td>Пароль двухфакторной аутентификации успешно сброшен.</td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/account.resetPassword">account.resetPassword</a></td><td>Начать сброс пароля двухфакторной аутентификации: может использоваться, только если пользователь уже вошёл в аккаунт, <a href="/api/srp#password-reset">подробнее см. здесь »</a></td></tr></tbody></table>

### Связанные страницы

#### [account.resetPassword](/method/account.resetPassword/)

Начать сброс пароля двухфакторной аутентификации: может использоваться, только если пользователь уже вошёл в аккаунт, [подробнее см. здесь »](/api/srp/#password-reset)
