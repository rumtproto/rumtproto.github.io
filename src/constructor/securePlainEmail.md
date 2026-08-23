---
title: "securePlainEmail (конструктор)"
original: "https://core.telegram.org/constructor/securePlainEmail"
section: ref
kind: constructor
layout: layout.njk
---

# securePlainEmail

*Конструктор из схемы TL.*

> Email address to use in [telegram passport](https://core.telegram.org/passport): [it must be verified, first »](https://core.telegram.org/passport/encryption#secureplaindata).

## Определение TL

```
securePlainEmail#21ec5a5f email:string = SecurePlainData;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| email | [string](/type/string/) | Email address |

## Тип

[SecurePlainData](/type/SecurePlainData/)

## Related pages

#### [Telegram Passport Manual](https://core.telegram.org/passport)

Telegram Passport, a unified authorization method for services that require personal identification.

#### [Telegram Passport Encryption Details](https://core.telegram.org/passport/encryption)

How Telegram Passport data is stored and encrypted end-to-end.
