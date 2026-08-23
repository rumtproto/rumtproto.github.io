---
title: "InputSecureFile (тип)"
original: "https://core.telegram.org/type/InputSecureFile"
section: ref
kind: type
layout: layout.njk
---

# InputSecureFile

*Тип из схемы TL.*

> Secure [passport](https://core.telegram.org/passport) file, for more info [see the passport docs »](https://core.telegram.org/passport/encryption#inputsecurefile)

## Определение TL

```
inputSecureFileUploaded#3334b0f0 id:long parts:int md5_checksum:string file_hash:bytes secret:bytes = InputSecureFile;
inputSecureFile#5367e5be id:long access_hash:long = InputSecureFile;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [inputSecureFileUploaded](/constructor/inputSecureFileUploaded/) | Uploaded secure file, for more info [see the passport docs »](https://core.telegram.org/passport/encryption#inputsecurefile) |
| [inputSecureFile](/constructor/inputSecureFile/) | Pre-uploaded [passport](https://core.telegram.org/passport) file, for more info [see the passport docs »](https://core.telegram.org/passport/encryption#inputsecurefile) |

## Related pages

#### [Telegram Passport Manual](https://core.telegram.org/passport)

Telegram Passport, a unified authorization method for services that require personal identification.

#### [Telegram Passport Encryption Details](https://core.telegram.org/passport/encryption)

How Telegram Passport data is stored and encrypted end-to-end.
