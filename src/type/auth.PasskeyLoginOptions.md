---
title: "auth.PasskeyLoginOptions"
original: "https://core.telegram.org/type/auth.PasskeyLoginOptions"
section: ref
kind: type
description: "Параметры входа по passkey; подробнее о полном процессе см. здесь »."
layout: layout.njk
---

# Auth.PasskeyLoginOptions

Параметры входа по passkey; подробнее о полном процессе см. [здесь »](/api/passkeys/#logging-in-with-a-passkey).

```
auth.passkeyLoginOptions#e2037789 options:DataJSON = auth.PasskeyLoginOptions;

---functions---

auth.initPasskeyLogin#518ad0b7 api_id:int api_hash:string = auth.PasskeyLoginOptions;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/auth.passkeyLoginOptions">auth.passkeyLoginOptions</a></td><td>Параметры входа по ключу доступа; подробнее о полном процессе см. <a href="/api/passkeys#logging-in-with-a-passkey">здесь »</a>.</td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/auth.initPasskeyLogin">auth.initPasskeyLogin</a></td><td>Начать вход по ключу доступа через неавторизованное подключение; подробнее см. <a href="/api/passkeys#logging-in-with-a-passkey">здесь »</a>.</td></tr></tbody></table>

### Связанные страницы

#### [Вход по passkey](/api/passkeys/)

Мгновенный вход в Telegram с помощью passkey — по PIN-коду или биометрии вместо SMS-кода.
