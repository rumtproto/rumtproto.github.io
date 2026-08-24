---
title: "secureCredentialsEncrypted"
original: "https://core.telegram.org/constructor/secureCredentialsEncrypted"
section: ref
kind: constructor
description: "Зашифрованные учётные данные, необходимые для расшифровки данных telegram passport."
layout: layout.njk
---

# secureCredentialsEncrypted

Зашифрованные учётные данные, необходимые для расшифровки данных [telegram passport](https://core.telegram.org/passport).

```
secureCredentialsEncrypted#33f0ea47 data:bytes hash:bytes secret:bytes = SecureCredentialsEncrypted;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>data</strong></td><td style="text-align: center;"><a href="/type/bytes">bytes</a></td><td>Зашифрованные данные в формате JSON, содержащие уникальную полезную нагрузку пользователя, хеши данных и секреты, необходимые для расшифровки и аутентификации EncryptedPassportElement, как описано в разделе <a href="/passport#decrypting-data">расшифровка данных »</a></td></tr><tr><td><strong>hash</strong></td><td style="text-align: center;"><a href="/type/bytes">bytes</a></td><td>[@term:hash] Хеш данных для их аутентификации, как описано в разделе <a href="/passport#decrypting-data">расшифровка данных »</a></td></tr><tr><td><strong>secret</strong></td><td style="text-align: center;"><a href="/type/bytes">bytes</a></td><td>Секрет, зашифрованный открытым RSA-ключом бота, необходимый для расшифровки данных, как описано в разделе <a href="/passport#decrypting-data">расшифровка данных »</a></td></tr></tbody></table>

### Тип

[SecureCredentialsEncrypted](/type/SecureCredentialsEncrypted/)

### Связанные страницы

#### [Telegram Passport: руководство](https://core.telegram.org/passport)

Telegram Passport — единый способ авторизации для сервисов, которым нужна идентификация личности.
