---
title: "inputEncryptedFile (конструктор)"
original: "https://core.telegram.org/constructor/inputEncryptedFile"
section: ref
kind: constructor
layout: layout.njk
---

# inputEncryptedFile

*Конструктор из схемы TL.*

> Sets forwarded encrypted file for attachment.

## Определение TL

```
inputEncryptedFile#5a17b5e5 id:long access_hash:long = InputEncryptedFile;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| id | [long](/type/long/) | File ID, value of id parameter from [encryptedFile](/constructor/encryptedFile/) |
| access_hash | [long](/type/long/) | Checking sum, value of access_hash parameter from [encryptedFile](/constructor/encryptedFile/) |

## Тип

[InputEncryptedFile](/type/InputEncryptedFile/)

## Related pages

#### [encryptedFile](/constructor/encryptedFile/)

Encrypted file.
