---
title: "account.getAuthorizationForm (метод)"
original: "https://core.telegram.org/method/account.getAuthorizationForm"
section: ref
kind: method
layout: layout.njk
---

# account.getAuthorizationForm

*Метод из схемы TL.*

> Returns a Telegram Passport authorization form for sharing data with a service

## Определение TL

```
account.authorizationForm#ad2e1cd8 flags:# required_types:Vector<SecureRequiredType> values:Vector<SecureValue> errors:Vector<SecureValueError> users:Vector<User> privacy_policy_url:flags.0?string = account.AuthorizationForm;
---functions---
account.getAuthorizationForm#a929597a bot_id:long scope:string public_key:string = account.AuthorizationForm;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| bot_id | [long](/type/long/) | User identifier of the service's bot |
| scope | [string](/type/string/) | Telegram Passport element types requested by the service |
| public_key | [string](/type/string/) | Service's public key |

## Результат

[account.AuthorizationForm](/type/account.AuthorizationForm/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | BOT_INVALID | This is not a valid bot. |
| 400 | PUBLIC_KEY_REQUIRED | A public key is required. |
