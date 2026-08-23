---
title: "inputEncryptedFileLocation (конструктор)"
original: "https://core.telegram.org/constructor/inputEncryptedFileLocation"
section: ref
kind: constructor
layout: layout.njk
---

# inputEncryptedFileLocation

*Конструктор из схемы TL.*

> Location of encrypted secret chat file.

## Определение TL

```
inputEncryptedFileLocation#f5235d55 id:long access_hash:long = InputFileLocation;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| id | [long](/type/long/) | File ID, id parameter value from [encryptedFile](/constructor/encryptedFile/) |
| access_hash | [long](/type/long/) | Checksum, access_hash parameter value from [encryptedFile](/constructor/encryptedFile/) |

## Тип

[InputFileLocation](/type/InputFileLocation/)

## Related pages

#### [encryptedFile](/constructor/encryptedFile/)

Encrypted file.
