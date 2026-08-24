---
title: "account.resetWebAuthorization"
original: "https://core.telegram.org/method/account.resetWebAuthorization"
section: ref
kind: method
description: "Завершить активную веб-сессию telegram login"
layout: layout.njk
---

# account.resetWebAuthorization

Завершить активную веб-сессию [telegram login](https://core.telegram.org/widgets/login)

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
account.resetWebAuthorization#2d01b9ef hash:long = Bool;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>hash</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>[@term:hash] Хеш <a href="/constructor/webAuthorization">сессии</a></td></tr></tbody></table>

### Результат

[Bool](/type/Bool/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>HASH_INVALID</td><td>Указанный хеш недействителен.</td></tr></tbody></table>

### Связанные страницы

#### [webAuthorization](/constructor/webAuthorization/)

Представляет бота, авторизованного через [виджет входа Telegram](https://core.telegram.org/widgets/login)

#### [Виджет входа через Telegram](https://core.telegram.org/widgets/login)
