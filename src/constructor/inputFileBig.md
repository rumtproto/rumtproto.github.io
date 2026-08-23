---
title: "inputFileBig (конструктор)"
original: "https://core.telegram.org/constructor/inputFileBig"
section: ref
kind: constructor
layout: layout.njk
---

# inputFileBig

*Конструктор из схемы TL.*

> Assigns a big file (over 10 MB in size), saved in part using the method [upload.saveBigFilePart](/method/upload.saveBigFilePart/).

## Определение TL

```
inputFileBig#fa4f0bb5 id:long parts:int name:string = InputFile;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| id | [long](/type/long/) | Random file id, created by the client |
| parts | [int](/type/int/) | Number of parts saved |
| name | [string](/type/string/) | Full file name |

## Тип

[InputFile](/type/InputFile/)

## Related pages

#### [upload.saveBigFilePart](/method/upload.saveBigFilePart/)

Saves a part of a large file (over 10 MB in size) to be later passed to one of the methods.
