---
title: "encryptedFile (конструктор)"
original: "https://core.telegram.org/constructor/encryptedFile"
section: ref
kind: constructor
layout: layout.njk
---

# encryptedFile

*Конструктор из схемы TL.*

> Encrypted file.

## Определение TL

```
encryptedFile#a8008cd8 id:long access_hash:long size:long dc_id:int key_fingerprint:int = EncryptedFile;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| id | [long](/type/long/) | File ID |
| access_hash | [long](/type/long/) | Checking sum depending on user ID |
| size | [long](/type/long/) | File size in bytes |
| dc_id | [int](/type/int/) | Number of data center |
| key_fingerprint | [int](/type/int/) | 32-bit fingerprint of key used for file encryption |

## Тип

[EncryptedFile](/type/EncryptedFile/)
