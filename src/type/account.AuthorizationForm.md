---
title: "Account.AuthorizationForm (тип)"
original: "https://core.telegram.org/type/account.AuthorizationForm"
section: ref
kind: type
layout: layout.njk
---

# Account.AuthorizationForm

*Тип из схемы TL.*

> Authorization form

## Определение TL

```
account.authorizationForm#ad2e1cd8 flags:# required_types:Vector<SecureRequiredType> values:Vector<SecureValue> errors:Vector<SecureValueError> users:Vector<User> privacy_policy_url:flags.0?string = account.AuthorizationForm;

---functions---

account.getAuthorizationForm#a929597a bot_id:long scope:string public_key:string = account.AuthorizationForm;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [account.authorizationForm](/constructor/account.authorizationForm/) | [Telegram Passport](https://core.telegram.org/passport) authorization form |

## Методы

| Method | Описание |
|---|---|
| [account.getAuthorizationForm](/method/account.getAuthorizationForm/) | Returns a Telegram Passport authorization form for sharing data with a service |
