---
title: "FileHash (тип)"
original: "https://core.telegram.org/type/FileHash"
section: ref
kind: type
layout: layout.njk
---

# FileHash

*Тип из схемы TL.*

> Hash of an uploaded file, to be checked for validity after download

## Определение TL

```
fileHash#f39b035c offset:long limit:int hash:bytes = FileHash;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [fileHash](/constructor/fileHash/) | SHA256 Hash of an uploaded file, to be checked for validity after download |
