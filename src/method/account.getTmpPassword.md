---
title: "account.getTmpPassword"
original: "https://core.telegram.org/method/account.getTmpPassword"
section: ref
kind: method
description: "Получить временный платёжный пароль"
layout: layout.njk
---

# account.getTmpPassword

Получить временный платёжный пароль

```
account.tmpPassword#db64fd34 tmp_password:bytes valid_until:int = account.TmpPassword;
---functions---
account.getTmpPassword#449e0b51 password:InputCheckPasswordSRP period:int = account.TmpPassword;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>password</strong></td><td style="text-align: center;"><a href="/type/InputCheckPasswordSRP">InputCheckPasswordSRP</a></td><td>Параметры пароля SRP</td></tr><tr><td><strong>period</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Время, в течение которого временный пароль будет действителен, в секундах; должно быть от 60 до 86400</td></tr></tbody></table>

### Результат

[account.TmpPassword](/type/account.TmpPassword/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>PASSWORD_HASH_INVALID</td><td>Указанный хеш пароля недействителен.</td></tr><tr><td>400</td><td>SRP_A_INVALID</td><td>Указанное значение inputCheckPasswordSRP.A недействительно.</td></tr><tr><td>400</td><td>TMP_PASSWORD_DISABLED</td><td>Временный пароль отключён.</td></tr></tbody></table>
