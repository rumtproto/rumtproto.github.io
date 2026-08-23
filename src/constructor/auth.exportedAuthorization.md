---
title: "auth.exportedAuthorization (конструктор)"
original: "https://core.telegram.org/constructor/auth.exportedAuthorization"
section: ref
kind: constructor
layout: layout.njk
---

# auth.exportedAuthorization

*Конструктор из схемы TL.*

> Data for copying of authorization between data centers.

## Определение TL

```
auth.exportedAuthorization#b434e2b8 id:long bytes:bytes = auth.ExportedAuthorization;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| id | [long](/type/long/) | current user identifier |
| bytes | [bytes](/type/bytes/) | authorizes key |

## Тип

[auth.ExportedAuthorization](/type/auth.ExportedAuthorization/)
