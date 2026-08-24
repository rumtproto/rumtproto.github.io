---
title: "account.confirmPasswordEmail"
original: "https://core.telegram.org/method/account.confirmPasswordEmail"
section: ref
kind: method
description: "Подтвердить адрес электронной почты для использования в качестве способа восстановления двухфакторной аутентификации."
layout: layout.njk
---

# account.confirmPasswordEmail

Подтвердить адрес электронной почты для использования в качестве [способа восстановления двухфакторной аутентификации](/api/srp/).

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
account.confirmPasswordEmail#8fdf1920 code:string = Bool;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>code</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Код, полученный после <a href="/api/srp#email-verification">настройки почты для восстановления</a></td></tr></tbody></table>

### Результат

[Bool](/type/Bool/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>CODE_INVALID</td><td>Недействительный код.</td></tr><tr><td>400</td><td>EMAIL_HASH_EXPIRED</td><td>Срок действия хеша электронной почты истёк.</td></tr></tbody></table>

### Связанные страницы

#### [Двухфакторная аутентификация](/api/srp/)

Как войти в аккаунт пользователя, если включена двухфакторная аутентификация, и как сменить пароль.
