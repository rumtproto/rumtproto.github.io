---
title: "inputEncryptedFileBigUploaded (конструктор)"
original: "https://core.telegram.org/constructor/inputEncryptedFileBigUploaded"
section: ref
kind: constructor
layout: layout.njk
---

# inputEncryptedFileBigUploaded

*Конструктор из схемы TL.*

> Assigns a new big encrypted file (over 10 MB in size), saved in parts using the method [upload.saveBigFilePart](/method/upload.saveBigFilePart/).

## Определение TL

```
inputEncryptedFileBigUploaded#2dc173c8 id:long parts:int key_fingerprint:int = InputEncryptedFile;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| id | [long](/type/long/) | Random file id, created by the client |
| parts | [int](/type/int/) | Number of saved parts |
| key_fingerprint | [int](/type/int/) | 32-bit imprint of the key used to encrypt the file |

## Тип

[InputEncryptedFile](/type/InputEncryptedFile/)

## Related pages

#### [upload.saveBigFilePart](/method/upload.saveBigFilePart/)

Saves a part of a large file (over 10 MB in size) to be later passed to one of the methods.
