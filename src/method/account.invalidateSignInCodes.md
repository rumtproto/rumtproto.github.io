---
title: "account.invalidateSignInCodes"
original: "https://core.telegram.org/method/account.invalidateSignInCodes"
section: ref
kind: method
description: "Аннулировать указанные коды входа; подробнее см. здесь »."
layout: layout.njk
---

# account.invalidateSignInCodes

Аннулировать указанные коды входа; подробнее см. [здесь »](/api/auth/#invalidating-login-codes).

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
account.invalidateSignInCodes#ca8ae8ba codes:Vector<string> = Bool;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>codes</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/string">string</a>&gt;</td><td>Коды входа, которые нужно аннулировать.</td></tr></tbody></table>

### Результат

[Bool](/type/Bool/)

### Этот метод доступен только пользователям

### Связанные страницы

#### [Авторизация пользователя](/api/auth/)

Как зарегистрировать телефон пользователя, чтобы начать работу с API.
