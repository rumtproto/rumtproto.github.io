---
title: "passwordKdfAlgoSHA256SHA256PBKDF2HMACSHA512iter100000SHA256ModPow"
original: "https://core.telegram.org/constructor/passwordKdfAlgoSHA256SHA256PBKDF2HMACSHA512iter100000SHA256ModPow"
section: ref
kind: constructor
description: "Этот алгоритм формирования ключа определяет, что должен использоваться вход с двухфакторной аутентификацией по SRP"
layout: layout.njk
---

# passwordKdfAlgoSHA256SHA256PBKDF2HMACSHA512iter100000SHA256ModPow

Этот алгоритм формирования ключа определяет, что должен использоваться [вход с двухфакторной аутентификацией по SRP](/api/srp/)

```
passwordKdfAlgoSHA256SHA256PBKDF2HMACSHA512iter100000SHA256ModPow#3a912d4a salt1:bytes salt2:bytes g:int p:bytes = PasswordKdfAlgo;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>salt1</strong></td><td style="text-align: center;"><a href="/type/bytes">bytes</a></td><td>Одна из двух солей, используемых функцией формирования ключа (см. <a href="/api/srp">вход с двухфакторной авторизацией по SRP</a>)</td></tr><tr><td><strong>salt2</strong></td><td style="text-align: center;"><a href="/type/bytes">bytes</a></td><td>Одна из двух солей, используемых функцией формирования ключа (см. <a href="/api/srp">вход с двухфакторной авторизацией по SRP</a>)</td></tr><tr><td><strong>g</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Основание (см. <a href="/api/srp">вход с двухфакторной аутентификацией по SRP</a>)</td></tr><tr><td><strong>p</strong></td><td style="text-align: center;"><a href="/type/bytes">bytes</a></td><td>2048-битный модуль (см. <a href="/api/srp">вход с паролем 2FA по протоколу SRP</a>)</td></tr></tbody></table>

### Тип

[PasswordKdfAlgo](/type/PasswordKdfAlgo/)

### Связанные страницы

#### [Двухфакторная аутентификация](/api/srp/)

Как войти в аккаунт пользователя, если включена двухфакторная аутентификация, и как сменить пароль.
