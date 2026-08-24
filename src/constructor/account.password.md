---
title: "account.password"
original: "https://core.telegram.org/constructor/account.password"
section: ref
kind: constructor
description: "Настройки двухфакторной авторизации"
layout: layout.njk
---

# account.password

Настройки двухфакторной авторизации

```
account.password#957b50fb flags:# has_recovery:flags.0?true has_secure_values:flags.1?true has_password:flags.2?true current_algo:flags.2?PasswordKdfAlgo srp_B:flags.2?bytes srp_id:flags.2?long hint:flags.3?string email_unconfirmed_pattern:flags.4?string new_algo:PasswordKdfAlgo new_secure_algo:SecurePasswordKdfAlgo secure_random:bytes pending_reset_date:flags.5?int login_email_pattern:flags.6?string = account.Password;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>has_recovery</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Настроен ли у пользователя способ восстановления</td></tr><tr><td><strong>has_secure_values</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/constructor/true">true</a></td><td>Включён ли telegram <a href="/passport">passport</a></td></tr><tr><td><strong>has_password</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/constructor/true">true</a></td><td>Установлен ли у пользователя пароль</td></tr><tr><td><strong>current_algo</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/type/PasswordKdfAlgo">PasswordKdfAlgo</a></td><td><a href="/api/srp">Алгоритм KDF для двухфакторной аутентификации SRP</a> текущего пароля</td></tr><tr><td><strong>srp_B</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/type/bytes">bytes</a></td><td>Параметр B для <a href="/api/srp">авторизации по SRP</a></td></tr><tr><td><strong>srp_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/type/long">long</a></td><td>Параметр ID для <a href="/api/srp">авторизации по SRP</a></td></tr><tr><td><strong>hint</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.3?<a href="/type/string">string</a></td><td>Текстовая подсказка для пароля</td></tr><tr><td><strong>email_unconfirmed_pattern</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.4?<a href="/type/string">string</a></td><td><a href="/api/srp#email-verification">Почта для восстановления пароля</a> с указанным <a href="/api/pattern">шаблоном</a> всё ещё ожидает подтверждения</td></tr><tr><td><strong>new_algo</strong></td><td style="text-align: center;"><a href="/type/PasswordKdfAlgo">PasswordKdfAlgo</a></td><td><a href="/api/srp">Алгоритм KDF для двухфакторной аутентификации SRP</a>, используемый при создании новых паролей</td></tr><tr><td><strong>new_secure_algo</strong></td><td style="text-align: center;"><a href="/type/SecurePasswordKdfAlgo">SecurePasswordKdfAlgo</a></td><td>Алгоритм KDF для telegram <a href="/passport">passport</a></td></tr><tr><td><strong>secure_random</strong></td><td style="text-align: center;"><a href="/type/bytes">bytes</a></td><td>Криптостойкая случайная строка</td></tr><tr><td><strong>pending_reset_date</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.5?<a href="/type/int">int</a></td><td>Пароль двухфакторной аутентификации будет автоматически удалён в указанную дату, если пользователь не отменит операцию</td></tr><tr><td><strong>login_email_pattern</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.6?<a href="/type/string">string</a></td><td>Настроена подтверждённая почта для входа с указанным <a href="/api/pattern">шаблоном</a></td></tr></tbody></table>

### Тип

[account.Password](/type/account.Password/)

### Связанные страницы

#### [Telegram Passport: руководство](https://core.telegram.org/passport)

Telegram Passport — единый способ авторизации для сервисов, которым нужна идентификация личности.

#### [Двухфакторная аутентификация](/api/srp/)

Как войти в аккаунт пользователя, если включена двухфакторная аутентификация, и как сменить пароль.

#### [Сопоставление с шаблоном](/api/pattern/)

Некоторые методы требуют, чтобы клиент проверил, соответствуют ли данные, полученные из внешнего источника, определённому шаблону.
