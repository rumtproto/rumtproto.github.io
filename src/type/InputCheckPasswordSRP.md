---
title: "InputCheckPasswordSRP"
original: "https://core.telegram.org/type/InputCheckPasswordSRP"
section: ref
kind: type
description: "Конструкторы для проверки правильности пароля двухфакторной аутентификации по SRP."
layout: layout.njk
---

# InputCheckPasswordSRP

Конструкторы для проверки правильности [пароля двухфакторной аутентификации по SRP](/api/srp/).

Подробнее о порядке двухфакторной аутентификации для методов, которые её требуют, до и после входа см. [здесь »](/api/srp/#using-the-2fa-password).

```
inputCheckPasswordEmpty#9880f658 = InputCheckPasswordSRP;
inputCheckPasswordSRP#d27ff082 srp_id:long A:bytes M1:bytes = InputCheckPasswordSRP;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/inputCheckPasswordEmpty">inputCheckPasswordEmpty</a></td><td>Пароль не задан</td></tr><tr><td><a href="/constructor/inputCheckPasswordSRP">inputCheckPasswordSRP</a></td><td>Конструктор для проверки правильности пароля двухфакторной аутентификации по SRP (см. <a href="/api/srp">SRP</a>)</td></tr></tbody></table>

### Связанные страницы

#### [Двухфакторная аутентификация](/api/srp/)

Как войти в аккаунт пользователя, если включена двухфакторная аутентификация, и как сменить пароль.
