---
title: "upload.saveBigFilePart (метод)"
original: "https://core.telegram.org/method/upload.saveBigFilePart"
section: ref
kind: method
layout: layout.njk
---

# upload.saveBigFilePart

*Метод из схемы TL.*

> Saves a part of a large file (over 10 MB in size) to be later passed to one of the methods.

## Определение TL

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
upload.saveBigFilePart#de7b673d file_id:long file_part:int file_total_parts:int bytes:bytes = Bool;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| file_id | [long](/type/long/) | Random file id, created by the client |
| file_part | [int](/type/int/) | Part sequence number |
| file_total_parts | [int](/type/int/) | Total number of parts |
| bytes | [bytes](/type/bytes/) | Binary data, part contents |

## Результат

[Bool](/type/Bool/)

## Both users and bots can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | FILE_PARTS_INVALID | The number of file parts is invalid. |
| 400 | FILE_PART_EMPTY | The provided file part is empty. |
| 400 | FILE_PART_INVALID | The file part number is invalid. |
| 400 | FILE_PART_SIZE_CHANGED | Provided file part size has changed. |
| 400 | FILE_PART_SIZE_INVALID | The provided file part size is invalid. |
| 400 | FILE_PART_TOO_BIG | The uploaded file part is too big. |
| 400 | FILE_PART_TOO_SMALL | The size of the uploaded file part is too small, please see the documentation for the allowed sizes. |
