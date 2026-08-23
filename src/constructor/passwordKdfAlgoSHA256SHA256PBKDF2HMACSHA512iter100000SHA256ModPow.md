---
title: "passwordKdfAlgoSHA256SHA256PBKDF2HMACSHA512iter100000SHA256ModPow (конструктор)"
original: "https://core.telegram.org/constructor/passwordKdfAlgoSHA256SHA256PBKDF2HMACSHA512iter100000SHA256ModPow"
section: ref
kind: constructor
layout: layout.njk
---

# passwordKdfAlgoSHA256SHA256PBKDF2HMACSHA512iter100000SHA256ModPow

*Конструктор из схемы TL.*

> This key derivation algorithm defines that [SRP 2FA login](/api/srp/) must be used

## Определение TL

```
passwordKdfAlgoSHA256SHA256PBKDF2HMACSHA512iter100000SHA256ModPow#3a912d4a salt1:bytes salt2:bytes g:int p:bytes = PasswordKdfAlgo;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| salt1 | [bytes](/type/bytes/) | One of two salts used by the derivation function (see [SRP 2FA login](/api/srp/)) |
| salt2 | [bytes](/type/bytes/) | One of two salts used by the derivation function (see [SRP 2FA login](/api/srp/)) |
| g | [int](/type/int/) | Base (see [SRP 2FA login](/api/srp/)) |
| p | [bytes](/type/bytes/) | 2048-bit modulus (see [SRP 2FA login](/api/srp/)) |

## Тип

[PasswordKdfAlgo](/type/PasswordKdfAlgo/)

## Related pages

#### [Two-factor authentication](/api/srp/)

How to login to a user's account if they have enabled 2FA, how to change password.
