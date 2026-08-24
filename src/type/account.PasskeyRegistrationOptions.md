---
title: "account.PasskeyRegistrationOptions"
original: "https://core.telegram.org/type/account.PasskeyRegistrationOptions"
section: ref
kind: type
description: "Параметры регистрации passkey; подробнее о полном процессе см. здесь »."
layout: layout.njk
---

# Account.PasskeyRegistrationOptions

Параметры регистрации passkey; подробнее о полном процессе см. [здесь »](/api/passkeys/#creating-a-passkey).

```
account.passkeyRegistrationOptions#e16b5ce1 options:DataJSON = account.PasskeyRegistrationOptions;

---functions---

account.initPasskeyRegistration#429547e8 = account.PasskeyRegistrationOptions;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/account.passkeyRegistrationOptions">account.passkeyRegistrationOptions</a></td><td>Параметры регистрации ключа доступа; подробнее о полном процессе см. <a href="/api/passkeys#creating-a-passkey">здесь »</a>.</td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/account.initPasskeyRegistration">account.initPasskeyRegistration</a></td><td>Начать регистрацию ключа доступа для текущего аккаунта; подробнее о полном процессе см. <a href="/api/passkeys#creating-a-passkey">здесь »</a>.</td></tr></tbody></table>

### Связанные страницы

#### [Вход по passkey](/api/passkeys/)

Мгновенный вход в Telegram с помощью passkey — по PIN-коду или биометрии вместо SMS-кода.
