---
title: "account.saveSecureValue"
original: "https://core.telegram.org/method/account.saveSecureValue"
section: ref
kind: method
description: "Безопасно сохранить документ Telegram Passport, подробнее см. в документации по Passport »"
layout: layout.njk
---

# account.saveSecureValue

Безопасно сохранить документ [Telegram Passport](https://core.telegram.org/passport), [подробнее см. в документации по Passport »](https://core.telegram.org/passport/encryption#encryption)

```
secureValue#187fa0ca flags:# type:SecureValueType data:flags.0?SecureData front_side:flags.1?SecureFile reverse_side:flags.2?SecureFile selfie:flags.3?SecureFile translation:flags.6?Vector<SecureFile> files:flags.4?Vector<SecureFile> plain_data:flags.5?SecurePlainData hash:bytes = SecureValue;
---functions---
account.saveSecureValue#899fe31d value:InputSecureValue secure_secret_id:long = SecureValue;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>value</strong></td><td style="text-align: center;"><a href="/type/InputSecureValue">InputSecureValue</a></td><td>Защищённое значение, <a href="/passport/encryption#encryption">подробнее см. в документации по Passport »</a></td></tr><tr><td><strong>secure_secret_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Хеш секрета Telegram Passport, <a href="/passport/encryption#encryption">подробнее см. в документации по Telegram Passport »</a></td></tr></tbody></table>

### Результат

[SecureValue](/type/SecureValue/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>PASSWORD_REQUIRED</td><td>Для использования Telegram Passport должен быть настроен <a href="/api/srp">пароль двухфакторной аутентификации</a>.</td></tr><tr><td>400</td><td>SECURE_SECRET_REQUIRED</td><td>Требуется защищённый секрет.</td></tr></tbody></table>

### Связанные страницы

#### [Telegram Passport: детали шифрования](https://core.telegram.org/passport/encryption)

Как данные Telegram Passport хранятся и шифруются сквозным шифрованием.

#### [Telegram Passport: руководство](https://core.telegram.org/passport)

Telegram Passport — единый способ авторизации для сервисов, которым нужна идентификация личности.

#### [Двухфакторная аутентификация](/api/srp/)

Как войти в аккаунт пользователя, если включена двухфакторная аутентификация, и как сменить пароль.
