---
title: "auth.dropTempAuthKeys"
original: "https://core.telegram.org/method/auth.dropTempAuthKeys"
section: ref
kind: method
description: "Удалить все временные авторизационные ключи, **кроме** указанных"
layout: layout.njk
---

# auth.dropTempAuthKeys

Удалить все временные авторизационные ключи, **кроме** указанных

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
auth.dropTempAuthKeys#8e48a188 except_auth_keys:Vector<long> = Bool;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>except_auth_keys</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/long">long</a>&gt;</td><td>Авторизационные ключи, которые <strong>не следует</strong> сбрасывать.</td></tr></tbody></table>

### Результат

[Bool](/type/Bool/)

### Этот метод доступен и пользователям, и ботам
