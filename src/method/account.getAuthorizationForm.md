---
title: "account.getAuthorizationForm"
original: "https://core.telegram.org/method/account.getAuthorizationForm"
section: ref
kind: method
description: "Возвращает форму авторизации Telegram Passport для передачи данных сервису"
layout: layout.njk
---

# account.getAuthorizationForm

Возвращает форму авторизации Telegram Passport для передачи данных сервису

```
account.authorizationForm#ad2e1cd8 flags:# required_types:Vector<SecureRequiredType> values:Vector<SecureValue> errors:Vector<SecureValueError> users:Vector<User> privacy_policy_url:flags.0?string = account.AuthorizationForm;
---functions---
account.getAuthorizationForm#a929597a bot_id:long scope:string public_key:string = account.AuthorizationForm;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>bot_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Идентификатор пользователя, соответствующий боту сервиса</td></tr><tr><td><strong>scope</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Типы элементов Telegram Passport, запрошенные сервисом</td></tr><tr><td><strong>public_key</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Открытый ключ сервиса</td></tr></tbody></table>

### Результат

[account.AuthorizationForm](/type/account.AuthorizationForm/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>BOT_INVALID</td><td>Это не бот.</td></tr><tr><td>400</td><td>PUBLIC_KEY_REQUIRED</td><td>Требуется открытый ключ.</td></tr></tbody></table>
