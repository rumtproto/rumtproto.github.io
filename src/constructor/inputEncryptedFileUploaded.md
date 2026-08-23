---
title: "inputEncryptedFileUploaded (конструктор)"
original: "https://core.telegram.org/constructor/inputEncryptedFileUploaded"
section: ref
kind: constructor
layout: layout.njk
---

# inputEncryptedFileUploaded

*Конструктор из схемы TL.*

> Sets new encrypted file saved by parts using upload.saveFilePart method.

## Определение TL

```
inputEncryptedFileUploaded#64bd0306 id:long parts:int md5_checksum:string key_fingerprint:int = InputEncryptedFile;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| id | [long](/type/long/) | Random file ID created by client |
| parts | [int](/type/int/) | Number of saved parts |
| md5_checksum | [string](/type/string/) | In case [md5-HASH](https://en.wikipedia.org/wiki/MD5) of the (already encrypted) file was transmitted, file content will be checked prior to use |
| key_fingerprint | [int](/type/int/) | 32-bit fingerprint of the key used to encrypt a file |

## Тип

[InputEncryptedFile](/type/InputEncryptedFile/)
