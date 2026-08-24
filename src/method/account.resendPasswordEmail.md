---
title: "account.resendPasswordEmail"
original: "https://core.telegram.org/method/account.resendPasswordEmail"
section: ref
kind: method
description: "Повторно отправить код для подтверждения адреса электронной почты, используемого как способ восстановления 2FA."
layout: layout.njk
---

# account.resendPasswordEmail

Повторно отправить код для подтверждения адреса электронной почты, используемого как [способ восстановления 2FA](/api/srp/).

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
account.resendPasswordEmail#7a7f2a15 = Bool;
```

### Параметры

Этот конструктор не требует параметров.

### Результат

[Bool](/type/Bool/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>EMAIL_HASH_EXPIRED</td><td>Срок действия хеша электронной почты истёк.</td></tr></tbody></table>

### Связанные страницы

#### [Двухфакторная аутентификация](/api/srp/)

Как войти в аккаунт пользователя, если включена двухфакторная аутентификация, и как сменить пароль.
