---
title: "webDocumentNoProxy (конструктор)"
original: "https://core.telegram.org/constructor/webDocumentNoProxy"
section: ref
kind: constructor
layout: layout.njk
---

# webDocumentNoProxy

*Конструктор из схемы TL.*

> Remote document that can be downloaded without [proxying through telegram](/api/files/)

## Определение TL

```
webDocumentNoProxy#f9c8bcc6 url:string size:int mime_type:string attributes:Vector<DocumentAttribute> = WebDocument;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| url | [string](/type/string/) | Document URL |
| size | [int](/type/int/) | File size |
| mime_type | [string](/type/string/) | MIME type |
| attributes | [Vector](https://core.telegram.org/type/Vector%20t)<[DocumentAttribute](/type/DocumentAttribute/)> | Attributes for media types |

## Тип

[WebDocument](/type/WebDocument/)

## Related pages

#### [Uploading and Downloading Files](/api/files/)

How to transfer large data batches correctly.
