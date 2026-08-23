---
title: "SecureFile (тип)"
original: "https://core.telegram.org/type/SecureFile"
section: ref
kind: type
layout: layout.njk
---

# SecureFile

*Тип из схемы TL.*

> Secure [passport](https://core.telegram.org/passport) file, for more info [see the passport docs »](https://core.telegram.org/passport/encryption#inputsecurefile)

## Определение TL

```
secureFileEmpty#64199744 = SecureFile;
secureFile#7d09c27e id:long access_hash:long size:long dc_id:int date:int file_hash:bytes secret:bytes = SecureFile;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [secureFileEmpty](/constructor/secureFileEmpty/) | Empty constructor |
| [secureFile](/constructor/secureFile/) | Secure [passport](https://core.telegram.org/passport) file, for more info [see the passport docs »](https://core.telegram.org/passport/encryption#inputsecurefile) |

## Related pages

#### [Telegram Passport Manual](https://core.telegram.org/passport)

Telegram Passport, a unified authorization method for services that require personal identification.

#### [Telegram Passport Encryption Details](https://core.telegram.org/passport/encryption)

How Telegram Passport data is stored and encrypted end-to-end.
