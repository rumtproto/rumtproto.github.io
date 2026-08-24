---
title: "inputCheckPasswordSRP"
original: "https://core.telegram.org/constructor/inputCheckPasswordSRP"
section: ref
kind: constructor
description: "Конструктор для проверки правильности пароля двухфакторной аутентификации по SRP (см. SRP)"
layout: layout.njk
---

# inputCheckPasswordSRP

Конструктор для проверки правильности пароля двухфакторной аутентификации по SRP (см. [SRP](/api/srp/))

```
inputCheckPasswordSRP#d27ff082 srp_id:long A:bytes M1:bytes = InputCheckPasswordSRP;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>srp_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td><a href="/api/srp">SRP ID</a></td></tr><tr><td><strong>A</strong></td><td style="text-align: center;"><a href="/type/bytes">bytes</a></td><td>Параметр <code>A</code> (см. <a href="/api/srp">SRP</a>)</td></tr><tr><td><strong>M1</strong></td><td style="text-align: center;"><a href="/type/bytes">bytes</a></td><td>Параметр <code>M1</code> (см. <a href="/api/srp">SRP</a>)</td></tr></tbody></table>

### Тип

[InputCheckPasswordSRP](/type/InputCheckPasswordSRP/)

### Связанные страницы

#### [Двухфакторная аутентификация](/api/srp/)

Как войти в аккаунт пользователя, если включена двухфакторная аутентификация, и как сменить пароль.
