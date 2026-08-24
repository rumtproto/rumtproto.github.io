---
title: "account.setAccountTTL"
original: "https://core.telegram.org/method/account.setAccountTTL"
section: ref
kind: method
description: "Задать срок самоуничтожения аккаунта"
layout: layout.njk
---

# account.setAccountTTL

Задать срок самоуничтожения аккаунта

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
account.setAccountTTL#2442485e ttl:AccountDaysTTL = Bool;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>ttl</strong></td><td style="text-align: center;"><a href="/type/AccountDaysTTL">AccountDaysTTL</a></td><td>Время жизни в днях</td></tr></tbody></table>

### Результат

[Bool](/type/Bool/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>TTL_DAYS_INVALID</td><td>[@term:TTL] Указанное значение TTL недействительно.</td></tr></tbody></table>
