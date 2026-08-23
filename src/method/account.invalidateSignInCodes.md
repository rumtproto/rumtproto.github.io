---
title: "account.invalidateSignInCodes (метод)"
original: "https://core.telegram.org/method/account.invalidateSignInCodes"
section: ref
kind: method
layout: layout.njk
---

# account.invalidateSignInCodes

*Метод из схемы TL.*

> Invalidate the specified login codes, see [here »](https://core.telegram.org/api/auth/#invalidating-login-codes) for more info.

## Определение TL

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
account.invalidateSignInCodes#ca8ae8ba codes:Vector<string> = Bool;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| codes | [Vector](https://core.telegram.org/type/Vector%20t)<[string](/type/string/)> | The login codes to invalidate. |

## Результат

[Bool](/type/Bool/)

## Only users can use this method

## Related pages

#### [User Authorization](/api/auth/)

How to register a user's phone to start using the API.
