---
title: "inputFileLocation (конструктор)"
original: "https://core.telegram.org/constructor/inputFileLocation"
section: ref
kind: constructor
layout: layout.njk
---

# inputFileLocation

*Конструктор из схемы TL.*

> DEPRECATED location of a photo

## Определение TL

```
inputFileLocation#dfdaabe1 volume_id:long local_id:int secret:long file_reference:bytes = InputFileLocation;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| volume_id | [long](/type/long/) | Server volume |
| local_id | [int](/type/int/) | File identifier |
| secret | [long](/type/long/) | Check sum to access the file |
| file_reference | [bytes](/type/bytes/) | [File reference](https://core.telegram.org/api/file-references) |

## Тип

[InputFileLocation](/type/InputFileLocation/)

## Related pages

#### [File references](https://core.telegram.org/api/file-references)

How to handle file references.
