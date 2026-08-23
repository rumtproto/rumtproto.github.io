---
title: "inputSecureFileUploaded (конструктор)"
original: "https://core.telegram.org/constructor/inputSecureFileUploaded"
section: ref
kind: constructor
layout: layout.njk
---

# inputSecureFileUploaded

*Конструктор из схемы TL.*

> Uploaded secure file, for more info [see the passport docs »](https://core.telegram.org/passport/encryption#inputsecurefile)

## Определение TL

```
inputSecureFileUploaded#3334b0f0 id:long parts:int md5_checksum:string file_hash:bytes secret:bytes = InputSecureFile;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| id | [long](/type/long/) | Secure file ID |
| parts | [int](/type/int/) | Secure file part count |
| md5_checksum | [string](/type/string/) | MD5 hash of encrypted uploaded file, to be checked server-side |
| file_hash | [bytes](/type/bytes/) | File hash |
| secret | [bytes](/type/bytes/) | Secret |

## Тип

[InputSecureFile](/type/InputSecureFile/)

## Related pages

#### [Telegram Passport Encryption Details](https://core.telegram.org/passport/encryption)

How Telegram Passport data is stored and encrypted end-to-end.
