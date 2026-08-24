---
title: "account.acceptAuthorization"
original: "https://core.telegram.org/method/account.acceptAuthorization"
section: ref
kind: method
description: "Отправляет форму авторизации Telegram Passport, тем самым передавая данные сервису"
layout: layout.njk
---

# account.acceptAuthorization

Отправляет форму авторизации Telegram Passport, тем самым передавая данные сервису

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
account.acceptAuthorization#f3ed4c73 bot_id:long scope:string public_key:string value_hashes:Vector<SecureValueHash> credentials:SecureCredentialsEncrypted = Bool;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>bot_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Идентификатор бота</td></tr><tr><td><strong>scope</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Типы элементов Telegram Passport, запрошенные сервисом</td></tr><tr><td><strong>public_key</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Открытый ключ сервиса</td></tr><tr><td><strong>value_hashes</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/SecureValueHash">SecureValueHash</a>&gt;</td><td>Типы отправленных значений и их хеши</td></tr><tr><td><strong>credentials</strong></td><td style="text-align: center;"><a href="/type/SecureCredentialsEncrypted">SecureCredentialsEncrypted</a></td><td>Зашифрованные значения</td></tr></tbody></table>

### Результат

[Bool](/type/Bool/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>BOT_INVALID</td><td>Это не бот.</td></tr><tr><td>400</td><td>PUBLIC_KEY_REQUIRED</td><td>Требуется открытый ключ.</td></tr></tbody></table>
