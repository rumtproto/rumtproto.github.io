---
title: "account.Password"
original: "https://core.telegram.org/type/account.Password"
section: ref
kind: type
description: "Настройки двухфакторной авторизации"
layout: layout.njk
---

# account.Password

Настройки двухфакторной авторизации

```
account.password#957b50fb flags:# has_recovery:flags.0?true has_secure_values:flags.1?true has_password:flags.2?true current_algo:flags.2?PasswordKdfAlgo srp_B:flags.2?bytes srp_id:flags.2?long hint:flags.3?string email_unconfirmed_pattern:flags.4?string new_algo:PasswordKdfAlgo new_secure_algo:SecurePasswordKdfAlgo secure_random:bytes pending_reset_date:flags.5?int login_email_pattern:flags.6?string = account.Password;

---functions---

account.getPassword#548a30f5 = account.Password;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/account.password">account.password</a></td><td>Настройки двухфакторной авторизации</td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/account.getPassword">account.getPassword</a></td><td>Получить настройки двухфакторной авторизации с паролем</td></tr></tbody></table>
