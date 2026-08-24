---
title: "SecurePasswordKdfAlgo"
original: "https://core.telegram.org/type/SecurePasswordKdfAlgo"
section: ref
kind: type
description: "Алгоритм KDF, используемый для вычисления хеша telegram passport"
layout: layout.njk
---

# SecurePasswordKdfAlgo

Алгоритм KDF, используемый для вычисления хеша telegram [passport](https://core.telegram.org/passport)

```
securePasswordKdfAlgoUnknown#4a8537 = SecurePasswordKdfAlgo;
securePasswordKdfAlgoPBKDF2HMACSHA512iter100000#bbf2dda0 salt:bytes = SecurePasswordKdfAlgo;
securePasswordKdfAlgoSHA512#86471d92 salt:bytes = SecurePasswordKdfAlgo;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/securePasswordKdfAlgoUnknown">securePasswordKdfAlgoUnknown</a></td><td>Неизвестный алгоритм KDF (скорее всего, клиент необходимо обновить)</td></tr><tr><td><a href="/constructor/securePasswordKdfAlgoPBKDF2HMACSHA512iter100000">securePasswordKdfAlgoPBKDF2HMACSHA512iter100000</a></td><td>Алгоритм KDF: PBKDF2 с SHA512 и 100000 итераций</td></tr><tr><td><a href="/constructor/securePasswordKdfAlgoSHA512">securePasswordKdfAlgoSHA512</a></td><td>Алгоритм KDF на основе SHA512</td></tr></tbody></table>

### Связанные страницы

#### [Telegram Passport: руководство](https://core.telegram.org/passport)

Telegram Passport — единый способ авторизации для сервисов, которым нужна идентификация личности.
