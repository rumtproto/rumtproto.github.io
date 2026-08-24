---
title: "account.setAuthorizationTTL"
original: "https://core.telegram.org/method/account.setAuthorizationTTL"
section: ref
kind: method
description: "Задать время жизни текущей сессии"
layout: layout.njk
---

# account.setAuthorizationTTL

Задать время жизни текущей сессии

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
account.setAuthorizationTTL#bf899aa0 authorization_ttl_days:int = Bool;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>authorization_ttl_days</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Время жизни текущей сессии в днях</td></tr></tbody></table>

### Результат

[Bool](/type/Bool/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>406</td><td>FRESH_RESET_AUTHORISATION_FORBIDDEN</td><td>Нельзя завершить другие сессии, если с момента входа в текущую сессию прошло менее 24 часов.</td></tr><tr><td>400</td><td>TTL_DAYS_INVALID</td><td>[@term:TTL] Указанное значение TTL недействительно.</td></tr></tbody></table>
