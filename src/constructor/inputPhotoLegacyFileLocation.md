---
title: "inputPhotoLegacyFileLocation (конструктор)"
original: "https://core.telegram.org/constructor/inputPhotoLegacyFileLocation"
section: ref
kind: constructor
layout: layout.njk
---

# inputPhotoLegacyFileLocation

*Конструктор из схемы TL.*

> DEPRECATED legacy photo file location

## Определение TL

```
inputPhotoLegacyFileLocation#d83466f3 id:long access_hash:long file_reference:bytes volume_id:long local_id:int secret:long = InputFileLocation;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| id | [long](/type/long/) | Photo ID |
| access_hash | [long](/type/long/) | Access hash |
| file_reference | [bytes](/type/bytes/) | File reference |
| volume_id | [long](/type/long/) | Volume ID |
| local_id | [int](/type/int/) | Local ID |
| secret | [long](/type/long/) | Secret |

## Тип

[InputFileLocation](/type/InputFileLocation/)
