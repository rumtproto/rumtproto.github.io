---
title: "PasswordKdfAlgo"
original: "https://core.telegram.org/type/PasswordKdfAlgo"
section: ref
kind: type
description: "Функция формирования ключа, используемая при вычислении хеша пароля для двухфакторной авторизации SRP"
layout: layout.njk
---

# PasswordKdfAlgo

Функция формирования ключа, используемая при вычислении [хеша пароля для двухфакторной авторизации SRP](/api/srp/)

```
passwordKdfAlgoUnknown#d45ab096 = PasswordKdfAlgo;
passwordKdfAlgoSHA256SHA256PBKDF2HMACSHA512iter100000SHA256ModPow#3a912d4a salt1:bytes salt2:bytes g:int p:bytes = PasswordKdfAlgo;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/passwordKdfAlgoUnknown">passwordKdfAlgoUnknown</a></td><td>Неизвестная KDF (скорее всего, клиент устарел и не поддерживает указанный алгоритм KDF)</td></tr><tr><td><a href="/constructor/passwordKdfAlgoSHA256SHA256PBKDF2HMACSHA512iter100000SHA256ModPow">passwordKdfAlgoSHA256SHA256PBKDF2HMACSHA512iter100000SHA256ModPow</a></td><td>Этот алгоритм формирования ключа определяет, что должен использоваться <a href="/api/srp">вход с двухфакторной аутентификацией по SRP</a></td></tr></tbody></table>

### Связанные страницы

#### [Двухфакторная аутентификация](/api/srp/)

Как войти в аккаунт пользователя, если включена двухфакторная аутентификация, и как сменить пароль.
