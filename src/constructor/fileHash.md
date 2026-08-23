---
title: "FileHash (конструктор)"
original: "https://core.telegram.org/constructor/fileHash"
section: ref
kind: constructor
layout: layout.njk
---

# FileHash

*Конструктор из схемы TL.*

> SHA256 Hash of an uploaded file, to be checked for validity after download

## Определение TL

```
fileHash#f39b035c offset:long limit:int hash:bytes = FileHash;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| offset | [long](/type/long/) | Offset from where to start computing SHA-256 hash |
| limit | [int](/type/int/) | Length |
| hash | [bytes](/type/bytes/) | SHA-256 Hash of file chunk, to be checked for validity after download |

## Тип

[FileHash](/type/FileHash/)
