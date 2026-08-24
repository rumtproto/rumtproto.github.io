---
title: "account.initPasskeyRegistration"
original: "https://core.telegram.org/method/account.initPasskeyRegistration"
section: ref
kind: method
description: "Начать регистрацию ключа доступа для текущего аккаунта; подробнее о полном процессе см. здесь »."
layout: layout.njk
---

# account.initPasskeyRegistration

Начать регистрацию ключа доступа для текущего аккаунта; подробнее о полном процессе см. [здесь »](/api/passkeys/#creating-a-passkey).

```
account.passkeyRegistrationOptions#e16b5ce1 options:DataJSON = account.PasskeyRegistrationOptions;
---functions---
account.initPasskeyRegistration#429547e8 = account.PasskeyRegistrationOptions;
```

### Параметры

Этот конструктор не требует параметров.

### Результат

[account.PasskeyRegistrationOptions](/type/account.PasskeyRegistrationOptions/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>403</td><td>ACCESS_DENIED</td><td>Аккаунт деактивирован либо является ботом или служебным аккаунтом.</td></tr><tr><td>406</td><td>FRESH_RESET_AUTHORISATION_FORBIDDEN</td><td>Нельзя завершить другие сессии, если с момента входа в текущую сессию прошло менее 24 часов.</td></tr></tbody></table>

### Связанные страницы

#### [Вход по passkey](/api/passkeys/)

Мгновенный вход в Telegram с помощью passkey — по PIN-коду или биометрии вместо SMS-кода.
