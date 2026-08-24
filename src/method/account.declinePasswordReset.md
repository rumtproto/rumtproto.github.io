---
title: "account.declinePasswordReset"
original: "https://core.telegram.org/method/account.declinePasswordReset"
section: ref
kind: method
description: "Отменить незавершённый сброс пароля двухфакторной аутентификации, подробнее см. здесь »"
layout: layout.njk
---

# account.declinePasswordReset

Отменить незавершённый сброс пароля двухфакторной аутентификации, [подробнее см. здесь »](/api/srp/#password-reset)

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
account.declinePasswordReset#4c9409f6 = Bool;
```

### Параметры

Этот конструктор не требует параметров.

### Результат

[Bool](/type/Bool/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>RESET_REQUEST_MISSING</td><td>Сброс пароля не выполняется.</td></tr></tbody></table>

### Связанные страницы

#### [Двухфакторная аутентификация](/api/srp/)

Как войти в аккаунт пользователя, если включена двухфакторная аутентификация, и как сменить пароль.
