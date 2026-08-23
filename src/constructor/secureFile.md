---
title: "secureFile (конструктор)"
original: "https://core.telegram.org/constructor/secureFile"
section: ref
kind: constructor
layout: layout.njk
---

# secureFile

*Конструктор из схемы TL.*

> Secure [passport](https://core.telegram.org/passport) file, for more info [see the passport docs »](https://core.telegram.org/passport/encryption#inputsecurefile)

## Определение TL

```
secureFile#7d09c27e id:long access_hash:long size:long dc_id:int date:int file_hash:bytes secret:bytes = SecureFile;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| id | [long](/type/long/) | ID |
| access_hash | [long](/type/long/) | Access hash |
| size | [long](/type/long/) | File size |
| dc_id | [int](/type/int/) | DC ID |
| date | [int](/type/int/) | Date of upload |
| file_hash | [bytes](/type/bytes/) | File hash |
| secret | [bytes](/type/bytes/) | Secret |

## Тип

[SecureFile](/type/SecureFile/)

## Related pages

#### [Telegram Passport Manual](https://core.telegram.org/passport)

Telegram Passport, a unified authorization method for services that require personal identification.

#### [Telegram Passport Encryption Details](https://core.telegram.org/passport/encryption)

How Telegram Passport data is stored and encrypted end-to-end.
