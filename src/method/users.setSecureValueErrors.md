---
title: "users.setSecureValueErrors (метод)"
original: "https://core.telegram.org/method/users.setSecureValueErrors"
section: ref
kind: method
layout: layout.njk
---

# users.setSecureValueErrors

*Метод из схемы TL.*

> Notify the user that the sent [passport](https://core.telegram.org/passport) data contains some errors The user will not be able to re-submit their Passport data to you until the errors are fixed (the contents of the field for which you returned the error must change).
> Use this if the data submitted by the user doesn't satisfy the standards your service requires for any reason. For example, if a birthday date seems invalid, a submitted document is blurry, a scan shows evidence of tampering, etc. Supply some details in the error message to make sure the user knows how to correct the issues.

## Определение TL

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
users.setSecureValueErrors#90c894b5 id:InputUser errors:Vector<SecureValueError> = Bool;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| id | [InputUser](/type/InputUser/) | The user |
| errors | [Vector](https://core.telegram.org/type/Vector%20t)<[SecureValueError](/type/SecureValueError/)> | Errors |

## Результат

[Bool](/type/Bool/)

## Only bots can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | DATA_HASH_SIZE_INVALID | The size of the specified secureValueErrorData.data_hash is invalid. |
| 400 | HASH_SIZE_INVALID | The size of the specified secureValueError.hash is invalid. |
| 400 | USER_BOT_REQUIRED | This method can only be called by a bot. |
| 400 | USER_ID_INVALID | The provided user ID is invalid. |

## Related pages

#### [Telegram Passport Manual](https://core.telegram.org/passport)

Telegram Passport, a unified authorization method for services that require personal identification.
