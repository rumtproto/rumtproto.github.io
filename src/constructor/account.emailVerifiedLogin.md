---
title: "account.emailVerifiedLogin (конструктор)"
original: "https://core.telegram.org/constructor/account.emailVerifiedLogin"
section: ref
kind: constructor
layout: layout.njk
---

# account.emailVerifiedLogin

*Конструктор из схемы TL.*

> The email was verified correctly, and a login code was just sent to it.

## Определение TL

```
account.emailVerifiedLogin#e1bb0d61 email:string sent_code:auth.SentCode = account.EmailVerified;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| email | [string](/type/string/) | The verified email address. |
| sent_code | [auth.SentCode](/type/auth.SentCode/) | Info about the sent [login code](/api/auth/) |

## Тип

[account.EmailVerified](/type/account.EmailVerified/)

## Related pages

#### [User Authorization](/api/auth/)

How to register a user's phone to start using the API.
