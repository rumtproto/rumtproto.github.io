---
title: "account.AuthorizationForm"
original: "https://core.telegram.org/type/account.AuthorizationForm"
section: ref
kind: type
description: "Форма авторизации"
layout: layout.njk
---

# Account.AuthorizationForm

Форма авторизации

```
account.authorizationForm#ad2e1cd8 flags:# required_types:Vector<SecureRequiredType> values:Vector<SecureValue> errors:Vector<SecureValueError> users:Vector<User> privacy_policy_url:flags.0?string = account.AuthorizationForm;

---functions---

account.getAuthorizationForm#a929597a bot_id:long scope:string public_key:string = account.AuthorizationForm;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/account.authorizationForm">account.authorizationForm</a></td><td>Форма авторизации <a href="/passport">Telegram Passport</a></td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/account.getAuthorizationForm">account.getAuthorizationForm</a></td><td>Возвращает форму авторизации Telegram Passport для передачи данных сервису</td></tr></tbody></table>
