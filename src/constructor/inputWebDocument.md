---
title: "inputWebDocument (конструктор)"
original: "https://core.telegram.org/constructor/inputWebDocument"
section: ref
kind: constructor
layout: layout.njk
---

# inputWebDocument

*Конструктор из схемы TL.*

> The document

## Определение TL

```
inputWebDocument#9bed434d url:string size:int mime_type:string attributes:Vector<DocumentAttribute> = InputWebDocument;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| url | [string](/type/string/) | Remote document URL to be downloaded using the appropriate [method](/api/files/) |
| size | [int](/type/int/) | Remote file size |
| mime_type | [string](/type/string/) | Mime type |
| attributes | [Vector](https://core.telegram.org/type/Vector%20t)<[DocumentAttribute](/type/DocumentAttribute/)> | Attributes for media types |

## Тип

[InputWebDocument](/type/InputWebDocument/)

## Related pages

#### [Uploading and Downloading Files](/api/files/)

How to transfer large data batches correctly.
