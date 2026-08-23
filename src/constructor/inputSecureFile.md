---
title: "inputSecureFile (конструктор)"
original: "https://core.telegram.org/constructor/inputSecureFile"
section: ref
kind: constructor
layout: layout.njk
---

# inputSecureFile

*Конструктор из схемы TL.*

> Pre-uploaded [passport](https://core.telegram.org/passport) file, for more info [see the passport docs »](https://core.telegram.org/passport/encryption#inputsecurefile)

## Определение TL

```
inputSecureFile#5367e5be id:long access_hash:long = InputSecureFile;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| id | [long](/type/long/) | Secure file ID |
| access_hash | [long](/type/long/) | Secure file access hash |

## Тип

[InputSecureFile](/type/InputSecureFile/)

## Related pages

#### [Telegram Passport Manual](https://core.telegram.org/passport)

Telegram Passport, a unified authorization method for services that require personal identification.

#### [Telegram Passport Encryption Details](https://core.telegram.org/passport/encryption)

How Telegram Passport data is stored and encrypted end-to-end.
