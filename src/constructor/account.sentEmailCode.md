---
title: "account.sentEmailCode (конструктор)"
original: "https://core.telegram.org/constructor/account.sentEmailCode"
section: ref
kind: constructor
layout: layout.njk
---

# account.sentEmailCode

*Конструктор из схемы TL.*

> The sent email code

## Определение TL

```
account.sentEmailCode#811f854f email_pattern:string length:int = account.SentEmailCode;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| email_pattern | [string](/type/string/) | The email (to which the code was sent) must match this [pattern](https://core.telegram.org/api/pattern) |
| length | [int](/type/int/) | The length of the verification code |

## Тип

[account.SentEmailCode](/type/account.SentEmailCode/)

## Related pages

#### [Pattern matching](https://core.telegram.org/api/pattern)

Some methods require the client to verify if the data obtained from an external source matches a certain pattern.
