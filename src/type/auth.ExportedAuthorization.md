---
title: "Auth.ExportedAuthorization (тип)"
original: "https://core.telegram.org/type/auth.ExportedAuthorization"
section: ref
kind: type
layout: layout.njk
---

# Auth.ExportedAuthorization

*Тип из схемы TL.*

> Exported authorization

## Определение TL

```
auth.exportedAuthorization#b434e2b8 id:long bytes:bytes = auth.ExportedAuthorization;

---functions---

auth.exportAuthorization#e5bfffcd dc_id:int = auth.ExportedAuthorization;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [auth.exportedAuthorization](/constructor/auth.exportedAuthorization/) | Data for copying of authorization between data centers. |

## Методы

| Method | Описание |
|---|---|
| [auth.exportAuthorization](/method/auth.exportAuthorization/) | Returns data for copying authorization to another data-center. |
