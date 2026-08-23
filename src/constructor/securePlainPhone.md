---
title: "securePlainPhone (конструктор)"
original: "https://core.telegram.org/constructor/securePlainPhone"
section: ref
kind: constructor
layout: layout.njk
---

# securePlainPhone

*Конструктор из схемы TL.*

> Phone number to use in [telegram passport](https://core.telegram.org/passport): [it must be verified, first »](https://core.telegram.org/passport/encryption#secureplaindata).

## Определение TL

```
securePlainPhone#7d6099dd phone:string = SecurePlainData;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| phone | [string](/type/string/) | Phone number |

## Тип

[SecurePlainData](/type/SecurePlainData/)

## Related pages

#### [Telegram Passport Manual](https://core.telegram.org/passport)

Telegram Passport, a unified authorization method for services that require personal identification.

#### [Telegram Passport Encryption Details](https://core.telegram.org/passport/encryption)

How Telegram Passport data is stored and encrypted end-to-end.
