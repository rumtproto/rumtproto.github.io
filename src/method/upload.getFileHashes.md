---
title: "upload.getFileHashes (метод)"
original: "https://core.telegram.org/method/upload.getFileHashes"
section: ref
kind: method
layout: layout.njk
---

# upload.getFileHashes

*Метод из схемы TL.*

> Get SHA256 hashes for verifying downloaded files

## Определение TL

```
---functions---
upload.getFileHashes#9156982a location:InputFileLocation offset:long = Vector<FileHash>;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| location | [InputFileLocation](/type/InputFileLocation/) | File |
| offset | [long](/type/long/) | Offset from which to get file hashes |

## Результат

[Vector](https://core.telegram.org/type/Vector%20t)<[FileHash](/type/FileHash/)\>

## Both users and bots can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | LOCATION_INVALID | The provided location is invalid. |
