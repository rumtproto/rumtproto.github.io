---
title: "account.getPassword"
original: "https://core.telegram.org/method/account.getPassword"
section: ref
kind: method
description: "Получить настройки двухфакторной авторизации с паролем"
layout: layout.njk
---

# account.getPassword

Получить настройки двухфакторной авторизации с паролем

```
account.password#957b50fb flags:# has_recovery:flags.0?true has_secure_values:flags.1?true has_password:flags.2?true current_algo:flags.2?PasswordKdfAlgo srp_B:flags.2?bytes srp_id:flags.2?long hint:flags.3?string email_unconfirmed_pattern:flags.4?string new_algo:PasswordKdfAlgo new_secure_algo:SecurePasswordKdfAlgo secure_random:bytes pending_reset_date:flags.5?int login_email_pattern:flags.6?string = account.Password;
---functions---
account.getPassword#548a30f5 = account.Password;
```

### Параметры

Этот конструктор не требует параметров.

### Результат

[account.Password](/type/account.Password/)

### Этот метод доступен только пользователям

### Этот метод можно вызывать по [неавторизованному соединению »](/api/auth/)
