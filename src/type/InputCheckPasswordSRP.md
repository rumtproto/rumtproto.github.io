---
title: "InputCheckPasswordSRP (тип)"
original: "https://core.telegram.org/type/InputCheckPasswordSRP"
section: ref
kind: type
layout: layout.njk
---

# InputCheckPasswordSRP

*Тип из схемы TL.*

> Constructors for checking the validity of a [2FA SRP password](/api/srp/).
> See [here »](https://core.telegram.org/api/srp/#using-the-2fa-password) for more info on the 2FA authentication flow for methods that require it, before and after login.

## Определение TL

```
inputCheckPasswordEmpty#9880f658 = InputCheckPasswordSRP;
inputCheckPasswordSRP#d27ff082 srp_id:long A:bytes M1:bytes = InputCheckPasswordSRP;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [inputCheckPasswordEmpty](/constructor/inputCheckPasswordEmpty/) | There is no password |
| [inputCheckPasswordSRP](/constructor/inputCheckPasswordSRP/) | Constructor for checking the validity of a 2FA SRP password (see [SRP](/api/srp/)) |

## Related pages

#### [Two-factor authentication](/api/srp/)

How to login to a user's account if they have enabled 2FA, how to change password.
