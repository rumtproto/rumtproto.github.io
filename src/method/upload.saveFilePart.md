---
title: "upload.saveFilePart (метод)"
original: "https://core.telegram.org/method/upload.saveFilePart"
section: ref
kind: method
layout: layout.njk
---

# upload.saveFilePart

*Метод из схемы TL.*

> Saves a part of file for further sending to one of the methods.

## Определение TL

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
upload.saveFilePart#b304a621 file_id:long file_part:int bytes:bytes = Bool;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| file_id | [long](/type/long/) | Random file identifier created by the client |
| file_part | [int](/type/int/) | Numerical order of a part |
| bytes | [bytes](/type/bytes/) | Binary data, content of a part |

## Результат

[Bool](/type/Bool/)

## Both users and bots can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | FILE_PART_EMPTY | The provided file part is empty. |
| 400 | FILE_PART_INVALID | The file part number is invalid. |
| 400 | MSG_ID_INVALID | Invalid message ID provided. |
