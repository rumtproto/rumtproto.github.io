---
title: "account.acceptAuthorization (метод)"
original: "https://core.telegram.org/method/account.acceptAuthorization"
section: ref
kind: method
layout: layout.njk
---

# account.acceptAuthorization

*Метод из схемы TL.*

> Sends a Telegram Passport authorization form, effectively sharing data with the service

## Определение TL

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
account.acceptAuthorization#f3ed4c73 bot_id:long scope:string public_key:string value_hashes:Vector<SecureValueHash> credentials:SecureCredentialsEncrypted = Bool;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| bot_id | [long](/type/long/) | Bot ID |
| scope | [string](/type/string/) | Telegram Passport element types requested by the service |
| public_key | [string](/type/string/) | Service's public key |
| value_hashes | [Vector](https://core.telegram.org/type/Vector%20t)<[SecureValueHash](/type/SecureValueHash/)> | Types of values sent and their hashes |
| credentials | [SecureCredentialsEncrypted](/type/SecureCredentialsEncrypted/) | Encrypted values |

## Результат

[Bool](/type/Bool/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | BOT_INVALID | This is not a valid bot. |
| 400 | PUBLIC_KEY_REQUIRED | A public key is required. |
