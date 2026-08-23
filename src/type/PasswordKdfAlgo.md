---
title: "PasswordKdfAlgo (тип)"
original: "https://core.telegram.org/type/PasswordKdfAlgo"
section: ref
kind: type
layout: layout.njk
---

# PasswordKdfAlgo

*Тип из схемы TL.*

> Key derivation function to use when generating the [password hash for SRP two-factor authorization](/api/srp/)

## Определение TL

```
passwordKdfAlgoUnknown#d45ab096 = PasswordKdfAlgo;
passwordKdfAlgoSHA256SHA256PBKDF2HMACSHA512iter100000SHA256ModPow#3a912d4a salt1:bytes salt2:bytes g:int p:bytes = PasswordKdfAlgo;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [passwordKdfAlgoUnknown](/constructor/passwordKdfAlgoUnknown/) | Unknown KDF (most likely, the client is outdated and does not support the specified KDF algorithm) |
| [passwordKdfAlgoSHA256SHA256PBKDF2HMACSHA512iter100000SHA256ModPow](/constructor/passwordKdfAlgoSHA256SHA256PBKDF2HMACSHA512iter100000SHA256ModPow/) | This key derivation algorithm defines that [SRP 2FA login](/api/srp/) must be used |

## Related pages

#### [Two-factor authentication](/api/srp/)

How to login to a user's account if they have enabled 2FA, how to change password.
