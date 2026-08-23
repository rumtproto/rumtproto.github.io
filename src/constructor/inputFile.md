---
title: "inputFile (конструктор)"
original: "https://core.telegram.org/constructor/inputFile"
section: ref
kind: constructor
layout: layout.njk
---

# inputFile

*Конструктор из схемы TL.*

> Defines a file saved in parts using the method [upload.saveFilePart](/method/upload.saveFilePart/).

## Определение TL

```
inputFile#f52ff27f id:long parts:int name:string md5_checksum:string = InputFile;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| id | [long](/type/long/) | Random file identifier created by the client |
| parts | [int](/type/int/) | Number of parts saved |
| name | [string](/type/string/) | Full name of the file |
| md5_checksum | [string](/type/string/) | In case the file's [md5-hash](https://en.wikipedia.org/wiki/MD5#MD5_hashes) was passed, contents of the file will be checked prior to use |

## Тип

[InputFile](/type/InputFile/)

## Related pages

#### [upload.saveFilePart](/method/upload.saveFilePart/)

Saves a part of file for further sending to one of the methods.
