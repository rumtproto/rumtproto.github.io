---
title: "auth.checkRecoveryPassword"
original: "https://core.telegram.org/method/auth.checkRecoveryPassword"
section: ref
kind: method
description: "Проверить, действителен ли код восстановления двухфакторной аутентификации, отправленный методом auth.requestPasswordRecovery, прежде чем передавать его в auth.recoverPassword."
layout: layout.njk
---

# auth.checkRecoveryPassword

Проверить, действителен ли [код восстановления двухфакторной аутентификации](/api/srp/), отправленный методом [auth.requestPasswordRecovery](/method/auth.requestPasswordRecovery/), прежде чем передавать его в [auth.recoverPassword](/method/auth.recoverPassword/).

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
auth.checkRecoveryPassword#d36bf79 code:string = Bool;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>code</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Код, полученный по электронной почте</td></tr></tbody></table>

### Результат

[Bool](/type/Bool/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>CODE_EMPTY</td><td>Указанный код пуст.</td></tr><tr><td>400</td><td>PASSWORD_RECOVERY_EXPIRED</td><td>Срок действия кода восстановления истёк.</td></tr></tbody></table>

### Связанные страницы

#### [Двухфакторная аутентификация](/api/srp/)

Как войти в аккаунт пользователя, если включена двухфакторная аутентификация, и как сменить пароль.

#### [auth.requestPasswordRecovery](/method/auth.requestPasswordRecovery/)

Запросить код восстановления [пароля двухфакторной аутентификации](/api/srp/); доступно только для аккаунтов с [настроенной почтой для восстановления](/api/srp/#email-verification).

#### [auth.recoverPassword](/method/auth.recoverPassword/)

Сбросить [пароль двухфакторной аутентификации](/api/srp/) с помощью кода восстановления, отправленного методом [auth.requestPasswordRecovery](/method/auth.requestPasswordRecovery/).
