---
title: "webDocument (конструктор)"
original: "https://core.telegram.org/constructor/webDocument"
section: ref
kind: constructor
layout: layout.njk
---

# webDocument

*Конструктор из схемы TL.*

> Remote document

## Определение TL

```
webDocument#1c570ed1 url:string access_hash:long size:int mime_type:string attributes:Vector<DocumentAttribute> = WebDocument;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| url | [string](/type/string/) | Document URL |
| access_hash | [long](/type/long/) | Access hash |
| size | [int](/type/int/) | File size |
| mime_type | [string](/type/string/) | MIME type |
| attributes | [Vector](https://core.telegram.org/type/Vector%20t)<[DocumentAttribute](/type/DocumentAttribute/)> | Attributes for media types |

## Тип

[WebDocument](/type/WebDocument/)
