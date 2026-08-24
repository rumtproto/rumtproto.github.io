---
title: "auth.resetAuthorizations"
original: "https://core.telegram.org/method/auth.resetAuthorizations"
section: ref
kind: method
description: "Завершает все авторизованные сессии пользователя, кроме текущей."
layout: layout.njk
---

# auth.resetAuthorizations

Завершает все авторизованные сессии пользователя, кроме текущей.

После вызова этого метода необходимо заново зарегистрировать текущее устройство методом [account.registerDevice](/method/account.registerDevice/)

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
auth.resetAuthorizations#9fab0d1a = Bool;
```

### Параметры

Этот конструктор не требует параметров.

### Результат

[Bool](/type/Bool/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>406</td><td>FRESH_RESET_AUTHORISATION_FORBIDDEN</td><td>Нельзя завершить другие сессии, если с момента входа в текущую сессию прошло менее 24 часов.</td></tr></tbody></table>

### Связанные страницы

#### [account.registerDevice](/method/account.registerDevice/)

Зарегистрировать устройство для получения [PUSH-уведомлений](/api/push-updates/)
